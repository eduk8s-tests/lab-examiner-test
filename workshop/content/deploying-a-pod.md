{% include "test_examiner.liquid" %}

<table class="table table-dark">
  <tbody>
    <tr>
      <th scope="row">{%- render "verify_test.liquid", test: "pod-named-one" -%}</th>
      <td>Task 1: Create a pod named "one".</td>
    </tr>
  </tbody>
</table>

{% render "verify_test.liquid", test: "pod-named-one" %}

In this this task you are required to deploy a pod with name "one".

The user is supposed to work it out themselves, but because it isn't a normal thing one would, we'll give you command here anyway.

```execute
kubectl run one -it --image=busybox:latest --restart=Never -- sh
```
