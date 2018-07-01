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
            color: [String]
        },
        computed: {
            buttonWrapCls() {
                return [
                    `${prefix}-button-wrap`, {
                        [`${prefix}-button-wrap-full`]: this.full,
                        [this.className]: this.className
                    }
                ]
            },
            buttonCls() {
                return [
                    `${prefix}-button`, {
                        [`${prefix}-button-circle`]: this.circle,
                        [`${prefix}-button-${this.type}`]: this.type
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
            padding: $padding-small 0;
            color: $white;
            border: none;
            text-align: center;
            &-circle {
                border-radius: $padding-base * 2 + $font-size-base;
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
        }
    }

</style>