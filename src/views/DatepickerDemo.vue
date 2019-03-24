<template>
    <div>
        <h2>With range</h2>

        <example
          :code='`\
  <s-date-range
    withMenu
    v-model="period"
    :filter="filter"
    fromLabel="Fra dato"
    toLabel="Til dato"
    localeString="nb"
  />`'
          :data="{
            period: { from: {}, to: {} },
            filter: { option: 'Current', period: 'Month' },
          }"
        />

        <h2>Single date</h2>
        <example
          :code='`\
  <s-date-single
    v-model="date"
    label="Dato"
  />`'
          :data="{ date: {} }"
        />

        <todo-list>
          <todo>Slected current month should send filter "current month" and not just dates (ie. 01.03.2019 - 31.03.2019)</todo>
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
