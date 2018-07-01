<template>
    <div :class="layoutWhiteCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            layoutWhiteCls() {
                return [`${prefix}-layout-white`]
            }
        },
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-layout-white {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $background-body;
    }
</style>