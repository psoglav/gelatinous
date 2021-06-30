<template>
  <div class="dialogue">
    <div class="dialogue__person">
      <dialogue-person :chat="chat" />
    </div>
    <div class="dialogue__container gel"></div>
    <div class="dialogue__files gel"></div>
    <div class="dialogue__input gel"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import DialoguePerson from './DialoguePerson.vue'

export default {
  name: 'dialogue',
  components: {
    DialoguePerson,
  },
  setup() {
    const store = useStore()

    return {
      chat: computed(() => store.state.activeChat || {}),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/spacing.scss';
@import '@/scss/ui.scss';

.dialogue {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas: 'person person' 'container files' 'input files';
  grid-template-columns: 1fr 19rem;
  grid-template-rows: 8rem 1fr 4rem;

  gap: $group;

  &__person {
    grid-area: person;
  }
  &__container {
    grid-area: container;
  }
  &__files {
    grid-area: files;
  }
  &__input {
    grid-area: input;
  }
}
</style>
