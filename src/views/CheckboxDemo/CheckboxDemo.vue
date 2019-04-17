<template>
  <div>
    <h1>Checkbox</h1>
    <p class="help">
      The <code>s-checkbox</code> component is a checkbox with three possible states:
      Checked, unchecked and 'unknown'.
    </p>

    <h2>Standard checkbox</h2>
    <example
      :code="`<s-checkbox v-model=&quot;checked&quot;>Checkbox</s-checkbox>`"
      :data="{checked: false}"
    />

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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CheckboxDemo',
});
</script>
