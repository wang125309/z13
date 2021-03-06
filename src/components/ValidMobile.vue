<template>
    <LayoutBase>
        <title>{{title}}</title>
        <Navbar v-show="false" arrowLeft>{{title}}</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input v-model="user.account" type="number" :disabled="codeType === 5" placeholder="手机号"/>
            </Cell>
            <Cell withoutBorder>
                <Input @input="check" v-model="user.phoneCode" type="text" :account="user.account" :codeType="codeType" sendCode placeholder="验证码"/>
            </Cell>
        </CellGroup>
        <Button class="next-step" @onClick="next" circle :type="buttonType" full width="92%">下一步</Button>
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
                this.user.account = this.$store.state.user.account;
                this.codeType = 5;
            }
            else if (path === '/valid-new-mobile') {
                this.title = '添加新手机号';
                this.codeType = 7;
                this.user = {
                    account: '',
                    phoneCode: ''
                }
            }
        },
        watch: {
            $route : {
                handler () {
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
                        this.user = {
                            account: '',
                            phoneCode: ''
                        }
                    }
                    else if (path === '/valid-new-mobile') {
                        this.title = '添加新手机号';
                        this.codeType = 6;
                        this.user = {
                            account: '',
                            phoneCode: ''
                        }
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
                codeType: 0,
                buttonType: 'default'
            }
        },
        methods: {
            check () {
                if (this.user.phoneCode.match(/^\d{6}$/)) {
                    this.buttonType = 'primary'
                } else {
                    this.buttonType = 'default'
                }
            },
            next () {
                if (this.buttonType === 'primary') {
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
                        request(API.verify_phone_code, {
                            type: 'POST',
                            data: {
                                account: this.user.account,
                                phoneCode: this.user.phoneCode,
                                busiType: this.codeType
                            }
                        }, (data) => {
                            this.$root.$children[0].toggleToast('success', data.message);
                            this.$store.commit('SET_USER_INFO');
                            setTimeout(() => {
                                this.$router.push({
                                    path: '/user-info'
                                })
                            }, 500);
                        }, (data) => {
                            this.$root.$children[0].toggleToast('success', data.message);
                        })
                    }
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
