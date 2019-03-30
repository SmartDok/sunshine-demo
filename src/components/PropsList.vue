<template>
  <dl class="props-list">
    <slot />
  </dl>
</template>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/settings.scss';

.props-list {
  padding: 0 1rem;
  border-left: 1px solid $gray;
}
</style>
