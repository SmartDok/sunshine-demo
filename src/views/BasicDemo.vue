<template>
  <div>
    <h2>Buttons</h2>

    <s-button primary @click="text = 'Primary action'">Primary action</s-button>&nbsp;
    <s-button @click="text = 'Secondary action'">Secondary action</s-button>&nbsp;
    <s-button primary inactive>Primary inactive</s-button>&nbsp;
    <s-button inactive>Secondary inactive</s-button>&nbsp;

    <p>
      <span class="value">{{ text }}</span>
    </p>


    <h3>Smaller version</h3>
    <s-button small primary>Primary</s-button>&nbsp;
    <s-button small>Secondary</s-button>

    <h2>Text field</h2>

    <p>
      <s-text-field v-model="name" label="Project name" /> <span class="value"> {{ name }}</span>
    </p>

    <p>
      <s-text-field v-model="number" phone label="Phone number" /> <span class="value"> {{ number }}</span>
    </p>

    <p>
      <s-text-field v-model="email" email label="Email" /> <span class="value"> {{ email }}</span>
    </p>

    <p>
      <s-text-field v-model="password" password label="Password" /> <span class="value"> {{ password }}</span>
    </p>

    <p>
      <s-text-field v-model="time" format="00:00" label="Expected format" /> <span class="value"> {{ time }}</span>
    </p>



    <p>
      <s-text-field label="Inactive Input" inactive />
    </p>

    <p>
      <s-text-field label="Inactive Input" value="With text" inactive />
    </p>


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
  name: 'InputsDemo',

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
