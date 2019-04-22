<template>
  <div>
    <h1>Datepicker</h1>
    <p class="help">
      The <code>s-datepicker</code> component is for selecting a date or a range of dates.
    </p>

    <h2>With range</h2>

    <example
      :code="`\
  <s-date-range
    withMenu
    v-model=&quot;period&quot;
    label=&quot;Period&quot;
    localeString=&quot;nb&quot;
  />`"
      :data="{
        period: { from: null, to: null, preset: null },
      }"
      max-width="24rem"
    />

    <h2>Single date</h2>
    <example
      :code="`\
  <s-date-single
    v-model=&quot;date&quot;
    label=&quot;Dato&quot;
  />`"
      :data="{ date: {} }"
      max-width="24rem"
    />

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
      <todo>
        Selected current month should send filter "current month" and not
        just dates (ie. 01.03.2019 - 31.03.2019)
      </todo>
      <todo>Scroll to month if selected period is outside viewable months</todo>
      <todo>Add ability to zoom out: month-view, year-view</todo>
      <todo>Styling of multiple inputs</todo>
      <todo>Add arrow-navigation on focus</todo>
      <todo>Make sure text wraps correctly if datepicker width changes</todo>
      <todo>Add possibilities to choose user-defined periods in menu</todo>
      <todo>Handle toDate before fromDate</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DatepickerDemo',
});
</script>
