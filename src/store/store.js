import requests from '../service/service'
import API from '../service/api'


const state = {
    token: '',
    user: '',
    forget_password_account: '',
    identification_company: {}
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
                if (_this.$route.name !== 'Activity'
                    && _this.$route.name !== 'Home'
                    && _this.$route.name !== 'ActivityList'
                    && _this.$route.name !== 'Login'
                    && _this.$route.name !== 'Register'
                    && _this.$route.name !== 'ResetPassword'
                    && _this.$route.name !== 'ValidMobile'
                    && _this.$route.name !== 'ResetPasswordSuccess'
                ) {
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
    SET_FORGET_PASSWORD_USER (state, user) {
        state.forget_password_account = user.account;
        state.forget_password_code = user.phoneCode;
    },
    SET_INDENTIFICATION_COMPANY (state, data) {
        state.identification_company = data;
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
    },
    SET_INDENTIFICATION_COMPANY ({commit}, data) {
        commit('SET_INDENTIFICATION_COMPANY', data)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
