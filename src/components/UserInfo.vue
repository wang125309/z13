<template>
    <LayoutBase>
        <Navbar arrow-left>个人信息</Navbar>
        <div class="title">基本信息</div>
        <Panel class-name="panel" no-padding>
            <CellGroup full no-margin>
                <Cell @click="changeAvatar" flex class-name="cell" padding full>
                    <span class="left">头像</span>
                    <span class="right">
                        <Icon type="rent-img" class="avatar" size="0.07rem"/>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
                <Cell @click="changeName" flex class-name="cell" padding full>
                    <span class="left">昵称</span>
                    <span class="right">
                        <span class="right-span">{{user.accoun}}</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
                <Cell @click="changeMobile" flex class-name="cell" padding full>
                    <span class="left">手机号</span>
                    <span class="right">
                        <span class="right-span">{{user.mobile}}</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
            </CellGroup>
        </Panel>

        <div class="title">单位信息</div>
        <Panel class-name="panel" no-padding>
            <CellGroup full no-margin>
                <Cell @click="changeCompany" flex class-name="cell" padding full>
                    <span class="left">我的单位</span>
                    <span class="right">
                        <span class="right-span">{{user.company}}</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
                <Cell @click="changeComponyPosition" noBorder flex class-name="cell" padding full>
                    <span class="left">办公位置</span>
                    <span class="right">
                        <span class="right-span">G1-93-12</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
            </CellGroup>
        </Panel>
        <Button circle width="92%" bottom-white @onClick="quit">退出登录</Button>
        <ActionSheet @onVisibleChange="quit" :visible="quitVisible" :options="options">退出后下次登录需要重新输入手机号及验证码<br>请确认</ActionSheet>
    </LayoutBase>
</template>
<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import Panel from "./lib/Panel";
    import Cell from "./lib/Cell";
    import CellGroup from "./lib/CellGroup";
    import Icon from "./lib/Icon";
    import Button from "./lib/Button";
    import ActionSheet from "./lib/ActionSheet";
    import requests from '../service/service';
    import API from '../service/api';
    import cookies from '../Session/cookie';
    export default {
        components: {
            ActionSheet,
            Button,
            Icon,
            CellGroup,
            Cell,
            Panel,
            Navbar,
            LayoutBase
        },
        data () {
            let _this = this;
            return {
                options: [
                    {
                        title: '确定退出',
                        type: 'error',
                        event () {
                            requests(API.do_logout, {
                                type: 'PUT'
                            }, (data) => {
                                cookies.quit();
                                _this.$router.push({
                                    path: '/login'
                                })
                            }, (data) => {
                                _this.$root.$children[0].toggleToast('fail', data.message);
                            });

                        }
                    }
                ],
                quitVisible: false
            }
        },
        computed: {
            user () {
                return this.$store.state.user;
            }
        },
        methods: {
            quit () {
                this.quitVisible = !this.quitVisible
            },
            changeAvatar () {
                this.$router.push('/change-avatar')
            },
            changeName () {
                this.$router.push('/change-name')
            },
            changeMobile () {
                this.$router.push('/change-mobile')
            },
            changeCompany () {
                this.$router.push('/change-company')
            },
            changeComponyPosition () {
                this.$router.push('/change-company-position')
            }
        },
        mounted () {
            requests(API.get_user_info, {}, (data) => {
                console.log(data);
            }, (data) => {

            });
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .avatar {
        margin-right: $padding-small;
    }
    .title {
        color: $font-second;
        margin: $margin-base;
    }
    .right {
        display: flex;
        align-self: flex-end;
        justify-content: space-between;
        align-items: center;
    }
    .right-span {
        padding-right: $padding-small;
    }
    .cell {
        &:active {
            background: $white * 0.95;
        }
    }
</style>