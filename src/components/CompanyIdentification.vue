<template>
    <LayoutWhite>
        <Navbar>企业认证</Navbar>
        <CellGroup class="cell-group">
            <Cell>
                <Input type="text" icon="phone" placeholder="手机号/注册邮箱"/>
            </Cell>
            <Cell>
                <Input withEye type="password" icon="lock" placeholder="登录密码"/>
            </Cell>
        </CellGroup>
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
        name: 'CompanyIdentification',
        components: {
            Button,
            Navbar,
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
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
</style>
