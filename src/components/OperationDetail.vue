<template>
    <LayoutBase>
        <Navbar arrowLeft>百叶窗控制</Navbar>
        <div class="operation-tab">
            <Icon size="0.5rem" type="operation-close"></Icon>
        </div>
        <div class="operation-tool">
             <Icon className="operation-tools-icon" size="0.6rem" type="operation-tool">
                 <Icon className="operation-center" size="0.16rem" type="operation-center"/>
                 <Icon className="operation-on" size="0.1rem" type="operation-on"/>
                 <Icon className="operation-off" size="0.1rem" type="operation-off"/>
                 <Icon className="operation-tool-up" size="0.08rem" type="operation-tool-up"/>
                 <Icon className="operation-down" size="0.08rem" type="operation-down"/>
                 <Icon className="operation-pause-on" size="0.14rem" type="operation-pause-on"/>
             </Icon>
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
    export default {
        components: {
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
        position: absolute;
        width: 0.14rem;
        height: 0.14rem;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .operation-on {
        position: absolute;
        top: 50%;
        left: 0.08rem;
        transform: translateY(-50%);
    }
    .operation-off {
        position: absolute;
        top: 50%;
        right: 0.08rem;
        transform: translateY(-50%);
    }
    .operation-tool-up {
        position: absolute;
        top: 0.08rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .operation-down {
        position: absolute;
        bottom: 0.08rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .operation-pause-on {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>