<template>
  <div>
    <h2>
      s-accordion
    </h2>

    <props-list>
      <props-item
        name="linked"
        type="Boolean"
      >
        If linked, only one s-accordion-item will be open at a time.
      </props-item>
    </props-list>

    <h2>
      s-accordion-item
    </h2>

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
        default-value="false"
      >
        Sets the item to start off in open state.
      </props-item>
      <props-item
        name="invalid"
        type="Boolean"
        default-value="false"
      >
        Indicates that there's a validation error in one of the items the accordion item contains.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AccordionProps',
});
</script>
