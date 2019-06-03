<!--
      Should SCalendar have position absolute?
      Width of the calendar is set to 100vw minus some pixels.
      Since there a menu on the left in the demo we have to scroll
      right to see the whole component.
      Also.. the components name is currently 's-celendar'
-->

<template>
  <div>
    <h1>Calendar</h1>
    <p class="help">
      A calendar.
    </p>
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

    <div class="position">
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
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { DateTime } from 'luxon';

export default Vue.extend({
  name: 'CalenderDemo',

  data() {
    let today = DateTime.local().startOf('day');
    return {
      date: today,
      today: today.toLocaleString(DateTime.DATE_FULL),
    };
  },

  methods: {
    onPrevClick() {
      this.date = this.date.minus({ month: 1 });
    },

    onNextClick() {
      this.date = this.date.plus({ month: 1 });
    },

    onTodayClick() {
      let today = DateTime.local().startOf('day');
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

.position {
  position: relative;
  top: 36rem;
}
</style>
