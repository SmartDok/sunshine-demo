<template>
  <div>
    <h2>Dialog</h2>

    <example
      :code='`
  <s-button @click="visible = true">Show dialog</s-button>

  <s-dialog v-model="visible">
    <p>Enter your name:</p>
    <p><s-text-field label="Name" />
    <p><s-drop-down :items="items" label="Select" />
    <p><s-button primary @click="visible = false">OK</s-button></p>
  </s-dialog>
      `'
      :data="{visible: false, items}"
      :hiddenData="{items}"
    />

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
})
</script>

