<template>
    <LayoutBase>
        <Tabs>
            <TabsCell @onClick="setActive(0)" :active="getActive(0)">全部</TabsCell>
            <TabsCell @onClick="setActive(1)" :active="getActive(1)">进行中</TabsCell>
            <TabsCell @onClick="setActive(2)" :active="getActive(2)">已结束</TabsCell>
        </Tabs>
        <div v-if="!data.length" class="empty">
            <Icon type="no-activity" size="0.25rem"/>
        </div>
        <Card v-if="data.length" v-for="i in data" v-bind:key="'card'+i.id" @click="goActive(i.id)" full className="activity-card">
            <ActivityImages v-bind:key="'images' + i.id" :src="i.image" :title="i.name" :status="i.status === 0 ? '全部' : i.status === 1 ? '进行中' : '已结束'" :date="i.begin_time.split(' ')[0]" :location="i.address" :tag="'已有' + i.signupCount + '人参与'"/>
        </Card>
        <Button @onClick="more" circle full width="92%" class="bottom-btn">发现更多活动</Button>
    </LayoutBase>
</template>

<script>
    import Navbar from './lib/Navbar'
    import LayoutBase from './lib/LayoutBase';
    import TabBar from './lib/TabBar';
    import Tabs from './lib/Tabs';
    import TabsCell from './lib/TabsCell'
    import ActivityImages from "./lib/ActivityImages";
    import Card from "./lib/Card";
    import API from "../service/api";
    import Button from "./lib/Button";
    import request from "../service/service"
    import pageResult from "../service/pageResult";
    import Icon from './lib/Icon'

    export default {
        name: 'MyActivity',
        components: {
            Icon,
            Button,
            Card,
            ActivityImages,
            Tabs,
            TabsCell,
            TabBar,
            LayoutBase,
            Navbar,
        },

        methods: {
            refresh (page) {
                request(API.get_activitys, {
                    type: 'GET',
                    data: {
                        busiType: this.getBusiType(),
                        pageNumber: page,
                        isMyActivity: 1
                    }
                }, (data) => {
                    if (page === 1) this.data = [];
                    Object.assign(this.data, pageResult(data.data, page));
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            getBusiType () {
                return localStorage['activity-busiType'] ? parseInt(localStorage['activity-busiType']) : 0;
            },
            getActive (n) {
                return n === this.active
            },
            setActive (n) {
                localStorage['activity-busiType'] = n;
                this.active = n;
                this.refresh(1);
            },
            goActive (id) {
                this.$router.push({
                    path: '/activity/' + id + '/'
                })
            },
            more () {
                console.log('Id ')
                this.$router.push({
                    path: "/activity-list/"
                })
            }
        },
        data () {
            return {
                active: localStorage['activity-busiType'] ? parseInt(localStorage['activity-busiType']) : 0,
                data: [],
            }
        },
        created () {
            this.refresh(1);
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .activity-card {
        margin-top: $margin-base;
    }
    .bottom-btn {
        position: fixed !important;
        bottom: $padding-base !important;
        color: $brand-color !important;
        border: none !important;
    }
    .empty {
        margin-top: $margin-large * 3;
    }
</style>
