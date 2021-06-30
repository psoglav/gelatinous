import { chats } from './data'

export const newMessage = () => {
  const add = () => {
    let ch = {
      ...readChats.value[
      Math.floor(Math.random() * readChats.value.length)
      ],
    }
    ch.unread = 1 + Math.floor(Math.random() * 10)
    chats.value.push(ch)
  }

  add()

  for (var i = Math.floor(Math.random() * 2); i > 0; i--) {
    setTimeout(add, 100 * i)
  }
}