<template>
    <div :class="panelCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            full: [Boolean],
            withoutBorder: [Boolean],
            className: [String],
            noPadding: [Boolean],
            noBoard: [Boolean]
        },
        computed: {
            panelCls() {
                return [
                    `${prefix}-panel`, {
                        [`${this.className}`]: this.className,
                        [`${prefix}-panel-no-padding`]: this.noPadding,
                        [`${prefix}-panel-no-board`]: this.noBorder
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-panel {
        position: relative;
        padding: $padding-base;
        background-color: $white;
        border-bottom: 1px solid $border-color;
        &-no-padding {
            padding: 0;
        }
        &-no-border {
            border: none;
        }
    }
</style>