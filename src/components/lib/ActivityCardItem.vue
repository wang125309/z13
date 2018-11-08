<template>
    <div :class="activeCardItemCls">
        <div :class="activeCardItemTitleCls">
            <div :class="activeCardItemTitleSpan">{{ title }}</div>
        </div>
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
            noBorder: [Boolean],
            full: [Boolean],
            cut: [Boolean],
            noPadding: [Boolean]
        },
        computed: {
            activeCardItemCls() {
                return [
                    `${prefix}-active-card-item` , {
                        [`${prefix}-active-card-item-full`]: this.full,
                        [`${prefix}-active-card-item-cut`]: this.cut
                    }
                ]
            },
            activeCardItemTitleSpan () {
                return [
                    `${prefix}-active-item-title-span`
                ]
            },
            activeCardItemTitleCls() {
                return [
                    `${prefix}-active-card-item-title`, {
                        [`${prefix}-active-card-item-title-cut`]: this.cut
                    }
                ]
            },
            activeCardItemMessage() {
                return [
                    `${prefix}-active-card-item-message`, {
                        [`${prefix}-active-card-item-message-cut`]: this.cut,
                        [`${prefix}-active-card-item-message-no-padding`]: this.noPadding
                    }
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
    @import '../../styles/hairline.styl';
    .{$prefix}-active-card-item {
        padding: $padding-base 0;
        position: relative;
        img {
            max-width: 100%;
        }
        &-full {
            background-color: $white;

        }
        &-title {
            font-size: $font-size-head;
            padding: $padding-base 0;
            position: relative;
            &-cut {

            }

        }
        &-message {
            hairline('bottom');
            &-cut {
                hairline('top')
                margin: 0;
                padding: $padding-base;
            }
            &-no-padding {
                padding: 0;
            }
            position: relative;
            margin: 0 $margin-base 0 $margin-base;
            padding: $padding-base 0 $padding-base 0;
            //border-bottom: 1px solid $border-color;
        }
        &-cut {
            margin: 0;
            padding: 0;
            margin-top: $margin-base;
        }

    }
    .{$prefix}-active-item-title-span {
        border-left: 3px solid $brand-color;
        padding: 0 $padding-base;
    }
</style>
