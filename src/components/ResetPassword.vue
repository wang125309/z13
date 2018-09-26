<template>
    <LayoutBase>
        <title>重置密码</title>
        <Navbar arrowLeft>忘记密码</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input type="password" v-model="user.newPassword" placeholder="请设置新密码"/>
            </Cell>
            <Cell withoutBorder>
                <Input type="password" v-model="user.newPassword2" placeholder="请确认新密码"/>
            </Cell>
        </CellGroup>
        <Button class="next-step" @onClick="save" circle full width="92%">确定</Button>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import API from '../service/api'
    import requests from '../service/service'

    export default {
        name: 'ForgetPassword',
        components: {
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
        },
        computed: {

        },
        methods: {
            save () {
                requests(API.password, {
                    type: 'PUT',
                    data: {
                        account: this.$store.state.forget_password_account,
                        phoneCode: this.$store.state.forget_password_code,
                        newPassword: this.user.newPassword,
                        newPassword2: this.user.newPassword2
                    }
                }, (data) => {
                    this.$router.push({
                        path: '/reset-password-success'
                    })
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                });
            }
        },
        data () {
            return {
                user: {
                    newPassword: '',
                    newPassword2: ''
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .cell-group {
        margin-top: $margin-large;
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;
    }
    .next-step {
        margin-top: $margin-large;
    }
</style>
