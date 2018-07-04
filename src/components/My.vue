<template>
    <LayoutBase>
        <Navbar>我的</Navbar>
        <Panel>
            <Avatar src="/assets/banner.png"/>
            <div class="user-name">张三</div>
            <div class="sub-name">182627362721</div>
        </Panel>
        <CellGroup full>
            <!--<Cell full padding isLink>-->
                <!--我的订单-->
            <!--</Cell>-->
            <Cell full padding isLink="/my-activity">
                我的活动
            </Cell>
            <!--<Cell full padding isLink>-->
                <!--我的报修-->
            <!--</Cell>-->
            <Cell full padding isLink="/problem" withoutBorder>
                常见问题
            </Cell>
        </CellGroup>
        <TabBar :active="3"/>
    </LayoutBase>
</template>

<script>
    import Navbar from './lib/Navbar'
    import LayoutBase from './lib/LayoutBase';
    import TabBar from "./lib/TabBar";
    import Panel from './lib/Panel'
    import Avatar from "./lib/Avatar";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    export default {
        name: 'My',
        components: {
            Cell,
            CellGroup,
            Avatar,
            TabBar,
            LayoutBase,
            Navbar,
            Panel
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .user-name {
        text-align: center;
        margin-top: $margin-base;
    }
    .sub-name {
        text-align: center;
        color: $font-second;
    }
</style>
