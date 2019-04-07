<template>
  <div>
    <h2>Accordion</h2>
    <example
      :code="code"
      max-width="28rem"
    />

    <h2>Linked state</h2>
    <section class="help">
      <p>
        In a linked accordion, only one item can be open at a time.
        When opening one item, the other ones are closed.
      </p>

      <p>
        Using heading props instead of slots.
      </p>
    </section>

    <example
      :code="linked"
      max-width="28rem"
    />

    <h2>Props s-accordion</h2>
    <props-list>
      <props-item
        name="linked"
        type="Boolean"
      >
        If linked, only one s-accordion-item will be open at a time.
      </props-item>
    </props-list>

    <h2>Props s-accordion-item</h2>
    <props-list>
      <props-item
        name="heading"
        type="String"
      >
        The title of the item.
      </props-item>
      <props-item
        name="defaultOpen"
        type="Boolean"
      >
        Sets the item to start off in open state. Default: false.
      </props-item>
      <br>A header can be placed over the main content shown in open state,
      by using the named slot 'heading'.
    </props-list>
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
            <s-alert success>Bar</s-alert>
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

    linked() {
      return `\
    <s-accordion linked>
      <s-accordion-item heading="First">
        <s-alert success>First content</s-alert>
      </s-accordion-item>

      <s-accordion-item heading="Second">
        <s-alert warning>Second content</s-alert>
      </s-accordion-item>

      <s-accordion-item heading="Third">
        <s-alert error>Third content</s-alert>
      </s-accordion-item>
    </s-accordion>
      `;
    },
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.help {
  @include paragraph-font;
  color: $grayer;
}
</style>
