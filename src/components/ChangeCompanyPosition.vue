<template>
    <LayoutBase>
        <Navbar arrowLeft>修改办公位置</Navbar>
        <CellGroup full class="cell-group">
            <Cell full without-border>
                <Input type="text" v-model="office_location" :default-value="defaultValue" withClear placeholder="请输入办公位置"/>
            </Cell>
        </CellGroup>
        <Button class="next-step" circle type="primary" @onClick="save" full width="92%">保存</Button>
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
        name: 'ChangeName',
        components: {
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
        },
        methods: {
            save () {
                let _this = this;
                requests(API.get_user_info, {
                    type: 'PUT',
                    data: {
                        office_location: _this.office_location,
                        busiType: 4 //1 修改昵称2 修改头像3 修改公司4 修改工位6修改手机号
                    }
                }, (data) => {
                    this.$store.dispatch('SET_USER_INFO', this)
                    _this.$root.$children[0].toggleToast('success', data.message);
                    setTimeout(() => {
                        this.$router.push({
                            path: '/user-info'
                        })
                    }, 500)
                }, (data) => {
                    _this.$root.$children[0].toggleToast('fail', data.message);
                })
            },

        },
        mounted () {
            this.name = this.$store.state.user.office_location;
        },
        updated () {
            if (!this.updated) {
                this.name = this.$store.state.user.office_location;
                this.updated = true;
            }
        },
        computed: {
            defaultValue () {
                return this.$store.state.user.office_location
            }
        },
        data () {
            return {
                office_location: '',
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
