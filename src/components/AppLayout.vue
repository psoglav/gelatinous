<template>
  <div class="layout">
    <div class="chats">
      <slot name="chats"></slot>
    </div>
    <div class="dialogue">
      <slot name="dialogue" class="dialogue"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-layout',
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/spacing.scss';
@import '@/scss/chats/sizes.scss';

.layout {
  display: grid;
  grid-template-columns: $chats-width 1fr;
  grid-template-rows: 1fr;
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);
  padding: 30px;
  gap: $xs;
}
</style>
