<template>
  <div
    v-show="isVisible"
    class="todo"
    @click="isOpen = !isOpen"
  >
    <ul
      v-if="isOpen"
      class="todo-list"
    >
      <slot />
    </ul>

    <div class="toggle">
      TODO
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoList',

  data() {
    return {
      isVisible: false,
      isOpen: false,
    };
  },

  mounted() {
    this.timeoutId = setTimeout(() => {
      this.isVisible = true;
    }, 1000);
  },

  beforeDestroy() {
    clearTimeout(this.timeoutId);
  },
});
</script>

<style lang="scss" scoped>
@import "smartdok-sunshine/src/style/tools.scss";

.todo {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;
  max-width: 600px;
  color: $grayer;
  background-color: $white;
  border: 1px solid $gray;
  border-top-left-radius: 20px;
  border-right: none;
  box-shadow: $popup-box-shadow;
  cursor: pointer;
}

.toggle {
  @include action-font;
  text-align: right;
}

.todo-list {
  margin: 0;
  margin-bottom: 15px;
  padding-left: 0;
  list-style: square inside;
}
</style>
