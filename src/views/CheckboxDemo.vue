<template>
  <div>
    <h2>Standard checkbox</h2>
    <example
      :code='`<s-checkbox v-model="checked">Checkbox</s-checkbox>`'
      :data="{checked: false}"
    />

    <h2>Inactive checkbox</h2>
    <example
      :code='`<s-checkbox inactive>Inactive</s-checkbox>`'
    />

    <h2>Multiple state checkbox</h2>
    <p class="help">
      Checkboxes can have an "unknown" state, that is neither checked nor
      unchecked. This is achieved by setting the bound value to <b>null</b>.
      Under no circumstance will the component change the value to
      <b>null</b>. In this example, a button is added to reset the value to
      <b>null</b>.
    </p>

    <example :code="multi" :data="{state: null}" />

  <h2>Props</h2>
    <props-list>
      <props-item name="checked" type="Boolean">
        Read or the set the checked state. If set to null the checkbox shows an 'unknown' state.
        If v-model is used this prop is automatically updated.
      </props-item>
      <props-item name="inactive" type="Boolean">
        Sets the checkbox to an inactive state.
      </props-item>
    </props-list>

   <h2>Events</h2>
    <props-list>
      <props-item name="@change">
        The state of the checkbox has changed. The new state is emitted.
      </props-item>
    </props-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonDemo',

  computed: {
    multi() {
      return `\
  <s-checkbox v-model="state">Multi-state</s-checkbox>&nbsp;
  <p>
    <s-button small @click="state = null">Reset</s-button>
  </p>`;
    },
  },
});
</script>
