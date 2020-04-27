{% include "test_examiner.liquid" %}

<table class="table">
  <tbody>
    <tr>
      <td width="50px"><span class="fas fa-tasks"></span></td>
      <td>Deploy a pod with a specific name.</td>
      <td width="50px">{%- render "verify_test.liquid", test: "pod-named-one" -%}</td>
    </tr>
  </tbody>
</table>

In this this task you are required to deploy a pod. The name of the pod must be "one".

Don't know how. One way is to execute the following command.

```execute
kubectl run one -it --image=busybox:latest --restart=Never -- sh
```

You could also have manually created a ``Pod`` resource definition as a YAML or JSON file and
