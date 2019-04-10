<template>
  <props-list>
    <props-item
      name="date"
      type="moment.Moment"
    >
      Sets the calendar date.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CalendarProps',
});
</script>
