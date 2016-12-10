import {
  SET_USER,
} from '../mutation-types'

const state = {
  user: null,
}

const mutations = {
  [SET_USER] (state, user) {
    state.user = user
  },
}

export default {
  state,
  mutations,
}
