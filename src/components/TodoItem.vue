<template>
  <li :class="classes">
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',

  props: {
    done: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes(): object {
      return {
        'todo-list__item': true,
        'todo-list__item--done': this.done,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.todo-list__item {
  &--done {
    text-decoration: line-through;
  }
}
</style>
