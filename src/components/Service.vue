<template>
    <LayoutBase>
        <Navbar arrow-left>送水</Navbar>
        <CellGroup :class-name="cellGroupCls" full no-margin>
            <div :class="cellCls">
                <Icon size="0.2rem" :class-name="iconCls" type="rent-img" position="left"/>
                <div :class="wrapCls">
                    <div :class="titleCls">洗车店名字</div>
                    <div :class="timeCls">08:00 - 22:00</div>
                </div>
            </div>
            <Cell :class-name="cellBottomCls">
                <div :class="itemCls">
                    <div>地点：A座1层1002房间</div>
                    <div>电话：010-2321424</div>
                </div>
                <Icon :class-name="callCls" size="0.11rem" position="right" type="call"/>
            </Cell>
        </CellGroup>
        <ActivityCardItem cut full title="服务说明">
            <div>afasdfsdf</div>
            <div>afasdfsdf</div>
            <div>afasdfsdf</div>
        </ActivityCardItem>
        <ActivityCardItem cut full title="洗车服务">
            <div>sdfafs</div>
            <div>sdfafs</div>
            <div>sdfafs</div>
        </ActivityCardItem>
    </LayoutBase>
</template>
<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import Panel from "./lib/Panel";
    import Icon from "./lib/Icon";
    import Cell from "./lib/Cell";
    import CellGroup from "./lib/CellGroup";
    import ActivityCardItem from "./lib/ActivityCardItem";

    const prefix = 'z13';

    export default {
        components: {
            ActivityCardItem,
            CellGroup,
            Cell,
            Icon,
            Panel,
            Navbar,
            LayoutBase
        },
        computed: {
            cellGroupCls () {
                return [
                    `${prefix}-cell-group`
                ]
            },
            wrapCls () {
                return [
                    `${prefix}-wrap`
                ]
            },
            titleCls () {
                return [
                    `${prefix}-title`
                ]
            },
            timeCls () {
                return [
                    `${prefix}-time`
                ]
            },
            iconCls () {
                return [
                    `${prefix}-icon`
                ]
            },
            cellCls () {
                return [
                    `${prefix}-cell`
                ]
            },
            callCls () {
                return [
                    `${prefix}-call`
                ]
            },
            cellBottomCls () {
                return [
                    `${prefix}-cell-bottom`
                ]
            },
            itemCls () {
                return [
                    `${prefix}-item`
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../styles/var.styl";
    @import "../styles/hairline.styl";
    .{$prefix}-cell-group {
    }
    .{$prefix}-icon {
        margin-left: $margin-base;
    }
    .{$prefix}-time {
        margin-top: $padding-base;
        color: $font-second;
    }
    .{$prefix}-title {
        font-size: $font-size-head;
    }
    .{$prefix}-wrap {
        margin-left: 0.2rem;
        padding-left: $padding-base;
    }
    .{$prefix}-cell {
        position: relative;
        padding: $padding-base;
        margin-right: 0 !important;
        height: 0.2rem;
        hairline('bottom');
        &-bottom {
            .{$prefix}-cell {
                height: initial;
                margin-left: 0 !important;
                padding-left: $padding-base;
            }
        }
    }
    .{$prefix}-call {
        right: $padding-base !important;
        top: 50%;
        left: initial;
        transform: translateY(-50%);

    }
    .{$prefix}-item {
        color: $font-second;
        line-height: 1.5;
    }
</style>