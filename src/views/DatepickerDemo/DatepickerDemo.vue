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
        period: {},
      }"
      max-width="14rem"
    />

    <h2>Single date</h2>
    <example
      :code="`\
  <s-date-single
    v-model=&quot;date&quot;
    label=&quot;Date&quot;
  />`"
      :data="{ date }"
      max-width="12rem"
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
      <todo>Add ability to zoom out: month-view, year-view</todo>
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
