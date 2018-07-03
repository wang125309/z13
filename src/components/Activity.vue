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
        <div class="sign-bar-placeholder"/>
        <div class="sign-bar">
            <div class="sign-item-wrap">
                <Icon position="left" size="0.08rem" className="comment" type="comment"/>
                <Button size="small-padding" width="0.2rem" circle className="sign-up-button">报名</Button>
            </div>
        </div>
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
    import Icon from "./lib/Icon";
    import Toast from "./lib/Toast";
    export default {
        name: 'Activity',
        components: {
            Icon,
            Panel,
            ActivityCardItem,
            Navbar,
            Button,
            Card,
            LayoutBase,
            ActivityDetailImage,
            CellGroup,
            Cell,
            Toast
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
    @import '../styles/hairline.styl';
    .activity-card {
        margin-top: $margin-small;
        &-title {
            color: $font-second;
        }
        &-message {
            padding-top: $padding-small;
        }
    }
    .sign-bar {
        position: fixed;
        padding: $padding-base 0;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: $white;
        //border-top: 1px solid $border-color;
        hairline('top');
    }
    .comment {
        left: $margin-base !important;
    }
    .sign-bar-placeholder {
        height: $padding-base * 5;
    }
    .sign-item-wrap {
        padding: 0 $padding-base;
    }
</style>
