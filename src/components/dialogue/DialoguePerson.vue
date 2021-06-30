<template>
  <div class="dialogue__person gel">
    <div class="dialogue__person__avatar"></div>
    <div class="dialogue__person__name">{{ chat.name }}</div>
  </div>
</template>

<script>
export default {
  props: ['chat'],
  setup() {},
}
</script>

<style lang="scss" scoped>
@import '@/scss/spacing.scss';

.dialogue__person {
  @include xs-padding;
  color: white;

  &__name {
    text-align: left;
    font-size: 2rem;
  }
}
</style>
