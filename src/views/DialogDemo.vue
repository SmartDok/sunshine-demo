<template>
  <div>
    <h2>Dialog</h2>

    <example
      :code='`
  <s-button @click="visible = true">Show dialog</s-button>

  <s-dialog v-model="visible" heading="I am a dialog" @submit.prevent="visible = false">
    <p>Enter your name:</p>
    <p><s-text-field label="Name" />
    <p><s-drop-down :items="data.items" label="Select" />
    <p><s-button primary submit>OK</s-button></p>
  </s-dialog>
      `'
      :data="{visible: false, data: { items }}"
    />

    <p class="help">
      The dialog content is wrapped in a <b>form</b> element. Additional attributes and
      event listeners are passed to this element. Most of the time, users would want to
      handle the <b>submit</b> event, as in the example above.
    </p>

    <h2>Props</h2>
    <props-list>
      <props-item name="visible" type="Boolean">
        Sets/gets the visible state. Updatet dynamically when the component is used with v-model.
      </props-item>
      <props-item name="heading" type="String">
        The title of the dialog.
      </props-item>
    </props-list>

    <h2>Events</h2>
    <props-list>
      <props-item name="@toggle">
        Emits false when the dialog is closed.
      </props-item>
    </props-list>

    <todo-list>
      <todo>Prevent focus outside dialog with Tab key</todo>
    </todo-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DialogDemo',

  data() {
    return {
      items: [
        'SAccordion', 'SAccordionItem', 'SAlert', 'SBaseInput', 'SButton',
        'SCalendar', 'SCheckbox', 'SDialog', 'SDropDown', 'SGrid',
        'SGridItem', 'SIcon', 'SInspector', 'SList', 'SListItem',
        'SListSeparator', 'SMenu', 'SPieChart', 'SProgress', 'SRadioButton',
        'STab', 'STable', 'STabs', 'STextField', 'SDatepicker',
      ].map(n => ({ key: n, label: n })),
    };
  },
});
</script>
