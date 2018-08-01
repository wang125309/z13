<template>
    <LayoutBase>
        <Navbar arrow-left>送水服务</Navbar>
        <SearchInput></SearchInput>
        <Panel no-padding>
            <div v-for="i in data" v-bind:key="'delivery' + i.id" @click="itemClick(i.id)" :class="deliveryItemCls">
                <div :class="deliveryItemIconCls"
                     :style="'background-image:url('+ i.image +')'"/>
                <div :class="deliveryPanelCls">
                    <a v-on:click.stop="'return false'" :href="'tel:' + i.phone">
                        <Icon :class="callCls" type="call" position="right" size="0.12rem"/>
                    </a>
                    <div :class="deliveryTitleCls">
                        {{i.name}}
                        <span :class="viewNumCls">
                            <Icon type="view-num" size="0.06rem"/>
                            <span :class="viewStringCls">{{i.uv}}</span>
                        </span>
                    </div>
                    <!--<div :class="starPanelCls">-->
                        <!--<FontIcon :className="starCls" type="Star"/>-->
                        <!--<FontIcon :className="starCls" type="Star"/>-->
                        <!--<FontIcon :className="starCls" type="Star"/>-->
                        <!--<FontIcon :className="unstarCls" type="Star"/>-->
                        <!--<FontIcon :className="unstarCls" type="Star"/>-->
                    <!--</div>-->
                    <div :class="infoPanelCls">
                        <div :class="infoCls">
                            <span :class="labelCls">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点:</span>
                            <span :class="textCls">{{i.location}}</span>
                        </div>
                        <div :class="infoCls">
                            <span :class="labelCls">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</span>
                            <span :class="textCls">{{i.phone}}</span>
                        </div>
                        <div :class="infoCls">
                            <span :class="labelCls">营业时间:</span>
                            <span :class="textCls">{{i.business_time}}</span>
                        </div>
                    </div>
                </div>
            </div>

        </Panel>
    </LayoutBase>
</template>
<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import SearchInput from "./lib/SearchInput";
    import Panel from "./lib/Panel";
    import CellGroup from "./lib/CellGroup";
    import Icon from "./lib/Icon";
    import Cell from "./lib/Cell";
    import FontIcon from "./lib/FontIcon";
    import Tag from "./lib/Tag";
    import API from "../service/api"
    import request from "../service/service"
    import pageResult from "../service/pageResult";

    const prefix = 'z13';

    export default {
        components: {
            FontIcon,
            Cell,
            Icon,
            CellGroup,
            Panel,
            SearchInput,
            Navbar,
            LayoutBase,
            Tag
        },
        methods: {
            itemClick (id) {
                this.$router.push({
                    path: '/water/' + id
                })
            },
            refresh (page) {
                request(API.watersupplys, {
                    type: 'GET'
                }, (data) => {
                    if (page === 1) this.data = [];
                    Object.assign(this.data, pageResult(data.data, page));
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
        },
        data () {
            return {
                data: []
            }
        },
        created () {
            this.refresh(1)
        },
        computed: {
            deliveryItemCls () {
                return [
                    `${prefix}-delivery-item`
                ]
            },
            deliveryPanelCls () {
                return [
                    `${prefix}-delivery-panel`
                ]
            },
            deliveryTitleCls () {
                return [
                    `${prefix}-delivery-title`
                ]
            },
            viewNumCls () {
                return [
                    `${prefix}-view-num`
                ]
            },
            deliveryItemIconCls () {
                return [
                    `${prefix}-delivery-item-icon`
                ]
            },
            viewStringCls () {
                return [
                    `${prefix}-view-string`
                ]
            },
            panelCls () {
                return [
                    `${prefix}-panel`
                ]
            },
            starPanelCls () {
                return [
                    `${prefix}-star-panel`
                ]
            },
            unstarCls () {
                return [
                    `${prefix}-unstar`
                ]
            },
            starCls () {
                return [
                    `${prefix}-star`
                ]
            },
            tagPanelCls () {
                return [
                    `${prefix}-tag-panel`
                ]
            },
            tagCls () {
                return [
                    `${prefix}-tag`
                ]
            },
            greenCls () {
                return [
                    `${prefix}-tag-green`
                ]
            },
            yellowCls () {
                return [
                    `${prefix}-tag-yellow`
                ]
            },
            blueCls () {
                return [
                    `${prefix}-tag-blue`
                ]
            },
            infoCls () {
                return [
                    `${prefix}-info`
                ]
            },
            labelCls () {
                return [
                    `${prefix}-label`
                ]
            },
            textCls () {
                return [
                    `${prefix}-text`
                ]
            },
            infoPanelCls () {
                return [
                    `${prefix}-info-panel`
                ]
            },
            callCls () {
                return [
                    `${prefix}-call`
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/iconfont.css';
    @import '../styles/hairline.styl';
    .{$prefix}-delivery-item {
        position: relative;
        padding: $padding-base;
        hairline('top');
        &-icon {
            position: absolute;
            width: 0.21rem;
            height: 0.21rem;
            background-color: #dcdcdc;
            background-size: cover;
            background-repeat: no-repeat;
            left: initial !important;
        }
        &:last-child {
            hairline('bottom')
        }
    }
    .{$prefix}-delivery-panel {
        margin-left: 0.21rem + $margin-base;
        min-height: 0.21rem;
        align-items: flex-start;
    }
    .{$prefix}-delivery-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: $font-size-base;
        width: 100%;
        .{$prefix}-view-num {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: $margin-base;
        }
    }
    .{$prefix}-view-string {
        margin-left: 0.01rem;
        color: $font-second;
        font-size: $font-size-base;
    }
    .{$prefix}-star-panel {
        padding: $padding-small 0;
        font-size: $font-size-small;
    }
    .{$prefix}-star {
        color: $brand-color-yellow;
    }
    .{$prefix}-unstar {
        color: $font-second;
    }
    .{$prefix}-panel {
        margin-top: $margin-base;
        background-color: $white;
    }
    .{$prefix}-tag-blue {
        color: #1D6FE1 !important;
        background-color: #E5F3FD !important;
    }
    .{$prefix}-tag-yellow {
        color: #F88200 !important;
        background-color: #FEF3E2 !important;
    }
    .{$prefix}-tag-green {
        color: #019B66 !important;
        background-color: #DFF3EC !important;
    }
    .{$prefix}-info-panel {
        margin-top: 0.02rem;
        padding-right: 0.14rem;
    }
    .{$prefix}-info {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .{$prefix}-label {
        color: $font-second;
    }
    .{$prefix}-call {
        top: 50%;
        transform: translateY(-50%);
        margin-right: $padding-base;
    }
    .{$prefix}-text {

    }
</style>