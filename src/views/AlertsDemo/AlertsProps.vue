<template>
  <props-list>
    If none of the below alert types are chosen, a default
    alert is shown.<br><br>
    <props-item
      name="success"
      type="Boolean"
    >
      Shows the success alert.
    </props-item>
    <props-item
      name="warning"
      type="Boolean"
    >
      Shows the warning alert.
    </props-item>
    <props-item
      name="error"
      type="Boolean"
    >
      Shows the error alert.
    </props-item>
    <props-item
      name="progress"
      type="Boolean"
    >
      Shows the progress alert.
    </props-item>
    <props-item
      name="Icon"
      type="String"
      default-value="None"
    >
      The icon to be shown in the alert.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AlertsProps',
});
</script>
