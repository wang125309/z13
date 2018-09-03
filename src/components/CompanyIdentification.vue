<template>
    <LayoutBase>
        <Navbar v-show="false" arrow-left>企业认证</Navbar>
        <Panel class-name="panel" no-padding>
            <CellGroup no-margin class="cell-group">
                <Cell>
                    <Input v-model="user.email" type="text" placeholder="请输入邮箱"/>
                    <div class="company-label">{{email}}</div>
                </Cell>
                <Cell>
                    <Input type="text" v-model="text" :email="user.email + email" send-code-email placeholder="请输入验证码"/>
                </Cell>
                <Cell v-if="invitation_code === '1'" without-border>
                    <Input type="text" v-model="inviteCode" placeholder="请输入公司邀请码"/>
                </Cell>
            </CellGroup>
        </Panel>
        <Button @onClick="confirm" circle full width="75%" className="sure">确定</Button>
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
    import request from "../service/service"
    import API from "../service/api"

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
                email: '',
                text: '',
                inviteCode: '',
                invitation_code: '0',
                user: {
                    email: ''
                }
            }
        },
        mounted () {
            this.invitation_code = this.$store.state.identification_company.invitation_code;
            this.email = this.$store.state.identification_company.email;
        },
        methods: {
            confirm () {
                request(API.verify_email_code, {
                    type: 'POST',
                    data: {
                        busiType: 1,
                        email: this.user.email + this.email,
                        emailCode: this.text,
                        inviteCode: this.inviteCode
                    }
                }, (data) => {
                    this.$router.push({
                        path: '/company-identification-success'
                    })
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
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
