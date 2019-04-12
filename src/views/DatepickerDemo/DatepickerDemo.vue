<template>
  <div>
    <h1>Datepicker</h1>
    <p class="help">
      The <code>s-datepicker</code> component is for selecting a date or a range of dates.
    </p>

    <br>

    <s-datepicker />

    <h1>API</h1>
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

    <todo-list>
      <todo>Toggle datepicker with a SMenu component or an input-field</todo>
      <todo>Move info about selected period to input-field</todo>
      <todo>Scroll to month if selected period is outside viewable months</todo>
      <todo>Add arrow-navigation on focus</todo>
      <todo>Make sure text wraps correctly if datepicker width changes</todo>
      <todo>Add possibilities to choose user-defined periods in menu</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DatepickerDemo',
});
</script>
