<template>
    <div :class="scrollableCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            scrollableCls() {
                return [
                    `${prefix}-scrollable`
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-scrollable {
        overflow-y: scroll;
    }
</style>