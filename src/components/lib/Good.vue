<template>
    <div :class="goodsCls">
        <div :class="logoWrapCls" v-if="logo">
            <div :class="logoCls" :style="'background-image:url('+ logo +')'"/>
        </div>
        <div :class="goodsDetailsCls">
            <div :class="goodTitleCls">
                <div :class="goodTitleDetailCls">{{title}}</div>
                <div :class="goodPriceCls">
                    <!--<div :class="goodPriceLogoCls">￥</div>-->
                    <div :class="goodPricePriceCls">{{price}}</div>
                    <div :class="goodPriceNormPriceCls">{{norm}}</div>
                </div>
            </div>
            <div :class="goodDescriptionCls">
                {{description}}
            </div>
        </div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            goodsCls () {
                return `${prefix}-goods`
            },
            logoWrapCls () {
                return `${prefix}-logo-wrap`
            },
            logoCls () {
                return `${prefix}-logo`
            },
            goodTitleCls () {
                return `${prefix}-good-title`
            },
            goodTitleDetailCls () {
                return `${prefix}-good-title-detail`
            },
            goodPriceCls () {
                return `${prefix}-good-price`
            },
            goodPricePriceCls () {
                return `${prefix}-good-price-price`
            },
            goodPriceLogoCls () {
                return `${prefix}-good-price-logo`
            },
            goodPriceNormPriceCls () {
                return `${prefix}-good-price-norm-price`
            },
            goodDescriptionCls () {
                return `${prefix}-good-description`
            },
            goodsDetailsCls () {
                return `${prefix}-good-details`
            }
        },
        data () {
            return {

            }
        },
        props: {
            logo: [String],
            title: [String],
            description: [String],
            price: [String],
            norm: [String]
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl';
    .{$prefix}-goods {
        position: relative;
        display: flex;
        hairline('bottom');
        padding: $padding-base 0;
        margin-left: $margin-base;
        font-size: $font-size-base;
        .{$prefix}-good-details {
            flex: 1;
            padding-right: $padding-base;
        }
        &:last-child {
            hairline-remove('bottom')
        }
        .{$prefix}-logo-wrap {
            position: relative;
            width: 0.2rem;
            height: 0.2rem;
            margin-right: $margin-base;
            .{$prefix}-logo {
                setBackgroundImage('');
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #ccc;
            }
        }
        .{$prefix}-good-title {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: baseline;
            &-detail {
                font-size: $font-size-head;
            }
        }
        .{$prefix}-good-price {
            display: flex;
            align-items: baseline;
            &-logo {
                color: $font-second;
                font-size: $font-size-head;
            }
            &-price {
                color: $brand-color-yellow;
                font-size: $font-size-head-large;
            }
            &-norm-price {
                color: $brand-color-yellow;
                font-size: $font-size-head;
            }
        }
        .{$prefix}-good-description {
            margin-top: $margin-base;
            color: $font-second;
        }
    }
</style>
