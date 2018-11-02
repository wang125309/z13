<template>
    <LayoutBase>
        <title>可租单元</title>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <Banner :style="'background-image:url(' + data.image + ')'"/>
        <div :class="rentPanelCls">
            <div :class="rentPanelCellCls">
                <div :class="rentPanelCellTitleCls">建筑面积</div>
                <div :class="rentPanelCellTextCls">{{data.area}}m²</div>
            </div>
            <div :class="rentPanelCellCls">
                <div :class="rentPanelCellTitleCls">可容纳工位</div>
                <div :class="rentPanelCellTextCls">{{data.capacity}}</div>
            </div>
            <div :class="rentPanelCellCls">
                <div :class="rentPanelCellTitleCls">租金</div>
                <div :class="rentPanelCellTextPriceCls">{{data.price}}</div>
            </div>
        </div>
        <div :class="rentSubPanelCls">
            <div :class="rentSubPanelLineCls">
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        所在楼层：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.location}}层
                    </div>
                </div>
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        所在单元：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.unit}}单元
                    </div>
                </div>

            </div>
            <div :class="rentSubPanelLineCls">
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        付费方式：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.pay_type}}
                    </div>
                </div>
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        单元朝向：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.face}}
                    </div>
                </div>

            </div>
            <div :class="rentSubPanelLineCls">
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        看房时间：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.look_time}}
                    </div>
                </div>
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        装修情况：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.deck}}
                    </div>
                </div>

            </div>
            <div :class="rentSubPanelLineCls">
                <div :class="rentSubPanelLineCellCls">
                    <div :class="rentSubPanelLineCellLeftCls">
                        可租时间：
                    </div>
                    <div :class="rentSubPanelLineCellRightCls">
                        {{data.rent_time}}
                    </div>
                </div>
                <div :class="rentSubPanelLineCellCls">
                </div>
            </div>
        </div>
        <ActivityCardItem cut full title="特色介绍">
            <div :class="ruleDescriptionCls" v-html="data.description"></div>
        </ActivityCardItem>
        <ActivityCardItem no-padding cut full title="联系信息">
            <div :class="contactCellCls">
                <div>联系人</div>
                <div>{{data.contact}}</div>
            </div>
            <div :class="contactCellCls">
                <div>联系电话</div>
                <div>{{data.phone}}</div>
            </div>
        </ActivityCardItem>
        <a :class="phoneCls" :href="'tel:' + data.phone">
            <Button type="circle" full width="92%">联系{{data.contact}}</Button>
        </a>
    </LayoutBase>
</template>

<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import Tabs from "./lib/Tabs";
    import DropdownTab from "./lib/DropdownTab";
    import Icon from "./lib/Icon";
    import request from "../service/service";
    import API from "../service/api";
    import pageResult from "../service/pageResult";
    import Banner from "./lib/Banner";
    import ActivityCardItem from "./lib/ActivityCardItem";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Button from "./lib/Button";
    const prefix = 'z13';

    export default {
        components: {
            Button,
            Cell,
            CellGroup,
            ActivityCardItem,
            Banner,
            Icon,
            DropdownTab,
            Tabs,
            Navbar,
            LayoutBase
        },
        computed: {
            rentPanelCls () {
                return [
                    `${prefix}-rent-panel`
                ]
            },
            rentPanelCellCls () {
                return [
                    `${prefix}-rent-panel__cell`
                ]
            },
            rentPanelCellTitleCls () {
                return [
                    `${prefix}-rent-panel__cell__title`
                ]
            },
            rentPanelCellTextCls () {
                return [
                    `${prefix}-rent-panel__cell__text`
                ]
            },
            rentPanelCellTextPriceCls () {
                return [
                    `${prefix}-rent-panel__cell__text__price`
                ]
            },
            rentSubPanelCls () {
                return [
                    `${prefix}-rent-sub-panel`
                ]
            },
            rentSubPanelLineCls () {
                return [
                    `${prefix}-rent-sub-panel__line`
                ]
            },
            rentSubPanelLineCellCls () {
                return [
                    `${prefix}-rent-sub-panel__line__cell`
                ]
            },
            rentSubPanelLineCellLeftCls () {
                return [
                    `${prefix}-rent-sub-panel__line__cell__left`
                ]
            },
            rentSubPanelLineCellRightCls () {
                return [
                    `${prefix}-rent-sub-panel__line__cell__right`
                ]
            },
            ruleDescriptionCls () {
                return [
                    `${prefix}-rule-description`
                ]
            },
            contactCellCls () {
                return [
                    `${prefix}-contact-cell`
                ]
            },
            phoneCls () {
                return [
                    `${prefix}-phone`
                ]
            }
        },
        methods: {
            refresh () {
                request(`${API.rentableunits}/${this.$route.params.id}/`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
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
            this.refresh();
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';

    .{$prefix}-rent-panel {
        position: relative;
        display: flex;
        background-color: $background-body;
        hairline('bottom');
        &__cell {
            position: relative;
            padding: 0 $padding-base;
            margin: $margin-base 0;
            hairline('right')
            &:last-child {
                hairline-remove('right')
            }
            flex: 1;
            &__title {
                color: $font-second;
                font-size: $font-size-base;
            }
            &__text {
                font-size: $font-size-base;
                margin-top: $margin-base;
                &__price {
                    margin-top: $margin-base;
                    font-size: $font-size-base;
                    color: $brand-color-yellow;
                }
            }
        }
    }
    .{$prefix}-rent-sub-panel {
        background-color: $background-body;
        padding: $padding-small 0;
        &__line {
            display: flex;
            padding: $padding-small $padding-base 0 $padding-base;
            &:last-child {
                padding-bottom: $padding-small;
            }
            &__cell {
                flex: 1;
                display: flex;
                &__left {
                    flex: 1;
                    text-align: right;
                    color: $font-second;
                }
                &__right {
                    flex: 1;
                    text-align: left;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 0.3rem;
                }
            }
        }
    }
    .{$prefix}-rule-description {
        color: $font-second;
    }
    .{$prefix}-contact-cell {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: $padding-base $padding-base $padding-base 0;
        margin-left: $margin-base;
        hairline('bottom');
        &:last-child {
            hairline-remove('bottom');
        }
    }
    .{$prefix}-phone {
        text-decoration: none;
    }
</style>
