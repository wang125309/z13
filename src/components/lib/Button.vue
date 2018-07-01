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
            type: [String],
            width: [String],
            full: [Boolean],
            className: [String]
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
                        [`${prefix}-button-${this.type}`]: this.type
                    }
                ]
            },
            buttonStyles() {
                return this.width ? {
                    width: this.width
                } : {}
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
            &:hover {
                background-color: $brand-color * $hover-percent;
            }
            &-circle {
                border-radius: $padding-base * 2 + $font-size-base;
            }
        }
    }

</style>