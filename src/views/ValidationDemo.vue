<template>
  <div>
    <h2>Validation</h2>

    <p class="help">
      <a href="https://baianat.github.io/vee-validate/">VeeValidate</a>
      is used for form validation.
    </p>

    <p class="help">
      All input components support the <b>v-validate</b> directive, specifying
      validation rules, and takes an <b>error</b> prop to show validation error.
    </p>

    <example
      :code="code"
      :data="{
        data,
        text: '',
        email: '',
        comment: '',
        item: null,
      }"
      max-width="28rem"
    />

    <todo-list>
      <todo>SDropDown renders the menu below the error text.</todo>
    </todo-list>

  </div>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'InputsDemo',

  data() {
    return {
      data: {
        items: [
          { key: 1, label: 'STextField' },
          { key: 2, label: 'STextArea' },
          { key: 3, label: 'SDropDown' },
        ],
      },

      code: `\
  <s-text-field
    v-model="text"
    v-validate="'required'"
    name="text"
    label="Required text"
    :error="errors.first('text')"
  />

  <s-text-field
    v-model="email"
    v-validate="'required|email'"
    name="email"
    email
    label="Required email"
    :error="errors.first('email')"
  />

  <s-text-area
    v-model="comment"
    v-validate="'required'"
    name="comment"
    label="Comment"
    :error="errors.first('comment')"
  />

  <s-drop-down
    v-model="item"
    v-validate="'required'"
    name="items"
    :items="data.items"
    label="Required item"
    :error="errors.first('items')"
  />

  <s-button @click="$validator.validate()">Validate</s-button>`,
    };
  },
});
</script>
