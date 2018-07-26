import requests from '../service/service'
import API from '../service/api'


const state = {
    token: '',
    user: '',
    forget_password_account: ''
}

const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },
    SET_USER_INFO (state, _this) {
        if (!state.user) {
            requests(API.get_user_info, {}, (data) => {
                state.user = data.data
            }, (data) => {
                if (_this.$route.name !== 'Login' && _this.$route.name !== 'Register' && _this.$router.name !== 'ResetPassword') {
                    _this.$router.push({
                        path: '/login'
                    })
                }
            })
        }
        else {
            console.log(state.user)
        }
    },
    SET_FORGET_PASSWORD_USER (state, account, code) {
        state.forget_password_account = account;
        state.forget_password_code = code;
    }
}

const getters = {
}

const actions = {
    SET_TOKEN ({commit}, token) {
        commit('SET_TOKEN', token)
    },
    SET_USER_INFO ({commit}, _this) {
        commit('SET_USER_INFO', _this)
    },
    SET_FORGET_PASSWORD_USER ({commit}, account, code) {
        commit('SET_FORGET_PASSWORD_USER', account);
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}