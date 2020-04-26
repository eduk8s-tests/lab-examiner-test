const WebSocket = require('ws');
const uuid = require('uuid');

const tests = {
  'pod-name-one': require('./verify-pod-name-one.js'),
};

const wss = new WebSocket.Server({ port: 11111 });

function noop() {}

function heartbeat() {
  this.isAlive = true;
}

wss.on('connection', function connection(ws) {
  ws.id = uuid.v4();

  console.log('open:', ws.id);

  ws.isAlive = true;

  ws.on('pong', heartbeat);

  ws.on('close', function close() {
    console.log('close:', ws.id, ws.test);
    if (ws.test in tests) {
      tests[ws.test].unsubscribe(ws);
    }
  });

  ws.on('message', function incoming(test) {
    console.log('request:', ws.id, test);

    if (test in tests) {
      ws.test = test;
      tests[test].subscribe(ws);
    }
  });
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) {
        return ws.terminate();
    }

    ws.isAlive = false;

    ws.ping(noop);
  });
}, 5000);
