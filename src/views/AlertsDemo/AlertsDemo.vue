<template>
  <div>
    <div class="header">
      <h1>Alerts</h1>
    </div>

    <p class="help">
      The component <b>s-alert</b> is used to convey important information to the user.
      Different kinds of styles and icons are available, e.g. success, warning or error.
    </p>

    <h2>Basic alerts</h2>
    <example :code="basic" />

    <div class="header">
      <h1>API</h1>
    </div>

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

    <div class="header">
      <h1>Examples</h1>
    </div>

    <h2>Alert with icon or actions</h2>
    <example :code="special" />

    <h2>Alert with progress indicator</h2>
    <example
      :code="`\
  <s-alert progress> 38% completed </s-alert>
  <s-alert progress warning>Important process running</s-alert>
      `"
    />

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

    special() {
      return `\
  <div>
    <s-alert icon="Calendar">
      Your free trial has been extended with 14-days. Enjoy!
    </s-alert>

    <s-alert warning icon="Lock-User1">
      Your password has not been changed in 2 months.

      <template v-slot:buttons>
        <s-button small>Remind me later</s-button>
        <s-button small primary>Change now</s-button>
      </template>
    </s-alert>
  </div>`;
    },
  },
});
</script>
