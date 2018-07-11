const state = {
    token: ''
}

const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    }
}

const getters = {
    GET_TOKEN (state) {
        return state.token
    }
}

const actions = {
    SET_TOKEN ({commit}, token) {
        commit('SET_TOKEN', token)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}