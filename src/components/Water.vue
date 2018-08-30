<template>
    <LayoutBase>
        <Panel no-padding>
            <div :class="deliveryItemCls">
                <div :class="deliveryItemIconCls" :style="'background-image:url('+ data.image +')'"></div>
                <div :class="deliveryPanelCls">
                    <a v-on:click.stop="'return false'" :href="'tel:' + data.phone">
                        <Icon :class="callCls" type="call" position="right" size="0.12rem"/>
                    </a>
                    <div :class="deliveryTitleCls">
                        {{data.name}}
                        <span :class="viewNumCls">
                            <Icon type="view-num" size="0.06rem"/>
                            <span :class="viewStringCls">{{data.uv}}</span>
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
                            <span :class="textCls">{{data.location}}</span>
                        </div>
                        <div :class="infoCls">
                            <span :class="labelCls">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</span>
                            <span :class="textCls">{{data.phone}}</span>
                        </div>
                        <div :class="infoCls">
                            <span :class="labelCls">营业时间:</span>
                            <span :class="textCls">{{data.business_time}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
        <ActivityCardItem cut full title="服务说明">
            <div class="description">{{data.description}}</div>
        </ActivityCardItem>
        <ActivityCardItem
            no-padding
            cut
            full
            title="商品规格">
            <Good v-for="i in data.waterInfos"
                  :key="'good' + i.id"
                  :title="i.name"
                  :logo="i.image"
                  :price="i.price"
                  :norm="i.norm"
                  :description="i.description"
            />
        </ActivityCardItem>
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
    import ActivityCardItem from "./lib/ActivityCardItem";
    import API from "../service/api"
    import request from "../service/service"
    import Good from "./lib/Good";

    const prefix = 'z13';

    export default {
        components: {
            Good,
            FontIcon,
            Cell,
            Icon,
            CellGroup,
            Panel,
            SearchInput,
            Navbar,
            LayoutBase,
            ActivityCardItem,
            Tag
        },
        data () {
            return {
                data: {}
            }
        },
        created () {
            this.refresh()
        },
        methods: {
            refresh () {
                request(`${API.watersupplys}/${this.$route.params.id}/`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
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
    .description {
        color: $font-second;
    }
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
</style>
