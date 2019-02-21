<template>
  <div>
    <h2>Accordion</h2>
    <example :code="code" />

    <todo-list>
      <todo>Optional linked state (e.g. opening one item closes the one currently open).</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AccordionDemo',

  computed: {
    code() {
      return `
    <s-accordion>
      <s-accordion-item>
        <template v-slot:heading>Basic settings</template>

        Basic settings here

        <p>
          <s-button>Foo</s-button>
        </p>
        <p>
          <s-button>Foo</s-button>
        </p>
        <p>
          <s-button>Foo</s-button>
        </p>
        <p>
          <s-button>Foo</s-button>
        </p>
        <p>
          <s-button>Foo</s-button>
        </p>
      </s-accordion-item>

      <s-accordion-item>
        <template v-slot:heading>Other settings</template>

        <div>
          Other settings here
          <p>
            <s-select>Bar</s-select>
          </p>
        </div>
      </s-accordion-item>

      <s-accordion-item>
        <template v-slot:heading>Comment</template>

        <div>
          <s-text-field label="Project name" />
        </div>
      </s-accordion-item>
    </s-accordion>
      `;
    },
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.below {
  @include paragraph-font;
  color: $grayer;
}
</style>
