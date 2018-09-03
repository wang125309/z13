<template>
    <LayoutBase>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input type="number" disabled v-model="mobile" :default-value="defaultValue" withClear placeholder="请输入手机号"/>
            </Cell>
        </CellGroup>
        <Button class="next-step" circle type="primary" @onClick="save" full width="92%">更换手机号</Button>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import API from '../service/api'
    import requests from '../service/service'
    export default {
        name: 'ChangeMobile',
        components: {
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
        },
        updated () {
            if (!this.updated) {
                this.mobile = this.$store.state.user.account;
                this.updated = true;
            }
        },
        mounted () {
            this.mobile = this.$store.state.user.account;
        },
        methods: {
            save () {
                let _this = this;
                this.$router.push({
                    path: '/valid-old-mobile'
                })
                // requests(API.get_user_info, {
                //     type: 'PUT',
                //     data: {
                //         mobile: _this.mobile,
                //         busiType: 6 //1 修改昵称2 修改头像3 修改公司4 修改工位6修改手机号
                //     }
                // }, (data) => {
                //     _this.$root.$children[0].toggleToast('success', data.message);
                // }, (data) => {
                //     _this.$root.$children[0].toggleToast('fail', data.message);
                // })
            },

        },
        computed: {
            defaultValue () {
                return this.$store.state.user.mobile
            }
        },
        data () {
            return {
                mobile: '',
                updated: false
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .cell-group {
        margin-top: $margin-large !important;
        position: relative;
        hairline('top');
        hairline('bottom');
    }
    .next-step {
        margin-top: $margin-large;
    }
</style>
