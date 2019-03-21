<template>
    <div>
        <h2>With range</h2>
        <s-date-range
          includeMenu
          v-model="period"
          fromLabel="Fra dato"
          toLabel="Til dato"
        />

        <h2>Single date</h2>
        <s-date-single
          v-model="date"
          label="Dato"
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
import moment, { Moment } from 'moment';

export default Vue.extend({
  name: 'DatepickerDemo',

  data() {
    return {
      date: {} as Moment,
      period: {
        from: {} as Moment,
        to: {} as Moment,
      }
    }
  },

  watch: {
    date(newVal) {
      console.log('Date ', moment(newVal).format('DD-MM-YYYY'));
    },

    period(newVal) {
      console.log('Period from', moment(newVal.from).format('DD-MM-YYYY'));
      console.log('Period to', moment(newVal.to).format('DD-MM-YYYY'));
    },
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.datepicker-props-list {
  margin-top: 3rem;
}

</style>
