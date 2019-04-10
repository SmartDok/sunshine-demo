<template>
  <props-list>
    <props-item
      name="label"
      type="String"
    >
      The label shown in the text field.
    </props-item>
    <props-item
      name="placeholder"
      type="String"
    >
      The placeholder of the text field. Disappears when the user starts typing.
    </props-item>
    <props-item
      name="value"
      type="String"
    >
      Sets the content of the text field. If v-model is used this prop is automatically
      updated while typing.
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
      If an error message is present the text field gets a red border and the error
      message is displayed below.
    </props-item>
    <props-item
      name="format"
      type="String"
    >
      When the text field has focus, this string is shown in the input area
      as a guide for the user.
    </props-item>
    <props-item
      name="number"
      type="Boolean"
    >
      Sets the expected input type.
    </props-item>
    <props-item
      name="phone"
      type="Boolean"
    >
      Sets the expected input type.
    </props-item>
    <props-item
      name="password"
      type="Boolean"
    >
      Sets the expected input type.
    </props-item>
    <props-item
      name="email"
      type="Boolean"
    >
      Sets the expected input type.
    </props-item>
    <props-item
      name="inactive"
      type="Boolean"
    >
      Sets the input to an inactive state.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextFieldProps',
});
</script>
