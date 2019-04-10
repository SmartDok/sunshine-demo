<template>
  <props-list>
    <props-item
      name="label"
      type="String"
    >
      The label shown in the textarea.
    </props-item>
    <props-item
      name="placeholder"
      type="String"
    >
      The placeholder of the textarea. Disappears when user starts typing.
    </props-item>
    <props-item
      name="value"
      type="String"
    >
      Sets the content of the textarea. If v-model is used this
      prop is automatically updated while typing.
    </props-item>
    <props-item
      name="maxLength"
      type="Number"
    >
      Only available if label is set.<br>
      A counter label will become visible when 80% of maxLength is used.<br>
      If the input exceeds maxLength characters the counter label becomes red.
    </props-item>
    <props-item
      name="error"
      type="String"
    >
      If an error message is present the text area gets a red border and the error
      message is displayed below.
    </props-item>
    <props-item
      name="intiRows"
      type="Number"
      default-value="2"
    >
      The initial height of the textarea in rows.
    </props-item>
    <props-item
      name="maxRows"
      type="Number"
      default-value="10"
    >
      The maximum height of the textarea in rows.
    </props-item>
    <props-item
      name="inactive"
      type="Boolean"
    >
      Sets the textarea to an inactive state.
    </props-item>
    <props-item
      name="readonly"
      type="Boolean"
    >
      Sets the textarea to a read only state.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextAreaProps',
});
</script>
