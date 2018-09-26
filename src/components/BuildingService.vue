<template>
    <LayoutBase>
        <title>大厦服务</title>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <SearchInput></SearchInput>
        <div :class="panelCls">
            <div v-for="i in data" :class="serviceItemCls" @click="go(i.id)">
                <div :class="messageCls">
                    <div :class="itemTitleCls">
                        {{i.title}}
                    </div>
                </div>
                <div :class="subItemCls">
                    {{i.author}}
                    <span :class="timeCls">{{i.create_time}}</span>
                </div>
                <div :class="iconCls" :style="'backgroundImage:url(' + i.image + ')'"></div>
                <!--<Icon :class="iconCls" type="rent-img" size="0.25rem" position="right"/>-->
            </div>

        </div>
    </LayoutBase>
</template>
<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import SearchInput from "./lib/SearchInput";
    import Panel from "./lib/Panel";
    import Icon from "./lib/Icon";
    import request from "../service/service";
    import API from "../service/api";
    import pageResult from "../service/pageResult";

    const prefix = 'z13';
    export default {
        components: {
            Icon,
            Panel,
            SearchInput,
            Navbar,
            LayoutBase
        },
        data () {
            return {
                data: []
            }
        },
        methods: {
            go (id) {
                this.$router.push({
                    'path': '/service-details/' + id
                })
            },
            refresh (page) {
                request(API.news, {
                    type: 'GET'
                }, (data) => {
                    if (page === 1) this.data = [];
                    Object.assign(this.data, pageResult(data.data, page));
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
        },

        mounted () {
            this.refresh(1)
        },
        computed: {
            panelCls () {
                return [
                    `${prefix}-panel`
                ]
            },
            serviceItemCls () {
                return [
                    `${prefix}-service-item`
                ]
            },
            messageCls () {
                return [
                    `${prefix}-message`
                ]
            },
            itemTitleCls () {
                return [
                    `${prefix}-item-title`
                ]
            },
            subItemCls () {
                return [
                    `${prefix}-sub-item`
                ]
            },
            timeCls () {
                return [
                    `${prefix}-time`
                ]
            },
            iconCls () {
                return [
                    `${prefix}-icon`
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .{$prefix}-panel {
        margin-top: $padding-base;
        .{$prefix}-service-item {
            position: relative;
            background-color: $background-body;
            padding: $padding-base;
            height: 0.25rem;
            &:last-item {
                hairline('bottom');
            }
            .{$prefix}-message {
                margin-right: 0.25rem;
                .{$prefix}-item-title {
                    font-size: $font-size-head;
                }
            }
            .{$prefix}-sub-item {
                position: absolute;
                bottom: $padding-base;
            }
            .{$prefix}-time {
                color: $font-second;
            }
        }
        .{$prefix}-icon {
            top: $padding-base;
            margin-right: $padding-base;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            width: 0.25rem;
            height: 0.25rem;
            position: absolute;
            right: 0;
        }
    }
</style>
