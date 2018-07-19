<template>
    <LayoutBase>
        <Navbar>我的</Navbar>
        <Panel>
            <Avatar @click="go" :src="user.image"/>
            <div class="user-name">{{user.nick_name}}</div>
            <div class="sub-name">{{user.account}}</div>
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
    import avatar from '../assets/avatar.png';

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
        computed: {
            user () {
                return this.$store.state.user;
            }
        },
        data () {
            return {
                avatar: avatar
            }
        },
        methods: {
            go () {
                this.$router.push({
                    path: '/user-info'
                })
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
