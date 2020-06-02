export const state = () => ({
  user: {},
  error: null,
  messages: []
})

export const actions = {
  newMessage({ commit }, payload) {
    try {
      commit('SOCKET_newMessage', payload)
    } catch (e) {
      commit('setError', e)
      throw e
    }
  },
  async login({ commit }, payload) {
    try {
      await this.$axios.$post('/api/login', payload)
    } catch (e) {
      commit('setError', e)
    }
  },
  async create({ commit }, payload) {
    try {
      await this.$axios.$post('api/create', payload)
    } catch (e) {
      commit('setError', e)
    }
  },
  async verefy({ commit }, payload) {
    try {
      return await this.$axios.$post('/api/verefy', payload)
    } catch (e) {}
  }
}
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
