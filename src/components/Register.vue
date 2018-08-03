<template>
    <LayoutWhite>
        <Navbar>注册</Navbar>
        <Z13Icon/>
        <CellGroup class="cell-group">
            <Cell>
                <Input v-model="user.account" type="number" icon="phone" placeholder="手机号"/>
            </Cell>
            <Cell>
                <Input v-model="user.image" type="text" icon="img" placeholder="图片验证码"/>
                <img @click="refreshCode" class="image-code" :src="imageCode"/>
            </Cell>
            <Cell>
                <Input v-model="user.phoneCode" :account="user.account" :codeType="3" type="text" icon="verification" sendCode placeholder="验证码"/>
            </Cell>
            <Cell>
                <Input v-model="user.password" type="password" icon="lock" placeholder="设置密码"/>
            </Cell>
        </CellGroup>
        <div class="btn-area">
            <Button @onClick="register" className="register-btn" circle full width="75%">注册</Button>
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
    import requests from '../service/service'

    let registerFlag = false;

    export default {
        name: 'Register',
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
                    password: '',
                    phoneCode: '',
                    image: ''
                },
                imageCode: 'https://cbd-proxy.limijiaoyin.io' + API.get_image_code
            }
        },
        created () {
        },
        watch: {
            imageCode () {}
        },
        methods: {
            refreshCode () {
                this.imageCode = '';
                setTimeout(() => {
                    this.imageCode = 'https://cbd-proxy.limijiaoyin.io' + API.get_image_code;
                }, 0);
            },
            doRegister () {
                requests(API.do_register, {
                    type: 'POST',
                    data: this.user
                }, (data) => {
                    this.$root.$children[0].toggleToast('success', data.message);
                    setTimeout(() => {
                        this.$router.push({
                            path: '/login'
                        })
                    })
                }, (data) => {
                    console.log(data)
                    this.$root.$children[0].toggleToast('fail', data);
                });
            },
            register () {
                if (!registerFlag) {
                    requests(API.valid_image_code, {
                        type: 'POST',
                        data: {
                            imageCode: this.user.image
                        }
                    }, (data) => {
                        this.doRegister();
                    }, (data) => {
                        this.$root.$children[0].toggleToast('fail', data.message);
                    })

                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .cell-group {
        margin-top: $margin-large;
    }
    .register-btn {
        margin-top: $margin-large;
    }
    .btn-area {
        margin-top: $margin-large * 2;
    }
    .image-code {
        position: absolute;
        right: 0;
        width: 0.3rem;
        top: 0.02rem;
    }
</style>
