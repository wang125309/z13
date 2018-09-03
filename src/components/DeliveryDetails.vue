<template>
    <LayoutBase>
        <Navbar v-show="false" arrow-left>餐饮服务</Navbar>
        <Panel no-padding>
            <div :class="deliveryItemCls">
                <div :class="deliveryItemIconCls" :style="'background-image:url('+ data.image +')'"/>
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
                    <div :class="tagPanelCls">
                        <Tag v-if="get_business_type(data.business_type, '1')" :className="greenCls">早餐</Tag>
                        <Tag v-if="get_business_type(data.business_type, '2')" :className="yellowCls">午餐</Tag>
                        <Tag v-if="get_business_type(data.business_type, '3')" :className="blueCls">晚餐</Tag>
                    </div>
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
        <div :class="specialFoodsPanelCls" v-for="i in data.foodTypes" :key="'foodType' + i.id">
            <div :class="specialFoodsPanelTitle">
                <div :class="specialFoodsPanelTitleInnerCls">{{i.name}}菜品</div>
                <Icon :class="specialFoodsPanelTitleArrowRightCls" position="right" type="up-arrow" size="0.04rem"/>
            </div>
            <div :class="specialFoodCls" v-for="j in i.foodInfos" :key="'food'+i.id+'_'+j.id">
                <div :class="specialFoodImgCls" :style="'background-image:url(' + j.image + ')'">
                </div>
                <div :class="specialFoodInnerCls">
                    <div :class="specialFoodTitleCls">
                        <div :class="specialFoodTextCls">{{j.name}}</div>
                        <div :class="specialFoodTitleCheckCls">
                            <div :class="specialFoodTitleCheckUpCls">
                                <Icon @click="praise" v-if="!i.isPraise" size="0.04rem" type="food-like"/>
                                <Icon v-else size="0.04rem" type="food-liked"/>
                                <div :class="specialFoodTitleCheckUpTextCls">{{j.praise}}</div>
                            </div>
                            <!--<div :class="specialFoodTitleCheckDownCls">-->
                                <!--<Icon v-if="!i.isPraise" size="0.04rem" type="food-dislike"/>-->
                                <!--<Icon v-else size="0.04rem" type="food-disliked"/>-->
                                <!--<div :class="specialFoodTitleCheckDownTextCls">{{j.praise}}</div>-->
                            <!--</div>-->
                        </div>
                    </div>
                    <div :class="specialFoodTextPriceCls">
                        <div :class="specialFoodTextPriceIconCls">￥</div>
                        <div :class="specialFoodTextPricePriceCls">{{j.price}}</div>
                        <div :class="specialFoodTextPriceTailCls">元</div>
                    </div>
                </div>
            </div>
        </div>

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
            ActivityCardItem,
            Tag
        },
        data () {
            return {
                data: {
                    business_type: ''
                }
            }
        },
        mounted () {
            this.refresh()
        },
        methods: {
            get_business_type (business_type, type) {
                let business_type_array = business_type.split('-');
                for (let i of business_type_array) {
                    if (i === type) {
                        return true;
                    }
                }
                return false;
            },
            refresh () {
                request(`${API.foodshops}/${this.$route.params.id}/`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                    this.data.foodTypes = this.data.foodTypes.filter((data) => {
                        if (data.foodInfos.length) {
                            return data
                        }
                    })
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            },
            praise () {
                request(`${API.foodshops}/food/${this.$route.params.id}/praise`, {
                    type: 'PUT'
                }, (data) => {
                    this.refresh();
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
        },
        computed: {
            specialFoodsPanelCls () {
                return [
                    `${prefix}-special-foods-panel`
                ]
            },
            specialFoodsPanelTitle () {
                return [
                    `${prefix}-special-foods-panel__title`
                ]

            },
            specialFoodsPanelTitleInnerCls () {
                return [
                    `${prefix}-special-foods-panel__title__inner`
                ]

            },
            specialFoodsPanelTitleArrowRightCls () {
                return [
                    `${prefix}-special-foods-panel__title__inner__arrow_right`
                ]

            },
            specialFoodCls () {
                return [
                    `${prefix}-special-food`
                ]
            },
            specialFoodImgCls () {
                return [
                    `${prefix}-special-food__img`
                ]
            },
            specialFoodInnerCls () {
                return [
                    `${prefix}-special-food__inner`
                ]
            },
            specialFoodTitleCls () {

                return [
                    `${prefix}-special-food__title`
                ]
            },
            specialFoodTextCls () {

                return [
                    `${prefix}-special-food__text`
                ]
            },
            specialFoodTitleCheckCls () {

                return [
                    `${prefix}-special-food__title_check`
                ]
            },
            specialFoodTitleCheckUpCls () {
                return [
                    `${prefix}-special-food__title_check__up`
                ]

            },
            specialFoodTitleCheckDownCls () {
                return [
                    `${prefix}-special-food__title_check__down`
                ]
            },
            specialFoodTextPriceCls () {
                return [
                    `${prefix}-special-food__text__price`
                ]
            },
            specialFoodTextPriceIconCls () {

                return [
                    `${prefix}-special-food__text__price__icon`
                ]
            },
            specialFoodTextPricePriceCls () {
                return [
                    `${prefix}-special-food__text__price__price`
                ]
            },
            specialFoodTextPriceTailCls () {
                return [
                    `${prefix}-special-food__text__price__tail`
                ]
            },
            specialFoodTitleCheckUpTextCls () {
                return [
                    `${prefix}-special-food__title_check__up__text`
                ]
            },
            specialFoodTitleCheckDownTextCls () {
                return [
                    `${prefix}-special-food__title_check__down__text`
                ]
            },
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
        margin-top: $margin-base;
    }
    .{$prefix}-info {

    }
    .{$prefix}-tag-panel {
        padding-top: $padding-base;
    }
    .{$prefix}-label {
        color: $font-second;
    }
    .{$prefix}-call {
        top: $padding-base * 2;
        margin-right: $padding-base;
    }
    .{$prefix}-special-foods-panel {
        margin-top: $margin-base;
        background-color: $white;
        &__title {
            position: relative;
            display: flex;
            justify-content: space-between;
            padding: $margin-base 0;
            hairline('bottom');
            &__inner {
                padding: 0 $padding-base;
                border-left: 3px solid $brand-color;
                &__arrow_right {
                    padding-right: $padding-base;
                }
            }
        }
    }
    .{$prefix}-special-food {
        padding: $padding-base;
        display: flex;
        &__img {
            width: 0.24rem;
            height: 0.24rem;
            background-color: #ccc;
            background-size: cover;
            background-repeat: no-repeat;
            bakkground-position: center;
        }
        &__inner {
            flex: auto;
            padding-left: $padding-base;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__title {
            display: flex;
            justify-content: space-between;
        }
        &__text {
            &__price {
                display: flex;
                align-items: baseline;
                &__icon {
                    color: $font-second;
                }
                &__price {
                    font-size: $font-size-head;
                    color: $brand-color-yellow;
                }
                &__tail {
                    color: $brand-color-yellow;
                }
            }
        }
        &__title_check {
            display: flex;
            justify-items: center;
            &__up {
                display: flex;
                justify-items: center;
                &__text {
                    padding-left: $padding-small;
                }
            }
            &__down {
                display: flex;
                justify-items: center;
                padding-left: $padding-small;
                &__text {
                    padding-left: $padding-small;
                }
            }
        }

    }
</style>
