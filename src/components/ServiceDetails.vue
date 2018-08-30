<template>
    <LayoutWhite>
        <div :class="titleCls">{{data.title}}</div>
        <div :class="authorAreaCls">
            <div :class="authorCls">
                {{data.author}}
                <span :class="authorTimeCls">{{data.create_time}}</span>
            </div>
        </div>
        <div :class="mainCls" v-html="data.content">

        </div>
    </LayoutWhite>
</template>
<script>
    import Navbar from "./lib/Navbar";
    import LayoutWhite from "./lib/LayoutWhite";
    import request from "../service/service";
    import API from "../service/api";

    const prefix = 'z13';
    export default {
        components: {LayoutWhite, Navbar},
        methods: {
            refresh () {
                request(`${API.news}/${this.$route.params.id}`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
        },
        mounted () {
            this.refresh();
        },
        data () {
            return {
                data: {}
            }
        },
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
