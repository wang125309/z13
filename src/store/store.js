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
        requests(API.get_user_info, {}, (data) => {
            state.user = data.data
        }, (data) => {
            console.log(data)
            if (_this.$route.name === 'My' ||
                _this.$route.name === 'MyActivity' ||
                _this.$route.name === 'UserInfo'
            ) {
                _this.$router.push({
                    path: '/login'
                })
            }
        })
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
    SET_USER_INFO ({commit}, _this, important) {
        commit('SET_USER_INFO', _this, important)
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
