<template>
  <div>
    <s-tabs>
      <s-tab to="/textarea">Examples</s-tab>
      <s-tab to="/textarea-docs">Documentation</s-tab>
    </s-tabs>

    <h2>Props</h2>
    <props-list>
      <props-item name="label" type="String">
        The label shown in the textarea.
      </props-item>
      <props-item name="placeholder" type="String">
        The placeholder of the textarea. Disappears when user starts typing.
      </props-item>
      <props-item name="value" type="String">
       Sets the content of the textarea. If v-model is used this
       prop is automatically updated while typing.
      </props-item>
      <props-item name="maxLength" type="Number">
        Only available if label is set.<br>
        A counter label will become visible when 80% of maxLength is used.<br>
        If the input exceeds maxLength characters the counter label becomes red.
      </props-item>
      <props-item name="intiRows" type="Number">
        The initial height of the textarea in rows. Default: 2.
      </props-item>
      <props-item name="maxRows" type="Number">
        The maximum height of the textarea in rows. Default: 10.
      </props-item>
      <props-item name="inactive" type="Boolean">
       Sets the textarea to an inactive state.
      </props-item>
      <props-item name="readonly" type="Boolean">
       Sets the textarea to a read only state.
      </props-item>
    </props-list>

    <h2>Events</h2>

    <props-list>
      <props-item name="@input">
        The content of the textarea has changed. The value prop is emitted.
      </props-item>
    </props-list>
  </div>
</template>
