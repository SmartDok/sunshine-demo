<template>
  <div>
    <h2>Basic alerts</h2>

    <s-alert success>Success! Data transfered successfully.</s-alert>

    <s-alert warning>
      Light warning: We have planned maintenance this evening from
      23:00 to 01:30.
    </s-alert>

    <s-alert error>
      Serious warning: I’m sorry, Dave. I'm afraid I can't do that.
    </s-alert>

    <h2>Alert with icon or actions</h2>

    <s-alert success>
      <s-icon name="hourglass"></s-icon>
      Your free trail has been extended with 14-days. Enjoy!
    </s-alert>

    <s-alert warning>
      <s-icon name="password"></s-icon>
      Your password has not been changed in 2 months.

      <template slot="buttons">
        <s-button small>Remind me later</s-button>
        <s-button small primary>Change now</s-button>
      </template>
    </s-alert>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AlertsDemo',
});
</script>
