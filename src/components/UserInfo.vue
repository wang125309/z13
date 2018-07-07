<template>
    <LayoutBase>
        <Navbar arrow-left>个人信息</Navbar>
        <div class="title">基本信息</div>
        <Panel class-name="panel" no-padding>
            <CellGroup full no-margin>
                <Cell flex class-name="cell" padding full>
                    <span class="left">头像</span>
                    <span class="right">
                        <Icon type="rent-img" class-name="avatar" size="0.07rem"/>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
                <Cell flex class-name="cell" padding full>
                    <span class="left">昵称</span>
                    <span class="right">
                        <span class="right-span">爱吃土豆的西红柿</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
                <Cell flex class-name="cell" padding full>
                    <span class="left">手机号</span>
                    <span class="right">
                        <span class="right-span">1872627236</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
            </CellGroup>
        </Panel>

        <div class="title">单位信息</div>
        <Panel class-name="panel" no-padding>
            <CellGroup full no-margin>
                <Cell flex class-name="cell" padding full>
                    <span class="left">我的单位</span>
                    <span class="right">
                        <span class="right-span">百度</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
                <Cell noBorder flex class-name="cell" padding full>
                    <span class="left">办公位置</span>
                    <span class="right">
                        <span class="right-span">G1-93-12</span>
                        <Icon type="arrow-right" size="0.05rem"/>
                    </span>
                </Cell>
            </CellGroup>
        </Panel>
        <Button circle width="92%" bottom-white @click="quit">退出登录</Button>
    </LayoutBase>
</template>
<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import Panel from "./lib/Panel";
    import Cell from "./lib/Cell";
    import CellGroup from "./lib/CellGroup";
    import Icon from "./lib/Icon";
    import Button from "./lib/Button";

    export default {
        components: {
            Button,
            Icon,
            CellGroup,
            Cell,
            Panel,
            Navbar,
            LayoutBase
        },
        methods: {
            quit () {

            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .avatar {
        margin-right: $padding-small;
    }
    .title {
        color: $font-second;
        margin: $margin-base;
    }
    .right {
        display: flex;
        align-self: flex-end;
        justify-content: space-between;
        align-items: center;
    }
    .right-span {
        padding-right: $padding-small;
    }
    .cell {
        &:active {
            background: $white * 0.95;
        }
    }
</style>