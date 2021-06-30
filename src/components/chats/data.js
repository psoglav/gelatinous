import { ref, computed } from 'vue'

export const chats = ref([
  {
    id: '9283dj',
    name: 'Rhys Hawkins',
    preview: 'Realy nice, but it doesnt workt if you have multiple divs or mutliple P s in the scrolling content :( ',
    at: Date.now(),
    avatar:
      'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    unread: 16,
    online: true,
  },
  {
    id: 'a0-9skd-asd',
    name: 'Nirmal Jasmatiya',
    preview: 'To answer the question if someone falls on it because of the obsolescence, it\'s quite simple in fact :). put the whole thing in a div and then put the elements in span codepen.io/scwall/pen/mdemeER',
    at: Date.now(),
    avatar:
      'https://images.unsplash.com/photo-1505196298139-8cfce5efd3d7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=086d0c442db382f3faadb8156eecafa7',
    unread: 2,
  },
  {
    id: 'asd12d-asd',
    name: 'Joaquin Marquez',
    preview: 'how do I make it repeat without any white spaces between the last span and repeated first span (No white spaces after last span?) ',
    at: Date.now(),
    avatar:
      'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    unread: false,
  },
  {
    id: 'a0-9s90-k1s',
    name: 'Jordan Singer',
    preview: 'your argument DOESN\'T make the tag not obsolete',
    at: Date.now() + 100,
    avatar:
      'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    unread: false,
  },
  {
    id: 'osajnd809jo1',
    name: 'Jamie Carr',
    preview: 'Den why have awesome inputs? Hmmm?',
    at: Date.now(),
    avatar:
      'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e',
    unread: false,
  },
  {
    id: 'aso0-kd90as-d',
    name: 'Ashley Patterson',
    preview: 'I am just reflecting on using a Marquee Effect in general, just as an answer to people saying: "Don\'t move the text !" Implementing it with CSS instead of HTML <marquee> is better and reasonable IMO',
    at: Date.now(),
    avatar:
      'https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    unread: false,
  },
  {
    id: 'as9o-0dkaso0-d',
    name: 'Yael Lyons',
    preview: 'some some preview data',
    at: Date.now(),
    avatar:
      'https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    unread: false,
    you: true,
  },
  {
    id: '1o-2l090-odas',
    name: 'Brian Smith',
    preview: 'no',
    at: Date.now(),
    avatar:
      'https://images.unsplash.com/flagged/photo-1574132437416-b520de86cfb8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    unread: false,
  },
  {
    id: 'do0-1k29d10-dk',
    name: 'Mattie Leon',
    preview: 'good-good!',
    at: Date.now(),
    avatar:
      'https://images.pexels.com/photos/1156546/pexels-photo-1156546.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    unread: false,
  },
  {
    id: 'l,.k90-sai90',
    name: 'Emeline Duarte',
    preview: 'well shit happens',
    at: Date.now(),
    avatar:
      'https://images.pexels.com/photos/838875/pexels-photo-838875.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    unread: false,
  },
])

export const getComputedUnread = () => computed(() =>
  chats.value.filter((c) => c.unread).sort((a, b) => b.at - a.at),
)

export const getComputedRead = () => computed(() =>
  chats.value.filter((c) => !c.unread).sort((a, b) => b.at - a.at),
)

