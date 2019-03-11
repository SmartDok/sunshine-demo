<template>
    <div>
        <h2>With range</h2>
        <s-date-range
          rangeInput
          v-model="period"
          fromLabel="Fra dato"
          toLabel="Til dato"
          @input="getPeriod"
        />
        <h2>Single date</h2>
        <s-date-single
          v-model="date"
          label="Dato"
          @input="getDate"
        />

        <s-accordion class="datepicker-props-list">
          <s-accordion-item>
            <template v-slot:heading>Possible props</template>
            <li>rangeInput: boolean (adds from - to date)</li>
            <li>selectedDate: Moment (date format (ISO 8601) 'YYYY-MM-DD' | {y, M, d}) (the default selected date)</li>
            <li>fromDate: Moment (date format (ISO 8601) 'YYYY-MM-DD' | {y, M, d}) (the default from date)</li>
            <li>toDate: Moment (date format (ISO 8601) 'YYYY-MM-DD' | {y, M, d}) (the default to date)</li>
          </s-accordion-item>
        </s-accordion>

        <todo-list>
          <todo>Split s-date-field into two components for range / single</todo>
          <todo>Wrap s-text-field in moment -> string converter</todo>
          <todo>Make v-model optional</todo>
          <todo>Scroll to month if selected period is outside viewable months</todo>
          <todo>Fix inline style on "s-datepicker__grid__container" in DatepickerCalendar</todo>
          <todo>Add ability to zoom out: month-view, year-view</todo>
          <todo>Styling of date-formatted input</todo>
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
import moment from 'moment';

export default Vue.extend({
  name: 'DatepickerDemo',

  data() {
    return {
      date: moment('2019-03-24'),
      period: {
        from: moment({ y: 2019, M: 2, d: 3 }),
        to: moment('2019-03-24'),
      }
    }
  },

  methods: {
    getPeriod(payload: any) {
      console.log('Get Period ', payload);
    },

    getDate(payload: any) {
      console.log('Get date ', payload);
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
