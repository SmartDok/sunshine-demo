<template>
  <div>
    <s-breadcrumb to="/textfield">
      Text Field
    </s-breadcrumb>

    <h2>Standard inputs</h2>
    <example
      :code="standard"
      :data="{name: '', phone: '', number: '', email: '', password: ''}"
      max-width="16rem"
    />

    <h2>Expected format</h2>
    <example
      :code="expected"
      :data="{time: ''}"
      max-width="16rem"
    />

    <h2>With placeholder instead of label</h2>
    <example
      :code="placeholder"
      max-width="16rem"
    />

    <h2>With error</h2>
    <example
      :code="withError"
      max-width="16rem"
    />

    <h2>With counter label</h2>
    <example
      :code="counter"
      max-width="16rem"
    />

    <h2>Read only</h2>
    <example
      :code="readOnly"
      max-width="16rem"
    />

    <h2>Inactive inputs</h2>
    <example
      :code="inactive"
      max-width="16rem"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextFieldExamples',

  data() {
    return {
      text: '',

      standard: `
        <s-text-field
          v-model="name"
          label="Project name"
        />

        <s-text-field
          v-model="phone"
          phone
          label="Phone number"
        />

        <s-text-field
          v-model="number"
          number
          label="Number"
        />

        <s-text-field
          v-model="email"
          email
          label="Email"
        />

        <s-text-field
          v-model="password"
          password
          label="Password"
        />
      `,

      placeholder: `
        <s-text-field
          placeholder="Placeholder"
        />

        <s-text-field
          placeholder="Placeholder"
          label="Label"
        />
      `,

      withError: `
        <s-text-field
          label="Text field"
          error="Please enter the correct value"
        />
      `,

      counter: `
        <s-text-field
          label="Counter label"
          :max-length="20"
        />
      `,

      readOnly: `
        <s-text-field
          readonly
          value="Readonly"
        />
      `,

      expected: `
        <s-text-field
          v-model="time"
          format="00:00"
          label="Time"
        />
      `,

      inactive: `
        <s-text-field
          label="Inactive Input"
          inactive
        />

        <s-text-field
          label="Inactive Input"
          value="With text"
          inactive
        />
      `,
    };
  },

  computed: {
  },
});
</script>
