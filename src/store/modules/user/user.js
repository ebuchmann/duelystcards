import {
  SET_USER,
  SET_API_KEY,
} from '../mutation-types'

const state = {
  user: null,
}

const mutations = {
  [SET_USER] (state, user) {
    state.user = user
  },

  [SET_API_KEY] (state, apiKey) {
    state.user.apiKey = apiKey
  },
}

export default {
  state,
  mutations,
}
