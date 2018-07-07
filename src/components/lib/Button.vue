<template>
    <div :class="buttonWrapCls">
        <button :class="buttonCls" :style="buttonStyles">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            circle: [Boolean],
            type: [String],
            width: [String],
            full: [Boolean],
            className: [String],
            color: [String],
            size: [String],
            bottomWhite: [Boolean]
        },
        computed: {
            buttonWrapCls() {
                return [
                    `${prefix}-button-wrap`, {
                        [`${prefix}-button-wrap-full`]: this.full
                    }
                ]
            },
            buttonCls() {
                return [
                    `${prefix}-button`, {
                        [`${prefix}-button-circle`]: this.circle,
                        [`${prefix}-button-${this.type}`]: this.type,
                        [`${this.className}`]: this.className,
                        [`${prefix}-button-${this.size}`]: this.size,
                        [`${prefix}-button-bottom-white`]: this.bottomWhite
                    }
                ]
            },
            buttonStyles() {
                let style = {};
                if (this.width) {
                    style['width'] = this.width;
                }
                return style;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-button-wrap {
        &-full {
            width: 100%;
            margin: $padding-large 0;
            .{$prefix}-button {
                margin: 0 auto;
            }
        }
        .{$prefix}-button {
            display: block;
            position: relative;
            background-color: $brand-color;
            padding: $padding-base 0;
            color: $white;
            border: none;
            text-align: center;
            white-space: nowrap;
            &-circle {
                border-radius: $padding-base * 3;
            }
            &-default {
                border: 1px solid $border-color;
                color: $font-color;
                background-color: $white;
            }
            &-send-code {
                flex: 1;
                background-color: $brand-color-yellow;
                padding: $padding-small;
                font-size: $font-size-small;
                border-radius: 3px;
            }
            &-small-padding {
                padding: $padding-small 0;
            }
            &-bottom-white {
                position: fixed;
                bottom: $padding-base;
                color: $brand-color;
                background-color: $white;
                border: none;
                left: $padding-base;
            }
        }
    }

</style>