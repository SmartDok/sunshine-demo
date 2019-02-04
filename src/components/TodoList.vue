<template>
  <s-accordion class="todo">
    <s-accordion-item>
    <template slot="heading">TODO LIST</template>

    <ul class="todo-list">
      <slot />
    </ul>
    </s-accordion-item>
  </s-accordion>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoList',
});
</script>

<style lang="scss" scoped>
@import "smartdok-sunshine/src/style/tools.scss";

.todo {
  margin-top: 4rem;
  color: $grayer;
}

.todo-list {
  margin: 0;
  padding-left: 0;
  list-style: square inside;
}
</style>
