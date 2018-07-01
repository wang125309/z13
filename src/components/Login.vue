<template>
    <LayoutWhite>
        <Navbar>注册</Navbar>
        <Z13Icon/>
        <CellGroup class="cell-group">
            <Cell>
                <Input type="text" icon="phone" placeholder="手机号/注册邮箱"/>
            </Cell>
            <Cell>
                <Input type="password" icon="lock" placeholder="登录密码"/>
            </Cell>
        </CellGroup>
        <Button className="register-btn" type="circle" full width="75%">登录</Button>
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
</style>
