<template>
    <LayoutBase>
        <Navbar arrowLeft>昵称</Navbar>
        <CellGroup full class="cell-group">
            <Cell full>
                <Input type="text" v-model="name" withClear placeholder="请输入昵称"/>
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
                        nick_name: this.name,
                        busiType: 1 //1修改昵称2修改头像3修改公司4修改工位6修改手机号
                    }
                }, (data) => {
                    _this.$root.$children[0].toggleToast('success', data.message);
                }, (data) => {
                    _this.$root.$children[0].toggleToast('fail', data.message);
                })
            }
        },
        data () {
            return {
                name: ''
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
