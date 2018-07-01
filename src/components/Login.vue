<template>
    <LayoutWhite>
        <Navbar>登录</Navbar>
        <Z13Icon/>
        <CellGroup class="cell-group">
            <Cell>
                <Input type="text" icon="phone" placeholder="手机号/注册邮箱"/>
            </Cell>
            <Cell>
                <Input withEye type="password" icon="lock" placeholder="登录密码"/>
            </Cell>
        </CellGroup>
        <div class="forget-password">
            <a href="javascript:;" @click="goForgetPassword">忘记密码</a>
        </div>
        <Button className="login-btn" circle full width="75%">登录</Button>
        <div class="go-register">
            <a @click="goRegister" href="javascript:;">没有账号？立即注册</a>
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
            }
        },
        methods: {
            goRegister() {
                this.$router.push({
                    path: '/register'
                })
            },
            goForgetPassword() {
                this.$router.push({
                    path: '/forget-password'
                })
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
    .forget-password {
        a {
            position: absolute;
            right: 0;
            color: $font-second;
            margin-right: $margin-base;
        }
    }
    .login-btn {
        margin-top: $margin-large*2;
    }
    .go-register {
        margin-top: $margin-large;
        text-align: center;
    }
</style>
