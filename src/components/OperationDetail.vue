<template>
    <LayoutBase>
        <title>操作</title>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <div class="operation-tab">
            <Icon size="0.5rem" type="operation-close"></Icon>
        </div>
        <div class="operation-tool">
             <icon className="operation-tools-icon" size="0.6rem" type="operation-tool">
                 <icon absolute class="operation-center" size="0.16rem" type="operation-center"/>
                 <icon absolute class="operation-on" size="0.1rem" type="operation-on"/>
                 <icon absolute class="operation-off" size="0.1rem" type="operation-off"/>
                 <icon absolute class="operation-tool-up" size="0.08rem" type="operation-tool-up"/>
                 <icon absolute class="operation-down" size="0.08rem" type="operation-down"/>
                 <icon absolute class="operation-pause-on" size="0.14rem" type="operation-pause-on"/>
             </icon>
        </div>
    </LayoutBase>

</template>

<script>
    import Navbar from "./lib/Navbar";
    import Icon from "./lib/Icon";
    import LayoutBase from "./lib/LayoutBase";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Panel from "./lib/Panel";
    import IconOperation from './lib/IconOperation'
    export default {
        components: {
            IconOperation,
            Panel,
            Cell,
            CellGroup,
            LayoutBase,
            Icon,
            Navbar
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .operation-tab {
        flex: 1;
        padding: $padding-large * 2 0;
        text-align: center;
        &:last-child {
            border: none;
        }
    }
    .panel {
        border-top: none;
        .operation-tool {
            margin: $margin-large auto;
        }
    }
    .operation-tool {
        position: relative;
        .operation-tools-icon {
            position: relative;
        }
    }
    .operation-center {
        position: absolute !important;
        width: 0.14rem !important;
        height: 0.14rem !important;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .operation-on {
        position: absolute !important;
        top: 50% !important;
        left: 0.08rem;
        transform: translateY(-50%);
    }
    .operation-off {
        position: absolute !important;
        top: 50% !important;
        right: 0.08rem;
        transform: translateY(-50%);
    }
    .operation-tool-up {
        position: absolute !important;
        top: 0.08rem !important;
        left: 50% !important;
        transform: translateX(-50%);
    }
    .operation-down {
        position: absolute !important;
        bottom: 0.08rem !important;
        left: 50% !important;
        transform: translateX(-50%);
    }
    .operation-pause-on {
        position: absolute !important;
        left: 50% !important;
        top: 50% !important;
        transform: translateX(-50%) translateY(-50%);
    }
</style>
