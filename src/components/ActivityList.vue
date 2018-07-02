<template>
    <LayoutBase>
        <Navbar arrow-left>社区活动</Navbar>
        <SearchInput/>
        <Tabs>
            <TabsCell @onClick="setActive(0)" :active="getActive(0)">全部</TabsCell>
            <TabsCell @onClick="setActive(1)" :active="getActive(1)">进行中</TabsCell>
            <TabsCell @onClick="setActive(2)" :active="getActive(2)">已结束</TabsCell>
        </Tabs>
        <div class="empty">
            <Icon type="no-activity" size="0.25rem"/>
        </div>
        <TabBar :active="2"/>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import SearchInput from "./lib/SearchInput";
    import Icon from "./lib/Icon";
    import TabBar from "./lib/TabBar";
    import Tabs from "./lib/Tabs";
    import TabsCell from "./lib/TabsCell";

    export default {
        name: 'Login',
        components: {
            TabsCell,
            Tabs,
            TabBar,
            Icon,
            SearchInput,
            Navbar,
            LayoutBase
        },
        data () {
            return {
                active: 0
            }
        },
        methods: {
            getActive(n) {
                return n === this.active
            },
            setActive(n) {
                this.active = n;

            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .empty {
        margin-top: $margin-large * 5;
    }
</style>
