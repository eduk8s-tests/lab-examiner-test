{% include "test_examiner.liquid" %}

<table class="table">
  <tbody>
    <tr>
      <td width="50px"><span class="fas fa-tasks"></span></td>
      <td>Deploy a pod with a specific name.</td>
      <td width="50px">{%- render "verify_test.liquid", test: "deploy-pod-named-one" -%}</td>
    </tr>
  </tbody>
</table>

In this this task you are required to deploy a pod. The name of the pod must be "one".

Don't know how? One way is to execute the following command.

```execute
kubectl run one -it --image=busybox:latest --restart=Never -- sh
```

You could also have manually created a ``Pod`` resource definition as a YAML or JSON file and

If you use the above command, you will need to exit from the interactive shell it created before continuing.

```execute
exit
```

<table class="table">
  <tbody>
    <tr>
      <td width="50px"><span class="fas fa-tasks"></span></td>
      <td>Delete a pod with a specific name.</td>
      <td width="50px">{%- render "verify_test.liquid", test: "delete-pod-named-one" -%}</td>
    </tr>
  </tbody>
</table>

In this task you are required to delete the pod you created above by name.

Don't know how? One way is to execute the following command.

```execute
kubectl delete pod one
```
