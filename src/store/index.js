import { createStore, createLogger } from 'vuex'

export default createStore({
  state: () => ({
    activeChat: null,
    chats: []
  }),

  mutations: {
    SET_CHATS(state, value) {
      state.chats = value
    },
    SELECT_CHAT(state, chat) {
      state.activeChat = chat
    },
  },

  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})