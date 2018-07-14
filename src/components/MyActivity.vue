<template>
    <LayoutBase>
        <Navbar arrow-left>我的活动</Navbar>
        <Tabs>
            <TabsCell @onClick="setActive(0)" :active="getActive(0)">全部</TabsCell>
            <TabsCell @onClick="setActive(1)" :active="getActive(1)">进行中</TabsCell>
            <TabsCell @onClick="setActive(2)" :active="getActive(2)">已结束</TabsCell>
        </Tabs>
        <Card @click="goActive" full className="activity-card">
            <ActivityImages src="/assets/banner.png" title="中秋节抽奖活动" status="进行中" date="2017-06-03" location="平顶山" tag="已有29192人参与"/>
        </Card>
        <Card @click="goActive" full className="activity-card">
            <ActivityImages src="/assets/banner.png" title="中秋节抽奖活动" status="已结束" date="2018-09-19" location="二期就上盯上" tag="已有21312人参与"/>
        </Card>
        <Button @click="more" circle full width="92%" class="bottom-btn">发现更多活动</Button>
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
    import Button from "./lib/Button";
    export default {
        name: 'MyActivity',
        components: {
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
            getActive(n) {
                return n === this.active
            },
            setActive(n) {
                this.active = n;

            },
            goActive() {
                this.$router.push({
                    path: '/activity'
                })
            },
            more () {
                this.$router.push({
                    path: '/activity-list'
                })
            }
        },
        data () {
            return {
                active: 0
            }
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
</style>
