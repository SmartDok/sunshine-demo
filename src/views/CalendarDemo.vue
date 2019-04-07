<template>
  <div>
    <div class="options">
      <s-button @click="onPrevClick">
        &lt;&lt;
      </s-button>
      <s-button @click="onTodayClick">
        {{ today }}
      </s-button>
      <s-button @click="onNextClick">
        &gt;&gt;
      </s-button>
    </div>

    <s-calendar :date="date" />

    <!-- Currently under calendar :(

      Should SCalendar have position absolute?
      Width of the calendar is set to 100vw - some pixels.
      Since there a menu on the left in the demo we have to scroll
      right to see the whole component.
      Also.. the componenet name is currently 's-celendar'

    -->
    <h2>Props</h2>
    <props-list>
      <props-item
        name="date"
        type="moment.Moment"
      >
        Sets the calendar date.
      </props-item>
    </props-list>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  name: 'CalenderDemo',

  data() {
    let today = moment().startOf('day');
    return {
      date: today,
      today: today.format('LL'),
    };
  },

  methods: {
    onPrevClick() {
      this.date = moment(this.date).subtract(1, 'month');
    },

    onNextClick() {
      this.date = moment(this.date).add(1, 'month');
    },

    onTodayClick() {
      let today = moment().startOf('day');
      this.date = today;
    },
  },
});
</script>


<style lang="scss" scoped>
.options {
  margin-bottom: 20px;
  text-align: center;

  button {
    padding: 5px 10px;
    margin: 0 10px;
  }
}
</style>
