<template>
    <LayoutWhite>
        <Navbar arrow-left>大厦服务详情</Navbar>
        <div :class="titleCls">杀虫项目</div>
        <div :class="authorAreaCls">
            <div :class="authorCls">
                物业部
                <span :class="authorTimeCls">10分钟前</span>
            </div>
        </div>
        <div :class="mainCls">
            时间的疯狂拉升放假了，是飞洒的阿萨德法师经历看
        </div>
    </LayoutWhite>
</template>
<script>
    import Navbar from "./lib/Navbar";
    import LayoutWhite from "./lib/LayoutWhite";

    const prefix = 'z13';
    export default {
        components: {LayoutWhite, Navbar},
        computed: {
            titleCls () {
                return [
                    `${prefix}-title`
                ]
            },
            authorAreaCls () {
                return [
                    `${prefix}-author-area`
                ]
            },
            authorCls () {
                return [
                    `${prefix}-author`
                ]
            },
            authorTimeCls () {
                return [
                    `${prefix}-author-time`
                ]
            },
            mainCls () {
                return [
                    `${prefix}-main`
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../styles/var.styl";
    .{$prefix}-title {
        font-size: $font-size-head;
        padding: $padding-base;
    }
    .{$prefix}-author-area {
        .{$prefix}-author {
            &-time {
                color: $font-second;
            }
        }
        padding: 0 $padding-base;
    }
    .{$prefix}-main {
        padding: $padding-base;
    }
</style>