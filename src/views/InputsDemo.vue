<template>
  <div>
    <h2>Standard inputs</h2>
    <example :code="standard" :data="{name: '', phone: '', number: '', email: '', password: ''}" />

    <p class="help">
     For more examples: <router-link to="/inputs-demo">Inputs demo page</router-link>
    </p>

    <h2>Props</h2>

    <props-list>
      <props-item name="label" type="String">
        The label shown in the input field.
      </props-item>
      <props-item name="placeholder" type="String">
        The placeholder of the input. Disappears when user starts typing.
      </props-item>
      <props-item name="value" type="String">
       Sets the content of the input. If v-model is used this prop is automatically
       updated while typing.
      </props-item>
      <props-item name="format" type="String">
        When the input area has focus, this is string is shown in the input area
        as a guide for the user.
      </props-item>
      <props-item name="number" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="phone" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="password" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="email" type="Boolean">
        Sets the expected input type.
      </props-item>
      <props-item name="inactive" type="Boolean">
       Sets the input to an inactive state.
      </props-item>
    </props-list>

    <todo-list>
      <todo>Read-only state, shown in design.</todo>
      <todo>Caution/warning/confirmation state, shown in design.</todo>
      <todo>Pending data/loading state, shown in design.</todo>
      <todo done>Make <b>v-model</b>/<b>value</b> optional?</todo>
      <todo>Positioning of expected format is not accurate.</todo>
      <todo>Issues with expected format and panning.</todo>
      <todo>Validation of expected format.</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InputsDemo',

  computed: {
    standard() {
      return `\
  <p>
    <s-text-field v-model="name" label="Project name" />
  </p>
  <p>
    <s-text-field v-model="phone" phone label="Phone number" />
  </p>
  <p>
    <s-text-field v-model="number" number label="Number" />
  </p>
  <p>
    <s-text-field v-model="email" email label="Email" />
  </p>
  <p>
    <s-text-field v-model="password" password label="Password" />
  </p>`;
    },
  },
});
</script>
