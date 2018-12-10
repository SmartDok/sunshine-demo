<template>
  <div>
    <s-accordion>

      <s-accordion-item>
        <template slot="heading">Basic settings</template>

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
        <template slot="heading">Other settings</template>

        <div>
          Other settings here
          <p>
            <s-select>Bar</s-select>
          </p>
        </div>
      </s-accordion-item>

      <s-accordion-item>
        <template slot="heading">Comment</template>

        <div>
          <s-text-field label="Project name" />
        </div>
      </s-accordion-item>
    </s-accordion>

    <p class="below">Some content below</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AccordionDemo',
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.below {
  @include paragraph-font;
  color: $grayer;
}
</style>
