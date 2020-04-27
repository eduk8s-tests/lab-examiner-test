const k8s = require('@kubernetes/client-node');

const session_namespace = process.env.SESSION_NAMESPACE || 'default';

const kc = new k8s.KubeConfig();

kc.loadFromDefault();

var subscriptions = {};

function subscribe(ws) {
  var watch = new k8s.Watch(kc);

  watch.watch('/api/v1/namespaces/'+session_namespace+'/pods',
    {},
    (type, obj) => {
      if (obj['metadata']['name'] == 'one') {
        if (type === 'ADDED' || type === 'MODIFIED') {
          if (obj['status']['phase'] == 'Running') {
            if (ws.id in subscriptions) {
              console.log('passed:', ws.id, ws.test);
              subscriptions[ws.id]['ws'].send('pending');
            }
          }
        }
        if (type === 'DELETED') {
          if (ws.id in subscriptions) {
            console.log('passed:', ws.id, ws.test);
            subscriptions[ws.id]['ws'].send('passed');
          }
        }
      }
    },
    (err) => {
      console.log(err);
    })
  .then((req) => {
    subscriptions[ws.id] = {ws: ws, req: req}
  });
}

function unsubscribe(ws) {
  if (ws.id in subscriptions) {
    console.log('unsubscribe:', ws.id, ws.test);
    subscriptions[ws.id]['req'].abort();
    delete subscriptions[ws.id];
  }
}

module.exports = {
  subscribe: subscribe,
  unsubscribe: unsubscribe,
};
