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

    <h2>Select</h2>

    <s-select v-model="country" :items="countries" label="Primary" primary />&nbsp;

    <s-select v-model="country" :items="countries" label="Secondary" />

    <p>
      <s-drop-down label="Drop down" />
    </p>

    <!--
      TODO
      Keyboard mapping
    -->

    <h2>Text field</h2>

    <div>
      <s-text-field v-model="name" label="Project name" /> <span class="value"> {{ name }}</span>
    </div>

    <div>
      <s-text-field v-model="number" phone label="Phone number" /> <span class="value"> {{ number }}</span>
    </div>

    <div>
      <s-text-field v-model="email" email label="Email" /> <span class="value"> {{ email }}</span>
    </div>

    <div>
      <s-text-field v-model="password" password label="Password" /> <span class="value"> {{ password }}</span>
    </div>

    <div>
      <s-text-field v-model="time" format="00:00" label="Expected format" /> <span class="value"> {{ time }}</span>
    </div>



    <div>
      <s-text-field label="Inactive Input" inactive />
    </div>

    <div>
      <s-text-field label="Inactive Input" value="With text" inactive />
    </div>


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
      text: '-',
      name: '',
      number: '',
      email: '',
      password: '',
      time: '',
      countries: [
        {title: 'Norge'},
        {title: 'Sverige'},
        {title: 'England'},
      ],
      country: null,
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
