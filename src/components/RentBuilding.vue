<template>
    <LayoutBase>
        <Navbar arrow-left>可租单元</Navbar>
        <Tabs>
            <DropdownTab title="面积范围">
                <div tabindex="0" :class="dropdownItemCls">100m²以下</div>
                <div tabindex="0" :class="dropdownItemCls">100m²以上</div>
                <div tabindex="0" :class="dropdownItemCls">100m²-200m²</div>
            </DropdownTab>
            <DropdownTab title="容纳工位"></DropdownTab>
            <DropdownTab title="楼层"></DropdownTab>
        </Tabs>
        <div :class="rentBuildingAreaCls">
            <div v-for="i in data" :key="'rent' + i.id" @click="go(i.id)" :class="rentBuildingItemCls">
                <Icon :class="rentImgCls" type="rent-img" position="left" size="0.25rem"/>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls">{{i.area}} | {{i.location}}</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">{{i.capacity}}</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">{{i.face}}</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">{{i.deck}}</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">{{i.price}}元/m²·天</div>
                        <div :class="subPriceCls">约{{i.price*30}}元月</div>
                    </div>
                </div>
            </div>
        </div>
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
    const prefix = 'z13';

    export default {
        components: {
            Icon,
            DropdownTab,
            Tabs,
            Navbar,
            LayoutBase
        },
        computed: {
            rentBuildingAreaCls () {
                return [
                    `${prefix}-rent-building-area`
                ]
            },
            rentImgCls () {
                return [
                    `${prefix}-rent-img`
                ]
            },
            rentBuildingItemCls () {
                return [
                    `${prefix}-rent-building-item`
                ]
            },
            rentBuildingItemInfoCls () {
                return [
                    `${prefix}-rent-building-item-info`
                ]
            },
            titleCls () {
                return [
                    `${prefix}-title`
                ]
            },
            descAreaCls () {
                return [
                    `${prefix}-desc-area`
                ]
            },
            descCls () {
                return [
                    `${prefix}-desc`
                ]
            },
            subTitleCls () {
                return [
                    `${prefix}-sub-title`
                ]
            },
            detailsCls () {
                return [
                    `${prefix}-details`
                ]
            },
            priceCls () {
                return [
                    `${prefix}-price`
                ]
            },
            mainPriceCls () {
                return [
                    `${prefix}-main-price`
                ]
            },
            subPriceCls () {
                return [
                    `${prefix}-sub-price`
                ]
            },
            viewMoreCls () {
                return [
                    `${prefix}-view-more`
                ]
            },
            viewMoreIconCls () {
                return [
                    `${prefix}-view-more-icon`
                ]
            },
            dropdownItemCls () {
                return [
                    `${prefix}-dropdown-item`
                ]
            },
            dropdownTextCls() {
                return [
                    `${prefix}-dropdown-text`
                ]
            }
        },
        methods: {
            refresh (page) {
                request(API.rentableunits, {
                    type: 'GET'
                }, (data) => {
                    if (page === 1) this.data = [];
                    Object.assign(this.data, pageResult(data.data, page));
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            },
            go (id) {
                this.$router.push({
                    path: '/rent-building-details/' + id
                })
            }
        },
        data () {
            return {
                data: []
            }
        },
        created () {
            this.refresh(1);
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .{$prefix}-rent-building-area {
        padding: $padding-base 0;
        .{$prefix}-view-more {
            padding: $padding-small;
            color: $font-second;
            background-color: $white;
            vertical-align: middle;
            display: flex;
            justify-content: center;
            align-items: center;
            &-icon {
                margin: 0 0.01rem;
            }
        }

        .{$prefix}-rent-building-item {
            position: relative;
            padding: $padding-small;
            background-color: $white;

            hairline('bottom');
            &:last-child {
                hairline-remove('bottom');
            }

            .{$prefix}-rent-img {
                left: $padding-small !important;
            }
            &-info {
                margin-left: 0.25rem;
                min-height: 0.25rem;
                padding-left: $padding-small;
                .{$prefix}-title {
                    font-size: $font-size-head;
                }
                .{$prefix}-desc-area {
                    position: absolute;
                    bottom: $padding-small;
                    .{$prefix}-desc {
                        .{$prefix}-sub-title {
                            color: $font-second;
                        }
                        .{$prefix}-details {
                        }
                    }
                }
                .{$prefix}-price {
                    position: absolute;
                    right: $padding-small;
                    top: $padding-small;
                    .{$prefix}-main-price {
                        color: #E8450D;
                        font-size: $font-size-head;
                        padding-bottom: $padding-small;
                        text-align: right;
                    }
                    .{$prefix}-sub-price {
                        color: $font-second;
                        text-align: right;
                    }
                }
            }
        }
        .{$prefix}-dropdown {
            &-item {
                position: relative;
                hairline('bottom');
                padding: $padding-small;
                &:active {
                    background-color: $white * 0.95;
                }
                &:last-child {
                    hairline-remove('bottom');
                }
            }
        }
    }
</style>
