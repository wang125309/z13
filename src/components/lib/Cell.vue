<template>
    <div :class="cellCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            full: [Boolean],
            withoutBorder: [Boolean]
        },
        computed: {
            cellCls() {
                return [
                    `${prefix}-cell`, {
                        [`${prefix}-cell-full`]: this.full,
                        [`${prefix}-cell-no-border`]: this.withoutBorder
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-cell {
        position: relative;
        margin: 0 $margin-base;
        border-bottom: 1px solid $border-color;
        &-full {
            margin: 0  0 0 $margin-base;
        }
        &-no-border {
            border: none;
        }
    }
</style>