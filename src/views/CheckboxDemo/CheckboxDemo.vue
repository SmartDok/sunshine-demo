<template>
  <div>
    <div class="header">
      <h1>Checkbox</h1>
    </div>

    <p class="help">
      The <b>s-checkbox</b> component is a checkbox with three possible states:
      Checked, unchecked and 'unknown'.
    </p>

    <h2>Standard checkbox</h2>
    <example
      :code="`<s-checkbox v-model=&quot;checked&quot;>Checkbox</s-checkbox>`"
      :data="{checked: false}"
    />

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

    <h2>Inactive checkbox</h2>
    <example
      :code="`<s-checkbox inactive>Inactive</s-checkbox>`"
    />

    <h2>Multiple state checkbox</h2>
    <p class="help">
      Checkboxes can have an "unknown" state, that is neither checked nor
      unchecked. This is achieved by setting the bound value to <b>null</b>.
      Under no circumstance will the component change the value to
      <b>null</b>. In this example, a button is added to reset the value to
      <b>null</b>.
    </p>

    <example
      :code="multi"
      :data="{state: null}"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonDemo',

  computed: {
    multi() {
      return `\
  <s-checkbox v-model="state">Multi-state</s-checkbox>
  <div><s-button small @click="state = null">Reset</s-button></div>`;
    },
  },
});
</script>
