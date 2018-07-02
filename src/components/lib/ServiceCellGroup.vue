<template>
    <div :class="serviceCellGroupCls">
        <slot/>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            serviceCellGroupCls() {
                return [
                    `${prefix}-service-cell-group`
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../styles/var.styl";
    @import "../../styles/hairline.styl";
    .{$prefix}-service-cell-group {
        background-color: $white;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        &:last-child {
            border: none;
        }
    }
</style>