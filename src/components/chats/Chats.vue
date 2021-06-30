<template>
  <div class="chats">
    <div :class="type" :key="i" v-for="(type, i) in ['unread', 'read']">
      <transition-group name="chat" tag="div" class="chats__transition">
        <div
          class="chats__chat"
          @click="openChat(chat)"
          :class="{
            'chats__chat--unread': chat.unread,
            'chats__chat--active': selectedChat == chat.id,
            'chats__chat--online': chat.online,
          }"
          v-for="chat in type == 'unread' ? unreadChats : readChats"
          :key="chat.id"
        >
          <div class="connector">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="chats__chat__avatar-container">
            <div class="chats__chat__status"></div>
            <div class="chats__chat__avatar">
              <img :src="chat.avatar" />
            </div>
          </div>
          <div class="chats__chat__col">
            <div class="chats__chat__name">
              {{ chat.name }}
            </div>
            <div class="chats__chat__content">
              <span v-if="chat.unread > 1" class="chats__chat__new">
                {{ chat.unread > 99 ? '99+' : chat.unread }}
              </span>
              <span v-if="chat.you" class="chats__chat__you"> you: </span>
              <span class="chats__chat__preview">
                {{ chat.preview }}
              </span>
            </div>
          </div>
          <div class="chats__chat__at">
            <div class="chats__chat__date">
              <span class="chats__chat__date__day">06</span>
              <span class="chats__chat__date__month">06</span>
              <span class="chats__chat__date__year">21</span>
            </div>
            <div class="chats__chat__time">
              <span class="chats__chat__time__hours">14</span>
              <span class="chats__chat__time__minutes">18</span>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { chats, getComputedRead, getComputedUnread } from './data.js'
import { newMessage } from './helpers'

export default {
  name: 'Chats',
  computed: {
    ...mapGetters({
      chat: 'activeChat',
    }),
  },
  setup() {
    const store = useStore()

    store.commit('SET_CHATS', chats)

    const selectedChat = computed(() => store.state.activeChat?.id)

    const unreadChats = getComputedUnread()
    const readChats = getComputedRead()

    setTimeout(() => {
      chats.value[3].online = true
    }, 2000)
    setTimeout(() => {
      chats.value[5].online = true
    }, 2500)
    setTimeout(() => {
      chats.value[6].online = true
    }, 3500)
    setTimeout(() => {
      chats.value[6].online = false
    }, 4500)

    return {
      unreadChats,
      readChats,
      chats,
      newMessage,
      selectedChat,
      openChat: (chat) => {
        store.commit('SELECT_CHAT', chat)
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/spacing.scss';
@import '@/scss/colors.scss';
@import '@/scss/ui.scss';
@import '@/scss/chats/colors.scss';
@import '@/scss/chats/states.scss';

.chats {
  height: calc(100vh - 122px);
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;

  .unread,
  .read {
    margin-bottom: $group;
    width: 100%;
  }

  &__chat {
    user-select: none;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: start;
    gap: 0.7rem;
    padding: 0.7rem 0.3rem;
    padding-left: 0.8rem;
    margin-bottom: $divider;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 3.6rem;
    cursor: pointer;
    transition: box-shadow 150ms ease-out, transform 150ms ease-out,
      margin 150ms ease-out, background-color 250ms ease-out,
      color 250ms ease-out, border-radius 300ms ease, width 300ms ease;
    // overflow: hidden;
    color: white;
    box-shadow: 0 0 10px 1px black, $gel-shadows;
    transition-duration: 400ms;

    @include gel(auto);

    border-radius: 20px;

    &--active {
      .connector {
        position: absolute;
        right: -#{$xs * 0.75};
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          width: 10px;
          background-color: #9999ff;
          box-shadow: 1px 1px 2px #ffffff50 inset, -1px -1px 2px #00006655 inset;
          backdrop-filter: blur(30px);
          height: 5px;
          border-radius: 2px;
        }
      }
    }

    &:first-child {
      margin-bottom: 0;
    }

    &__new,
    &__you {
      background-color: #fff;
      color: black;
      padding: 2px 7px;
      text-align: center;
      border-radius: 10px;
      margin-right: 5px;
      position: relative;
      top: -2px;
      font-size: 0.66rem;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    &__you {
      background-color: #ffffff66;
      color: #ffffff;
      padding: 2px 6px;
      padding-right: 3px;
      top: 0px;
      text-transform: uppercase;
      border-radius: 5px;
      font-size: 0.62rem;
    }

    &__content {
      -webkit-mask-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 110px,
        rgba(0, 0, 0, 0) 150px
      );
      white-space: nowrap;
      overflow: hidden;
    }

    &--unread {
      background-color: $cl-bg-unread;
      box-shadow: 0 0 5px #00000033, $gel-shadows;

      &:hover {
        background-color: #fff;
        transform: scaleX(1.05);
        box-shadow: 0 0 15px #ddd;

        .chats__chat__new {
          background-color: $cl-accent;
        }
      }
    }

    &--active {
    }

    &__avatar-container {
      position: relative;
    }

    &__avatar {
      width: 3.6rem;
      height: 3.6rem;
      background-color: #ccc;
      border-radius: 100%;
      overflow: hidden;

      img {
        height: 100%;
        margin: auto;
      }
    }

    &__status {
      position: absolute;
      bottom: 4.5px;
      right: 4.5px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      transform: translate(50%, 50%) scale(10);
      opacity: 0;
      backdrop-filter: blur(20px);
      transition: all 0.3s ease;
      background-color: transparent;
      box-shadow: 0 0 20px 20px white;
    }

    &--online {
      .chats__chat__status {
        transition-duration: 0.8s;
        transform: translate(0%, 0%) scale(1);
        position: absolute;
        opacity: 1;
        bottom: 4.5px;
        right: 4.5px;
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 100%;
        box-shadow: 0 0 100px #ffffff00;
      }

      &:hover {
        .chats__chat__status {
          transition-duration: 0.15s;
          box-shadow: 0 0 10px 5px #1100ff99;
        }
      }
    }

    &__col {
      display: flex;
      flex-direction: column;
      text-align: left;
      overflow: hidden;
      max-width: 9rem;
      align-self: start;
    }

    &__name {
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &__at {
      font-size: 0.8rem;
      font-weight: bold;
      color: #eef;
    }

    &__date,
    &__time {
      transform: translate(-6px, 50%);
      transition: all 0.3s ease;
      opacity: 0.5;
      right: 2px;
      bottom: 50%;
      position: absolute;
      display: flex;
      display: none;
      flex-direction: column;
    }

    &__date {
      right: -26px;
      opacity: 0;
    }

    &__time {
      &__hours {
        display: block;
      }
    }

    &:hover {
      @include hovered;
    }
    &:active {
      transform: none;
    }

    &--active {
      @include selected;
    }
  }

  &__transition {
    display: flex;
    flex-direction: column-reverse;
    transition: all 1s ease;
  }
}

.chats__chat--active {
  background-color: #fff;
}

.chat-enter-active,
.chat-leave-active {
  transition: all 500ms ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  height: 0;
  box-shadow: 0 0 55px black;
  margin: 0;
  padding: 0;
}
</style>
