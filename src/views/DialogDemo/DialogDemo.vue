<template>
  <div>
    <div class="header">
      <h1>Dialog</h1>
    </div>

    <p class="help">
      The <b>s-dialog</b> component displays a dialog with a header and a 'close' icon
      in the top right corner.
    </p>
    <p class="help">
      The dialog content is wrapped in a <b>form</b> element. Additional attributes and
      event listeners are passed to this element. <br> Most of the time, users would want to
      handle the <b>submit</b> event, as in the example below.
    </p>

    <h2>Example</h2>
    <example
      :code="`
  <s-button @click=&quot;visible = true&quot;>Show dialog</s-button>

  <s-dialog
    v-model=&quot;visible&quot;
    heading=&quot;I am a dialog&quot;
    @submit.prevent=&quot;visible = false&quot;
  >
    <p>Enter your name:</p>
    <p><s-text-field label=&quot;Name&quot; />
    <p><s-drop-down :items=&quot;data.items&quot; label=&quot;Select&quot; />
    <p><s-button primary submit>OK</s-button></p>
  </s-dialog>
      `"
      :data="{visible: false, data: { items }}"
      max-width="16rem"
    />

    <div class="header">
      <h1>API</h1>
    </div>

    <s-tabs>
      <s-tab to="props">
        Props
      </s-tab>
      <s-tab to="slots">
        Slots
      </s-tab>
      <s-tab to="events">
        Events
      </s-tab>
    </s-tabs>

    <router-view />

    <!--div class="header">
      <h1>Examples</h1>
    </div-->


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
