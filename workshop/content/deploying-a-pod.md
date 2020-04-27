{% include "test_examiner.liquid" %}

<table class="table">
  <tbody>
    <tr>
      <td width="50px"><span class="fas fa-tasks"></span></td>
      <td>Create a pod named "one".</td>
      <td width="50px">{%- render "verify_test.liquid", test: "pod-named-one" -%}</td>
    </tr>
  </tbody>
</table>

In this this task you are required to deploy a pod with name "one".

The user is supposed to work it out themselves, but because it isn't a normal thing one would do, we'll give you command here anyway.

```execute
kubectl run one -it --image=busybox:latest --restart=Never -- sh
```
