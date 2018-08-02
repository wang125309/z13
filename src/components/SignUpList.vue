<template>
    <LayoutBase>
        <Navbar arrow-left>报名情况</Navbar>
        <div class="cell-group">
            <div class="cell-list">
                <Avatar class="cell-list-avatar" size="0.12rem"/>
                <div>报名人昵称</div>
            </div>
            <div class="cell-list">
                <Avatar class="cell-list-avatar" size="0.12rem"/>
                <div>报名人昵称</div>
            </div>
            <div class="cell-list">
                <Avatar class="cell-list-avatar" size="0.12rem"/>
                <div>报名人昵称</div>
            </div>
        </div>
        <Button type="circle" full width="92%">取消报名</Button>
    </LayoutBase>
</template>
<script>
import API from '../service/api'
import requset from '../service/service'
import LayoutBase from "./lib/LayoutBase";
import Navbar from "./lib/Navbar";
import CellGroup from "./lib/CellGroup";
import Avatar from "./lib/Avatar";
import Button from "./lib/Button";
import Cell from "./lib/Cell";

const prefix = 'z13';
export default {
    components: {Cell, Button, Avatar, CellGroup, Navbar, LayoutBase},
    data () {
        return {
            data: []
        }
    },
    computed: {

    },
    methods: {
        refresh () {
            requset(`${API.get_activitys}/${this.$route.params.id}`, {
                type: 'GET'
            }, (data) => {
                this.data = data.data.signups;
            }, (data) => {
                this.$root.$children[0].toggleToast('fail', data.message);
            })
        }
    },
    created () {

    }
}
</script>
<style lang="stylus" scoped>
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';

    .cell-group {
        background-color: #fff;
    }
    .cell-list-avatar {
        margin-right: $margin-base;
    }
    .cell-list {
        position: relative;
        hairline('bottom');
        padding: $padding-base;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:last-child {
            hairline-remove('bottom');
        }
    }
</style>
