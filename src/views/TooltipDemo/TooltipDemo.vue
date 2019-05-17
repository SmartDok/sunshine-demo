<template>
  <div>
    <h1>Tooltip</h1>
    <p class="help">
      Tooltips becomes visible when hovering over an element. Use the <code>v-tooltip</code>
      directive to create a tooltip.<br> For more advanced tooltips - e.g containing icons
      or other components - use the <code>v-popover</code> component.
    </p>

    <h2>Standard</h2>
    <example
      :code="standard"
    />

    <router-link
      to="examples"
      class="s-link"
    >
      View more examples
    </router-link>

    <h1>API</h1>
    <s-tabs>
      <s-tab to="docs">
        Documentation
      </s-tab>
    </s-tabs>

    <router-view />

    <todo-list>
      <todo>
        The arrow svg and the tooltip doesnt seem to scale/or move at the same ratio.
        Noticeable at +150 zoom.
      </todo>
      <todo>
        Tooltip and popover uses the same margins from the element they 'serve', but they behave
        differently (notice distance from arrow tip to element) Popover seems to take the elements
        margin + margin from arrow tip to element ($tooltip-arrow-margin) into consideration,
        while tooltip only considers $tooltip-arrow-margin.
      </todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TooltipDemo',

  computed: {
    standard() {
      return `\
<div style="display: grid; grid-template-columns: repeat(4, 10rem); grid-gap: 4rem;">
    <s-text-area
        readonly
        value="Hover the mouse pointer over the different text areas to see tooltips appear.."
        v-tooltip.top="'This text explains something about something.'"
    />
    <s-text-area
        readonly
        value="If there's enough space in the set direction, the tooltip appears there.."
        v-tooltip.right="'This text explains something about something.'"
    />
    <s-text-area
        readonly
        value="If theres not enough space in the set direction.."
        v-tooltip.bottom="'This text explains something about something.'"
    />
    <s-text-area
        readonly
        value="..the tooltip opens where it finds the space.. "
        v-tooltip.left="'This text explains something about something.'"
    />
 </div>
        `;
    },
  },
});

</script>
