<template>
    <div :class="layoutBaseCls">
        <slot></slot>
    </div>
</template>
<script>
    const prefix = 'z13';
    export default {
        computed: {
            layoutBaseCls() {
                return [`${prefix}-layout-base`]
            }
        },

    }
</script>
<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-layout-base {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $background-default;
    }
</style>