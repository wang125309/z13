<template>
    <LayoutBase>
        <Navbar arrowLeft>忘记密码</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input type="number" placeholder="手机号"/>
            </Cell>
            <Cell withoutBorder>
                <Input type="text" sendCode placeholder="请输入验证码"/>
            </Cell>
        </CellGroup>
        <Button className="next-step" circle type="default" full width="92%">下一步</Button>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'

    export default {
        name: 'ChangeName',
        components: {
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
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
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;
    }
    .next-step {
        margin-top: $margin-large;
    }
</style>
