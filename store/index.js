export const state = () => ({
  user: {},
  status: null,
  messages: []
})

export const actions = {
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
  },
  async findUser({ commit }, payload) {
    try {
      return await this.$axios.$post('/chat/finduser', payload)
    } catch (e) {
      commit('status', e)
    }
  },
  async fetchMessage({ commit }, payload) {
    try {
      return await this.$axios.$get(`/chat/fetchMessage/${payload}`)
    } catch (e) {
      commit('status', e)
    }
  },
  async createChat({ commit }, payload) {
    try {
      const message = await this.$axios.$post('chat/createMessage', payload)
      commit('status', message)
    } catch (e) {
      commit('status', e)
    }
  },
  async dialogMessage({ commit }, payload) {
    try {
      const allMessage = await this.$axios.$get(`chat/fetchAllMessage/${payload}`)
      return { allMessage }
    } catch (e) {
      commit('status', e)
    }
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
  },
  SOCKET_history(state, payload) {
    state.messages = payload
  }
}
export const getters = {
  user: (state) => state.user,
  messages: (state) => {
    console.log(state.messages)
    return state.messages
  },
  status: (state) => state.status
}
