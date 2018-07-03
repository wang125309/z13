<template>
    <div @click="handleClick" :class="cardWrapCls">
        <div v-if="title" :class="cardTitleCls">{{title}}</div>
        <div :class="cardCls" :style="cardStyle">
            <slot></slot>
            <div v-if="overflow" :class="cardOverflowCls"/>
        </div>
    </div>

</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            overflow: [Boolean],
            height: [String],
            className: [String],
            full: [Boolean],
            title: [String],
            noPadding: [Boolean]
        },
        computed: {
            cardWrapCls() {
                return [
                    `${prefix}-card-wrap`, {
                        [`${this.className}`]: this.className
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
            }
        },
        methods: {
            handleClick() {
                this.$emit('click')
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl'
    .{$prefix}-card-wrap {
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
    }

</style>