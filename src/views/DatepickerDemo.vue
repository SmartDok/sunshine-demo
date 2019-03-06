<template>
    <div>

        <!-- Verdi inn gjennom *value* prop, og verdi ut gjennom *@input* event -->

        <!-- :fromDate="from"
        :toDate="to" -->
        <h2>With range</h2>
        <s-date-field
          rangeInput
          :fromDate="from"
          :toDate="to"
          stringFormat="dd.mm.åååå"
          @input="getPeriod"
        />

        <!-- :selectedDate="date" -->
        <h2>Single date</h2>
        <s-date-field
          :date="date"
          stringFormat="dd.mm.åååå"
          @input="getDate"
        />

        <s-accordion class="datepicker-props-list">
          <s-accordion-item>
            <template v-slot:heading>Possible props</template>
            <li>rangeInput: boolean (adds from - to date)</li>
            <li>date: Moment (the default selected date)</li>
            <li>from: Moment (the default from date)</li>
            <li>to: Moment (the default to date)</li>
          </s-accordion-item>
        </s-accordion>

        <todo-list>
          <todo>Validate input and show error / valid input</todo>
          <todo>Validate input before creating moment</todo>
          <todo>Clear selected dates from calendar when input is cleared</todo>
          <todo>Handle from and to is same date in period</todo>
          <todo>Styling of date-formatted input</todo>
          <todo>Styling of multiple inputs</todo>
          <todo>Scroll to month if selected period is outside viewable months</todo>
          <todo>Add arrow-navigation on focus</todo>
          <todo>Make sure text wraps correctly if datepicker width changes</todo>
          <todo>Add possibilities to choose user-defined periods in menu</todo>
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
      from: '',
      to: '',
      date: '',
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
