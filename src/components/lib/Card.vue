<template>
    <div @click="handleClick" :class="cardWrapCls">
        <div v-if="title" @click="view" :class="cardTitleCls">
            {{title}}
            <Icon v-if="viewDetails" type="detail" size="0.04rem" position="right" :class="detailsCls" @click="view"/>
        </div>
        <div :class="cardCls" :style="cardStyle">
            <swiper :options="options" v-if="scroll" :class="cardBodyCls">
                <slot></slot>
            </swiper>
            <slot v-if="!scroll"></slot>
            <div v-if="overflow" :class="cardOverflowCls"></div>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    const prefix = 'z13';
    export default {
        components: {
            Icon,
            swiper
        },
        props: {
            overflow: [Boolean],
            height: [String],
            className: [String],
            full: [Boolean],
            title: [String],
            noPadding: [Boolean],
            viewDetails: [String],
            scroll: [Boolean]
        },
        computed: {
            cardWrapCls() {
                return [
                    `${prefix}-card-wrap`, {
                        [`${this.className}`]: this.className,
                        [`${prefix}-card-wrap-scroll`]: this.scroll
                    }
                ]
            },
            cardTitleCls() {
                return [
                    `${prefix}-card-title`
                ]
            },
            cardCls() {
                return [
                    `${prefix}-card`, {
                        [`${prefix}-card-full`]: this.full
                    }
                ]
            },
            cardStyle() {
                let style = {};
                style['height'] = this.height;
                if (this.noPadding) {
                    style['padding'] = 0;
                }
                return style;
            },
            cardOverflowCls() {
                return [
                    `${prefix}-card-overflow`
                ]
            },
            detailsCls () {
                return [
                    `${prefix}-icon-details`
                ]
            },
            cardBodyCls () {
                return [
                    `${prefix}-card-body`
                ]
            }
        },
        methods: {
            handleClick() {
                this.$emit('click')
            },
            view () {
                this.$router.push({
                    path: this.viewDetails
                })
            }
        },
        data () {
            return {
                options: {
                    direction : 'vertical',
                    loop: true,
                    height: 26,
                    spaceBetween: 6,
                    autoplay: {
                        delay: 1000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    }
                }
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl'

    .{$prefix}-card-wrap {
        &-scroll {
            height: 0.28rem;
            overflow: hidden;
            position: relative;
            .{$prefix}-card {
                overflow: hidden;
                background: #fff;
                position: relative;
                margin-top: -100%;
                padding: 0 $padding-small !important;
            }
            .swiper-slide {
                width: 100%;
            }
        }
        .{$prefix}-card-title {
            position: relative;
            border-left: 3px solid $brand-color;
            //border-top: 1px solid $border-color;
            //border-bottom: 1px solid $border-color;
            hairline('top');
            hairline('bottom');
            padding: $padding-base;
            color: $font-second;
            background-color: $white;
            display: flex;
            justify-content: space-between;
        }
        .{$prefix}-card {
            position: relative;
            //border: 1px solid $border-color;
            hairline('all');
            margin: $margin-base;
            background-color: $white;
            padding: $padding-small;
            &-overflow {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: $padding-base * 3;
                background: -webkit-linear-gradient(rgba(255, 255, 255, 0), $white)
            }
            &-full {
                position: relative;
                margin: 0 0 $margin-base 0;
                hairline-remove('all');
                hairline('bottom');
                //border-bottom: 1px solid $border-color;
            }
        }
        .{$prefix}-icon-details {
            margin-right: $padding-base;
            top: $padding-base;
        }
    }

</style>
