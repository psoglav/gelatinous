<template>
  <app-layout>
    <template v-slot:chats>
      <chats />
    </template>
    <template v-slot:dialogue>
      <dialogue />
    </template>
  </app-layout>
</template>

<script setup>
import Chats from '@/components/chats/Chats.vue'
import Dialogue from '@/components/dialogue/Dialogue.vue'
import AppLayout from '@/components/AppLayout.vue'

import store from '@/store'

import { provide } from 'vue'

provide('store', store)
</script>

<style lang="scss">
@import '@/scss/classes.scss';

* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('assets/img/2.jpg');
  font-family: Montserrat;
}
</style>
