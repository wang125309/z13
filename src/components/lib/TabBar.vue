<template>
    <div>
        <div :class="tabBarPlaceholderCls"></div>
        <div :class="tabBarCls">
            <TabBarCell :active="getActive(0)" url="/" icon="home">首页</TabBarCell>
            <TabBarCell :active="getActive(1)" url="/" icon="service">贴心服务</TabBarCell>
            <TabBarCell :active="getActive(2)" url="/" icon="activity">社区活动</TabBarCell>
            <TabBarCell :active="getActive(3)" url="/personal-info" icon="my">我的</TabBarCell>
        </div>
    </div>
</template>

<script>
    import TabBarCell from './TabBarCell'
    const prefix = 'z13';
    export default {
        props: {
            active: [Number]
        },
        components: {
            TabBarCell
        },
        computed: {
            tabBarPlaceholderCls() {
                return [
                    `${prefix}-tab-bar-placeholder`
                ]
            },
            tabBarCls() {
                return [
                    `${prefix}-tab-bar`
                ]
            }
        },
        methods: {
            getActive(n) {
                return n === this.active
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl'

    .{$prefix}-tab-bar {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid $border-color;
        background-color: $white;
        &-placeholder {
            height: $padding-small + $padding-base * 2+ $icon-size-large;
        }
    }

</style>