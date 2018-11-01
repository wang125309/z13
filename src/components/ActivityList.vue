<template>
    <LayoutBase>
        <title>活动列表</title>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <SearchInput v-model="searchWord" @search="search"/>
        <Tabs>
            <TabsCell @onClick="setActive(0)" :active="getActive(0)">全部</TabsCell>
            <TabsCell @onClick="setActive(1)" :active="getActive(1)">进行中</TabsCell>
            <TabsCell @onClick="setActive(2)" :active="getActive(2)">已结束</TabsCell>
        </Tabs>
        <div v-if="!data.length" class="empty">
            <Icon type="no-activity" size="0.25rem"/>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <Card v-if="data.length" v-for="i in data" v-bind:key="'card'+i.id" @click="goActive(i.id)" full className="activity-card">
                <ActivityImages v-bind:key="'images' + i.id" :src="i.image" :title="i.name" :status="i.activityStatus === 0 ? '未开始' : i.activityStatus === 1 ? '进行中' : '已结束'" :date="i.begin_time.split(' ')[0]" :location="i.address" :tag="'已有' + i.signupCount + '人参与'"/>
            </Card>
        </div>
        <TabBar :active="2"/>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import SearchInput from "./lib/SearchInput";
    import Icon from "./lib/Icon";
    import TabBar from "./lib/TabBar";
    import Tabs from "./lib/Tabs";
    import TabsCell from "./lib/TabsCell";
    import ActivityImages from './lib/ActivityImages';
    import Card from "./lib/Card";
    import API from "../service/api";
    import request from "../service/service"
    import pageResult from "../service/pageResult";

    export default {
        name: 'Login',
        components: {
            Card,
            TabsCell,
            Tabs,
            TabBar,
            Icon,
            SearchInput,
            Navbar,
            LayoutBase,
            ActivityImages
        },
        data () {
            return {
                active: localStorage['activity-busiType'] ? parseInt(localStorage['activity-busiType']) : 0,
                data: [],
                page: 1,
                busy: false,
                searchWord: ''
            }
        },
        created () {
            this.refresh(this.page)
        },
        methods: {
            loadMore () {
                this.page ++
                this.refresh(this.page)
            },
            search () {
                this.page = 1
                this.refresh(this.page, this.searchWord)
            },
            refresh (page, name) {
                this.busy = true
                request(API.get_activitys, {
                    type: 'GET',
                    data: name ? {
                        busiType: this.getBusiType(),
                        pageNumber: page,
                        name: name
                    } : {
                        busiType: this.getBusiType(),
                        pageNumber: page,
                    }
                }, (data) => {
                    if (page === 1) {
                        this.data = [];
                    }
                    if (data.data.totalPage >= page) {
                        this.data = this.data.concat(pageResult(data.data))
                        this.busy = false
                    }
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
                this.page = 1
                this.refresh(1, this.searchWord);
            },
            goActive (id) {
                this.$router.push({
                    path: '/activity/' + id + '/'
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .activity-card {
        margin-top: $margin-base;
    }
    .empty {
        margin-top: $margin-large * 3;
    }
</style>
