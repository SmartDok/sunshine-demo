
<template>
  <div>
    <s-tabs>
      <s-tab to="/inputs">Examples</s-tab>
      <s-tab to="/inputs-docs">Documentation</s-tab>
    </s-tabs>

    <h2>Props</h2>

    <props-list>
      <props-item name="label" type="String">
        The label shown in the input field.
      </props-item>
      <props-item name="placeholder" type="String">
        The placeholder of the input. Disappears when the user starts typing.
      </props-item>
      <props-item name="value" type="String">
       Sets the content of the input. If v-model is used this prop is automatically
       updated while typing.
      </props-item>
      <props-item name="maxLength" type="Number">
        Only available if label is set.<br>
        A counter label will become visible when 80% of maxLength is used.<br>
        If the input exceeds maxLength characters the counter label becomes red.
      </props-item>
      <props-item name="format" type="String">
        When the input area has focus, this is string is shown in the input area
        as a guide for the user.
      </props-item>
      <props-item name="number" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="phone" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="password" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="email" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="inactive" type="Boolean">
       Sets the input to an inactive state.
      </props-item>
    </props-list>

    <h2>Events</h2>
    <props-list>
      <props-item name="@input">
        The content of the input field has changed. The value prop is emitted.
      </props-item>
    </props-list>
  </div>
</template>
