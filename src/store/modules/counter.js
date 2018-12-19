/**
 * Created by wanghongxiang on 2018/6/12.
 */
const state = {
  count: 0
}
const getters = {
  biggerCount (state) {
    return state.count + 1
  }
}
const mutations = {
  add (state, {id}) {
    state.count = state.count + id
  },
  little (state, id) {
    state.count = state.count - id
  }
}
const actions = {
  littleCount ({state, commit}, {id}) {
    setTimeout(() => {
      commit('little', id)
    }, 100)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
