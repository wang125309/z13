<template>
    <LayoutWhite>
        <title>CBD Z13</title>
        <Navbar no-avatar v-show="false" arrow-left>登录</Navbar>
        <Z13Icon/>
        <CellGroup class="cell-group">
            <Cell>
                <Input v-model="user.account" type="text" icon="phone" placeholder="手机号"/>
            </Cell>
            <Cell>
                <Input v-model="user.password" withEye type="password" icon="lock" placeholder="登录密码"/>
            </Cell>
        </CellGroup>
        <div class="forget-password">
            <a href="javascript:;" @click="goForgetPassword">忘记密码</a>
        </div>
        <div class="btn-area">
            <Button @onClick="login" className="login-btn" circle full width="75%">登录</Button>
            <div class="go-register">
                <a @click="goRegister" href="javascript:;">没有账号？立即注册</a>
            </div>
        </div>
    </LayoutWhite>
</template>

<script>
    import LayoutWhite from './lib/LayoutWhite'
    import Navbar from './lib/Navbar'
    import Z13Icon from './lib/Z13Icon'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import API from '../service/api'
    import cookies from '../Session/cookie'
    import requests from '../service/service'
    let loginClicked = false;
    export default {
        name: 'Login',
        components: {
            Button,
            Navbar,
            Z13Icon,
            CellGroup,
            Cell,
            Input,
            LayoutWhite
        },
        data () {
            return {
                user: {
                    account: '',
                    password: ''
                }
            }
        },
        methods: {
            goRegister() {
                location.href = '/#/register';
            },
            goForgetPassword() {
                this.$router.push({
                    path: '/forget-password'
                })
            },
            login () {
                if (!loginClicked) {
                    loginClicked = true;
                    if (this.user.account.length && this.user.password) {
                        requests(API.do_login, {
                            type: 'POST',
                            data: this.user
                        }, (data) => {
                            const ukey = data.data
                            this.$store.dispatch('SET_TOKEN', data.data);
                            cookies.setCookie(data.data);
                            this.$root.$children[0].toggleToast('success', data.message);
                            // location.href = 'https://cbd-proxy.limijiaoyin.io' + API.wx_authorize + '?ukey=' + data.data;
                            this.$router.push({path: '/'}, () => {
                                requests(API.get_user_info, {}, data => {
                                    if (data.success && !data.data.nick_name) {
                                            location.href = 'https://cbd-proxy.limijiaoyin.io' + API.wx_authorize + '?ukey=' + ukey;
                                    }
                                })
                            })
                        }, (data) => {
                            this.$root.$children[0].toggleToast('fail', data.message);
                        });
                    }
                    else if (this.user.account.length === 0) {
                        this.$root.$children[0].toggleToast('fail', '手机号不能为空');
                    }
                    else if (this.user.password.length === 0) {
                        this.$root.$children[0].toggleToast('fail', '密码不能为空');
                    }
                    setTimeout(() => {
                        loginClicked = false;
                    }, 200)
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .cell-group {
        margin-top: $margin-large !important;
    }
    .register-btn {
        margin-top: $margin-large;
    }
    .forget-password {
        a {
            position: absolute;
            right: 0;
            color: $font-second;
            margin-right: $margin-base;
        }
    }
    .go-register {
        margin-top: $margin-large;
        text-align: center;
        a {
            color: #1D56E1;
        }
    }
    .btn-area {
        margin-top: $margin-large * 2;
    }
</style>
