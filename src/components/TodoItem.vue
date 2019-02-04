<template>
  <li class="todo-list__item">
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',
});
</script>

