<template>
    <LayoutWhite>
        <Navbar>注册</Navbar>
        <Z13Icon/>
        <CellGroup class="cell-group">
            <Cell>
                <Input type="number" icon="phone" placeholder="手机号"/>
            </Cell>
            <Cell>
                <Input type="text" icon="img" placeholder="图片验证码"/>
            </Cell>
            <Cell>
                <Input type="text" icon="verification" sendCode placeholder="验证码"/>
            </Cell>
            <Cell>
                <Input type="password" icon="lock" placeholder="设置密码"/>
            </Cell>
        </CellGroup>
        <Button className="register-btn" circle full width="75%">注册</Button>
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
