<template>
  <div>
    <h2 class="help">
      s-accordion
    </h2>

    <props-list>
      <props-item
        name="default"
      >
        The <b>s-accordion-item</b>(s) to show.
      </props-item>
    </props-list>

    <h2 class="help">
      s-accordion-item
    </h2>

    <props-list>
      <props-item
        name="default"
      >
        This content of the item.
      </props-item>
      <props-item
        name="heading"
      >
        Optional header above the content of the item.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AccordionSlots',
});
</script>
