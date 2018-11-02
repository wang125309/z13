<template>
    <LayoutBase>
        <title>企业认证</title>
        <Navbar v-show="false" arrow-left>企业认证</Navbar>
        <Panel class-name="panel" no-padding>
            <CellGroup no-margin class="cell-group">
                <Cell>
                    <Input v-model="user.email" type="text" placeholder="请输入邮箱"/>
                    <div class="company-label">@{{email.split('@') ? email.split('@')[1] : ''}}</div>
                </Cell>
                <Cell>
                    <Input type="text" v-model="text" :email="user.email + '@' + email.split('@')[1]" send-code-email placeholder="请输入验证码"/>
                </Cell>
                <Cell v-if="use_invitation_code" without-border>
                    <Input type="text" v-model="invitation_code" placeholder="请输入公司邀请码"/>
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
                use_invitation_code: '0',
                invitation_code: '',
                companyId: '',
                user: {
                    email: ''
                }
            }
        },
        mounted () {
            this.use_invitation_code = this.$store.state.identification_company.invitation_code;
            this.email = this.$store.state.identification_company.email;
            this.companyId = this.$store.state.identification_company.id;
        },
        methods: {
            confirm () {
                request(API.get_user_info, {
                    type: 'PUT',
                    data: {
                        company_id: this.companyId,
                        emailCode: this.text,
                        email: this.user.email + '@' + this.email.split('@')[1],
                        invitation_code: this.invitation_code,
                        busiType: 3 //1 修改昵称2 修改头像3 修改公司4 修改工位6修改手机号
                    }
                }, (data) => {
                    this.$store.dispatch('SET_USER_INFO', this)
                    // _this.$root.$children[0].toggleToast('success', data.message);
                    setTimeout(() => {
                        this.$router.push({
                            path: '/company-identification-success'
                        })
                    }, 500)
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
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
