<template>
    <LayoutBase>
        <title>报名情况</title>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <div class="cell-group">
            <div v-for="i in data" class="cell-list">
                <Avatar class="cell-list-avatar" :src="i.image" size="0.12rem"/>
                <div>{{i.nick_name}}</div>
            </div>
        </div>
        <Button v-if="activity.isJoin === 1" @onClick="cancel" type="circle" full width="92%">取消报名</Button>
    </LayoutBase>
</template>
<script>
import API from '../service/api'
import request from '../service/service'
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
            data: [],
            activity: {
                activityStatus: 0
            }
        }
    },
    computed: {

    },
    methods: {
        refresh () {
            request(`${API.get_activitys}/${this.$route.params.id}`, {
                type: 'GET'
            }, (data) => {
                this.activity = data.data;
                this.data = data.data.signups;
            }, (data) => {
                this.$root.$children[0].toggleToast('fail', data.message);
            })
        },
        cancel () {
            request(`${API.get_activitys}/${this.$route.params.id}/signups/cancel`, {
                type: 'DELETE'
            }, (data) => {
                this.refresh();
                this.$router.back(-1);
            }, (data) => {
                this.$root.$children[0].toggleToast('fail', data.message);
            })
        }
    },
    created () {
        this.refresh();
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
        margin: 0 !important;
        margin-right: $margin-base !important;
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
