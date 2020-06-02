export const state = () => ({
  user: {},
  status: null,
  messages: []
})

export const actions = {
  newMessage({ commit }, payload) {
    try {
      commit('SOCKET_newMessage', payload)
    } catch (e) {
      commit('status', e)
      throw e
    }
  },
  async login({ commit }, payload) {
    try {
      await this.$axios.$post('/api/login', payload)
    } catch (e) {
      commit('status', e)
    }
  },
  async create({ commit }, payload) {
    try {
      const status = await this.$axios.$post('api/create', payload)
      commit('status', status)
    } catch (e) {
      commit('status', e)
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
  status(state, payload) {
    state.status = payload
  },
  SOCKET_newMessage(state, payload) {
    state.messages.push(payload)
  }
}
export const getters = {
  user: (state) => state.user,
  messages: (state) => state.messages,
  status: (state) => state.status
}
