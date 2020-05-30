export const state = () => ({
  user: {},
  error: null,
  messages: []
})

export const actions = {}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  SOCKET_newMessage(state, payload) {
    state.messages.push(payload)
  }
}
export const getters = {
  user: (state) => state.user,
  messages: (state) => state.messages
}
