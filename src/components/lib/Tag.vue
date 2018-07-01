<template>
    <div :class="tagCls" :style="tagStyle">
        <slot/>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            circle: [Boolean],
            color: [String],
            backgroundColor: [String],
            borderColor: [String],
            className: [String]
        },
        computed: {
            tagCls() {
                return [
                    `${prefix}-tag`, {
                        [`${prefix}-tag-circle`]: this.circle,
                        [`${this.className}`]: this.className
                    }
                ]
            },
            tagStyle() {
                let style = {};
                if (this.borderColor) {
                    style['border-color'] = this.borderColor;
                }
                if (this.color) {
                    style['color'] = this.color;
                }
                if (this.backgroundColor) {
                    style['background-color'] = this.backgroundColor;
                }
                return style;
            }

        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';

    .{$prefix}-tag {
        padding: $padding-tag $padding-small;
        display: inline-block;
        background-color: $white;
        border: 1px solid $brand-color;
        color: $brand-color;
        font-size: $font-size-small;
        &-circle {
            border-radius: $padding-base * 2 + $font-size-small;
        }
    }
</style>