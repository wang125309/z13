<template>
    <LayoutBase>
        <Navbar>企业认证</Navbar>
        <Panel class-name="panel" no-padding>
            <CellGroup no-margin class="cell-group">
                <Cell>
                    <Input type="text" placeholder="请输入邮箱"/>
                    <div class="company-label">company.com</div>
                </Cell>
                <Cell>
                    <Input type="text" send-code placeholder="请输入验证码"/>
                </Cell>
                <Cell without-border>
                    <Input type="text" placeholder="请输入公司邀请码"/>
                </Cell>
            </CellGroup>
        </Panel>

        <Button circle full width="75%" className="sure">确定</Button>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Z13Icon from './lib/Z13Icon'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import Panel from "./lib/Panel";

    export default {
        name: 'CompanyIdentification',
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
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .panel {
        margin-top: $margin-large;
        .company-label {
            position: absolute;
            top: $padding-base;
            right: 0;
        }
    }
    .sure {
        margin-top: $margin-large*2 !important;
    }
</style>
