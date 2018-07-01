<template>
    <div :class="cellCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            cellCls() {
                return [
                    `${prefix}-cell`
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
    }
</style>