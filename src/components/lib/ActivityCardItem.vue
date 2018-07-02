<template>
    <div :class="activeCardItemCls">
        <div :class="activeCardItemTitleCls">{{ title }}</div>
        <div :class="activeCardItemMessage" :style="messageStyle">
            <slot/>
        </div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            title: [String],
            noBorder: [Boolean]
        },
        computed: {
            activeCardItemCls() {
                return [
                    `${prefix}-active-card-item`
                ]
            },
            activeCardItemTitleCls() {
                return [
                    `${prefix}-active-card-item-title`
                ]
            },
            activeCardItemMessage() {
                return [
                    `${prefix}-active-card-item-message`
                ]
            },
            messageStyle() {
                let style = {};
                if (this.noBorder) {
                    style['border'] = 0;
                }
                return style;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-active-card-item {
        padding: $padding-base 0 0 0;
        &-title {
            font-size: $font-size-head;
            border-left: 3px solid $brand-color;
            padding: 0 $padding-base;
        }
        &-message {
            margin: 0 $margin-base;
            padding: $padding-base 0 $padding-base 0;
            border-bottom: 1px solid $border-color;
        }
    }
</style>