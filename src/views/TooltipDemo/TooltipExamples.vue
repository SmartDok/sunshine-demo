<template>
  <div>
    <s-breadcrumb to="/tooltip">
      Tooltip
    </s-breadcrumb>

    <h2>Standard</h2>
    <example
      :code="standard"
    />

    <h2>Advanced tooltips</h2>
    <example
      :code="component"
    />

    <h2>Buttons with dropdown</h2>
    <example
      :code="dropdown"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TooltipExamples',

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

    component() {
      return `\
<div style="display: grid; grid-template-columns: repeat(2, 10rem); grid-gap: 4rem;">
    <v-popover trigger="hover">
        <s-text-area
            readonly
            value="For more advanced tooltips, you can use the v-popover component.."
        />
        <template slot="popover">
            <div style="display: flex; align-items: flex-start;">
                <s-icon style="color: green;" name="good" package="sunshine24" />
                <div style="margin-left: 0.5rem;">
                    An icon can give more context to what a tooltip is about.
                </div>
            </div>
        </template>
    </v-popover>
    <v-popover>
        <s-text-area
            readonly
            value="..popovers can also become visible by click instead of mouse hover."
        />
        <template slot="popover">
            <div style="display: flex; align-items: center;">
                <s-icon style="color: red;" name="close" package="sunshine24" />
                <div>
                    Click again to close.
                </div>
            </div>
        </template>
    </v-popover>
</div>`;
    },

    dropdown() {
      return `
<s-tool-menu-button
  :tooltip="{ content: 'Tooltip should display when one hovers over the button, but not when one hovers over the dropdown menu' }"
  :items="[
    {
      label: 'Option A',
    },
    {
        label: 'Option B',
    },
  ]"
/>
<s-table-columns-menu
  :tooltip="{ content: 'The tooltip over this button should behave as in the button above.' }"
  :columns="[
    {
      title: 'Option A',
    },
    {
      title: 'Option B',
    },
  ]"
/>`;
    },
  },
});

</script>
