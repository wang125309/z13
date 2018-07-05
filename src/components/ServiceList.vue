<template>
    <LayoutBase>
        <Navbar arrowLeft>贴心服务</Navbar>
        <div class="operation-tabs">
            <div class="operation-tab">
                <Icon size="0.15rem" type="operation-open"></Icon>
                <div class="operation-text">百叶帘</div>
            </div>
            <div class="operation-tab">
                <Icon size="0.15rem" type="operation-close"></Icon>
                <div class="operation-text">物业报修</div>
            </div>
        </div>
        <Panel noPadding className="panel">
            <ServiceCellGroup>
                <ServiceCell full @click="go(1)" type="blands-icon" text="百叶帘"/>
                <ServiceCell full @click="go(2)" type="tools-icon" text="物业报修"/>
                <ServiceCell full @click="go(3)" type="delivery-icon" text="就餐服务"/>
            </ServiceCellGroup>
            <ServiceCellGroup>
                <ServiceCell full @click="go(4)" type="express-icon" text="快递"/>
                <ServiceCell full @click="go(5)" type="visitor-icon" text="洗车"/>
                <ServiceCell full @click="go(6)" type="park-icon" text="停车"/>
            </ServiceCellGroup>
            <ServiceCellGroup>
                <ServiceCell full @click="go(7)" type="rent-icon" text="可租单元"/>
                <ServiceCell full @click="go(8)" type="building-icon" text="大厦服务"/>
                <ServiceCell full @click="go(8)" type="building-icon" text="大厦布局"/>
            </ServiceCellGroup>
        </Panel>
        <TabBar :active="2"/>
    </LayoutBase>

</template>

<script>
    import Navbar from "./lib/Navbar";
    import Icon from "./lib/Icon";
    import LayoutBase from "./lib/LayoutBase";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Panel from "./lib/Panel";
    import ServiceCellGroup from "./lib/ServiceCellGroup";
    import ServiceCell from "./lib/ServiceCell";
    import TabBar from "./lib/TabBar";
    export default {
        components: {
            Panel,
            Cell,
            CellGroup,
            LayoutBase,
            Icon,
            Navbar,
            ServiceCellGroup,
            ServiceCell,
            TabBar
        }
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