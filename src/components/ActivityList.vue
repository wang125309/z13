<template>
    <LayoutBase>
        <Navbar arrow-left>社区活动</Navbar>
        <SearchInput/>
        <Tabs>
            <TabsCell @onClick="setActive(0)" :active="getActive(0)">全部</TabsCell>
            <TabsCell @onClick="setActive(1)" :active="getActive(1)">进行中</TabsCell>
            <TabsCell @onClick="setActive(2)" :active="getActive(2)">已结束</TabsCell>
        </Tabs>
        <!--<div class="empty">-->
            <!--<Icon type="no-activity" size="0.25rem"/>-->
        <!--</div>-->
        <Card @click="goActive" full className="activity-card">
            <ActivityImages src="../assets/banner.png" title="中秋节抽奖活动" status="进行中" date="2017-06-03" location="平顶山" tag="已有29192人参与"/>
        </Card>
        <Card @click="goActive" full className="activity-card">
            <ActivityImages src="../assets/banner.png" title="中秋节抽奖活动" status="已结束" date="2018-09-19" location="二期就上盯上" tag="已有21312人参与"/>
        </Card>
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
                active: localStorage['activity-busiType'] ? parseInt(localStorage['activity-busiType']) : 0
            }
        },
        created () {
            request(API.get_activitys, {
                type: 'GET',
                data: {
                    busiType: this.getBusiType()
                }
            }, (data) => {
                this.data = pageResult(data.data);
                console.log(this.data)
            }, (data) => {
                this.$root.$children[0].toggleToast('fail', data.message);
            })
        },
        methods: {
            getBusiType () {
                return localStorage['activity-busiType'] ? parseInt(localStorage['activity-busiType']) : 0;
            },
            getActive (n) {
                console.log(n, this.active)
                return n === this.active
            },
            setActive (n) {
                localStorage['activity-busiType'] = n;
                this.active = n;
            },
            goActive () {
                this.$router.push({
                    path: '/activity'
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
