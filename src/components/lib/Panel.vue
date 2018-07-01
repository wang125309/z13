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
            withoutBorder: [Boolean]
        },
        computed: {
            panelCls() {
                return [
                    `${prefix}-panel`
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
    }
</style>