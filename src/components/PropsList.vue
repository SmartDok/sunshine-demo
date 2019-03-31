<template>
  <dl class="props-list">
    <slot />
  </dl>
</template>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.props-list {
  @include paragraph-font;
  color: $grayest;
  padding: 0 .5rem;
  border-left: 3px solid $gray;
}
</style>
