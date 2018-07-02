<template>
    <LayoutBase>
        <Navbar>企业选择</Navbar>
        <Panel class-name="panel" no-padding>
            <CellGroup full no-margin>
                <Cell @click="go" padding full>
                    企业1
                </Cell>
                <Cell @click="go"  padding full>
                    企业2
                </Cell>
                <Cell @click="go"  padding full>
                    企业3
                </Cell>
                <Cell @click="go"  padding full withoutBorder>
                    企业4
                </Cell>
            </CellGroup>
        </Panel>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import Panel from "./lib/Panel";

    export default {
        name: 'Login',
        components: {
            Panel,
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
        },
        methods: {
            go() {
                this.$router.push({
                    path: '/company-identification'
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .panel {
        margin-top: $margin-large;
    }
</style>
