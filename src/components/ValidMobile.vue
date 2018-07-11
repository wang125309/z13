<template>
    <LayoutBase>
        <Navbar arrowLeft>{{title}}</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input type="number" placeholder="手机号"/>
            </Cell>
            <Cell withoutBorder>
                <Input type="text" sendCode placeholder="请输入验证码"/>
            </Cell>
        </CellGroup>
        <Button class="next-step" circle type="default" full width="92%">下一步</Button>
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
        name: 'ValidMobile',
        watch: {
            title () {

            }
        },
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
            }
            else if (path === '/valid-mobile') {
                this.title = '验证手机号';
            }
            else if (path === '/valid-old-mobile') {
                this.title = '验证旧手机号';
            }
            else if (path === '/valid-new-mobile') {
                this.title = '添加新手机号';
            }
        },
        data () {
            return {
                title: ''
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
