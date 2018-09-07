<template>
    <div :class="buttonWrapCls">
        <button :class="buttonCls" @click="bindClick" :style="buttonStyles">
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
            className: [String, Array],
            color: [String],
            size: [String],
            bottomWhite: [Boolean],
            disabled: [Boolean]
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
                        [`${prefix}-button-bottom-white`]: this.bottomWhite,
                        [`${prefix}-button-disabled`]: this.disabled
                    }
                ]
            },
            buttonStyles() {
                let style = {};
                if (this.width) {
                    style['width'] = this.width;
                }
                if (this.color) {
                    style['background-color'] = this.color;
                }
                return style;
            },

        },
        methods: {
            bindClick () {
                this.$emit('onClick');
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
            &-primary {
                background-color: $brand-color;
                &:active {
                    background-color: $brand-color * 0.95;
                }
            }
            &-disabled {
                color: $white;
                background: $font-second !important;
            }
            &:active {
                background-color: $brand-color * 0.95;
            }
            &-circle {
                border-radius: $padding-base * 3;
            }
            &-default {
                border: 1px solid $border-color;
                color: $font-color;
                background-color: $white;
                &:active {
                    background-color: $white * 0.95;
                }
            }
            &-send-code {
                flex: 1;
                background-color: $brand-color-yellow;
                padding: $padding-small;
                font-size: $font-size-small;
                border-radius: 3px;
                &:active {
                    background-color: $brand-color-yellow * 0.95;
                }
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
                &:active {
                    background-color: $white * 0.95;
                }
            }
        }
    }

</style>
