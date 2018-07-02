<template>
    <LayoutBase>
        <Navbar arrowLeft>活动详情</Navbar>
        <ActivityDetailImage src="/assets/banner.png" title="中秋节抽奖活动" status="进行中" date="2017-06-03" location="平顶山"/>
        <Card noPadding>
            <CellGroup noMargin>
                <Cell padding>
                    <div class="activity-card-title">报名时间：</div>
                    <div class="activity-card-message">2016.08.12 - 2018.02.12</div>
                </Cell>
                <Cell padding>
                    <div class="activity-card-title">活动时间：</div>
                    <div class="activity-card-message">2016.08.12 - 2018.02.12</div>
                </Cell>
                <Cell padding>
                    <div class="activity-card-title">活动地点：</div>
                    <div class="activity-card-message">大厅</div>
                </Cell>
                <Cell padding withoutBorder>
                    <div class="activity-card-title">活动参与：</div>
                    <div class="activity-card-message">100 人参与</div>
                </Cell>
            </CellGroup>
        </Card>
        <Panel noPadding>
            <ActivityCardItem title="活动介绍">
                去跑步吧，走吧
            </ActivityCardItem>
            <ActivityCardItem title="规则">
                去跑步吧，走吧
            </ActivityCardItem>
            <ActivityCardItem title="场地">
                去跑步吧，走吧
            </ActivityCardItem>
            <ActivityCardItem title="评论" noBorder>
                快来发表评论吧
            </ActivityCardItem>
        </Panel>
    </LayoutBase>
</template>

<script>
    import Navbar from './lib/Navbar'
    import LayoutBase from './lib/LayoutBase';
    import ActivityDetailImage from "./lib/ActivityDetailImage";
    import Card from "./lib/Card";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Button from "./lib/Button";
    import ActivityCardItem from "./lib/ActivityCardItem";
    import Panel from "./lib/Panel";
    export default {
        name: 'Activity',
        components: {
            Panel,
            ActivityCardItem,
            Navbar,
            Button,
            Card,
            LayoutBase,
            ActivityDetailImage,
            CellGroup,
            Cell
        },
        methods: {
            getActive(n) {
                return n === this.active
            },
            setActive(n) {
                this.active = n;
            }
        },
        data () {
            return {
                active: 0
            }
        }
    }
</script>

<style lang="stylus">
    @import '../styles/var.styl';
    .activity-card {
        margin-top: $margin-small;
        &-title {
            color: $font-second;
        }
        &-message {
            padding-top: $padding-small;
        }
    }
</style>
