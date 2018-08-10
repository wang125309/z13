<template>
    <LayoutBase>
        <Navbar arrowLeft>{{title}}</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input v-model="user.account" type="number" placeholder="手机号"/>
            </Cell>
            <Cell withoutBorder>
                <Input v-model="user.phoneCode" type="text" :account="user.account" :codeType="codeType" sendCode placeholder="请输入验证码"/>
            </Cell>
        </CellGroup>
        <Button class="next-step" @onClick="next" circle type="default" full width="92%">下一步</Button>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import request from '../service/service'
    import API from '../service/api'

    export default {
        name: 'ValidMobile',
        components: {
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
        },
        mounted () {
            let path = this.$route.path;
            if (path === '/forget-password') {
                this.title = '忘记密码';
                this.codeType = 4;
            }
            else if (path === '/valid-mobile') {
                this.title = '验证手机号';
            }
            else if (path === '/valid-old-mobile') {
                this.title = '验证旧手机号';
                this.codeType = 5;
            }
            else if (path === '/valid-new-mobile') {
                this.title = '添加新手机号';
                this.codeType = 5;
            }
        },
        watch: {
            $route : {
                handler () {
                    console.log("i do")
                    let path = this.$route.path;
                    if (path === '/forget-password') {
                        this.title = '忘记密码';
                        this.codeType = 4;
                    }
                    else if (path === '/valid-mobile') {
                        this.title = '验证手机号';
                    }
                    else if (path === '/valid-old-mobile') {
                        this.title = '验证旧手机号';
                        this.codeType = 5;
                    }
                    else if (path === '/valid-new-mobile') {
                        this.title = '添加新手机号';
                        this.codeType = 5;
                    }
                }

            }
        },
        data () {
            return {
                title: '',
                user: {
                    account: '',
                    phoneCode: ''
                },
                codeType: 0
            }
        },
        methods: {
            next () {
                let path = this.$route.path;
                if (path === '/forget-password') {
                    request(API.verify_phone_code, {
                        type: 'POST',
                        data: {
                            account: this.user.account,
                            phoneCode: this.user.phoneCode,
                            busiType: this.codeType
                        }
                    }, (data) => {
                        this.$store.commit('SET_FORGET_PASSWORD_USER', this.user)
                        this.$router.push({
                            path: '/reset-password'
                        })
                    }, (data) => {
                        this.$root.$children[0].toggleToast('success', data.message);
                    })
                }
                else if (path === '/valid-old-mobile') {
                    request(API.verify_phone_code, {
                        type: 'POST',
                        data: {
                            account: this.user.account,
                            phoneCode: this.user.phoneCode,
                            busiType: this.codeType
                        }
                    }, (data) => {
                        this.$router.push({
                            path: '/valid-new-mobile'
                        })
                    }, (data) => {
                        this.$root.$children[0].toggleToast('success', data.message);
                    })
                }
                else if (path === '/valid-new-mobile') {
                    request(API.get_user_info, {
                        type: 'POST',
                        data: {
                            mobile: this.user.account,
                            phoneCode: this.user.phoneCode,
                            busiType: 6
                        }
                    }, (data) => {
                        this.$root.$children[0].toggleToast('success', data.message, true);
                        this.$store.dispatch('SET_USER_INFO', this)
                        setTimeout(() => {
                            this.$router.push({
                                path: '/user-info'
                            })
                        }, 500)
                    }, (data) => {
                        this.$root.$children[0].toggleToast('success', data.message);
                    })
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .cell-group {
        margin-top: $margin-large;
        hairline('top');
        hairline('bottom');
    }
    .next-step {
        margin-top: $margin-large;
    }
</style>
