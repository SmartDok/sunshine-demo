<template>
  <div>
    <h1>Alerts</h1>
    <p class="help">
      The component <code>s-alert</code> is used to convey important information to the user.
      Different kinds of styles and icons are available, e.g. success, warning or error.
    </p>

    <h2>Basic alerts</h2>
    <example :code="basic" />

    <router-link
      to="examples"
      class="s-link"
    >
      View more examples
    </router-link>

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
      <todo done>
        Progress indicator.
      </todo>
      <todo>(later) Dismiss button w/event.</todo>
      <todo>Neutral alert design may be changed.</todo>
      <todo>Expose list of available icons?</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AlertsDemo',

  computed: {
    basic() {
      return `\
  <div>
    <s-alert>Default alert.</s-alert>

    <s-alert success>Success! Data transfered successfully.</s-alert>

    <s-alert warning>
      Light warning: We have planned maintenance this evening from
      23:00 to 01:30.
    </s-alert>

    <s-alert error>
      Serious warning: I’m sorry, Dave. I'm afraid I can't do that.
    </s-alert>
  </div>`;
    },
  },
});
</script>
