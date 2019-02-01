<template>
  <div>

    <!--
      TODO
      Generalize (combo box etc)
      Input types (number etc)
    -->

    <h2>Checkbox</h2>

    <div>
      <s-checkbox v-model="checked">Checkbox</s-checkbox>
    </div>

    <div>
      <s-checkbox v-model="multi">Multi-state</s-checkbox>&nbsp;
      <s-button small @click="multi = null">Reset</s-button>
    </div>

    <div>
      <s-checkbox inactive>Inactive</s-checkbox>
    </div>

    <h2>Radio buttons</h2>

    <!-- Container group is needed -->

    <s-radio-group v-model="option">
      <div>
        <s-radio-button name="option" value="1">Option 1</s-radio-button>
      </div>
      <div>
        <s-radio-button name="option" value="2">Option 2</s-radio-button>
      </div>
    </s-radio-group>

    <p class="value">Selected: {{ option }}</p>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BasicDemo',

  data() {
    return {
      checked: false,
      multi: null as boolean | null,
      text: '-',
      name: '',
      number: '',
      email: '',
      password: '',
      time: '',
      option: '1',
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.value {
  @include paragraph-font;
  color: $grayer;
}
</style>
