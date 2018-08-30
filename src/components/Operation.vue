<template>
    <LayoutBase>
        <div class="operation-tabs">
            <div class="operation-tab">
                <Icon size="0.15rem" type="operation-open"></Icon>
                <div class="operation-text">全部开启</div>
            </div>
            <div class="operation-tab">
                <Icon size="0.15rem" type="operation-close"></Icon>
                <div class="operation-text">全部关闭</div>
            </div>
        </div>
        <Panel noPadding className="panel">
            <div class="panel-title">我的百叶帘</div>
            <CellGroup full noMargin>
                <Cell full padding isLink="/operation-detail">
                    13层百叶窗
                </Cell>
                <Cell full padding isLink="/operation-detail">
                    13层百叶窗
                </Cell>
                <Cell full padding withoutBorder isLink="/operation-detail">
                    13层百叶窗
                </Cell>
            </CellGroup>
        </Panel>
    </LayoutBase>

</template>

<script>
    import Navbar from "./lib/Navbar";
    import Icon from "./lib/Icon";
    import LayoutBase from "./lib/LayoutBase";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Panel from "./lib/Panel";
    export default {
        components: {Panel, Cell, CellGroup, LayoutBase, Icon, Navbar}
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .operation-tabs {
        display: flex;
        align-items: center;
        position: relative;
        //border-bottom: 1px solid $border-color;
        hairline('bottom');
        background-color: $white;
        .operation-tab {
            flex: 1;
            position: relative;
            //border-right: 1px solid $border-color;
            hairline('right');
            padding: $padding-large * 2 0;
            text-align: center;
            &:last-child {
                border: none;
            }
        }
        .operation-text {
            margin-top: $margin-base;
        }
    }
    .panel {
        margin-top: $margin-base;
        .panel-title {
            position: relative;
            padding: $padding-base;
            //border-bottom: 1px solid $border-color;
            hairline('bottom');
        }
    }
</style>
