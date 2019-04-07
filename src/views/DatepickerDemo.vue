<template>
  <div>
    <s-datepicker />

    <h2>Props</h2>
    <props-list>
      None exposed at the time.
    </props-list>

    <h2>Events</h2>
    <props-list>
      None exposed at the time.
    </props-list>
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
