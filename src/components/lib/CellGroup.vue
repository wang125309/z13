<template>
    <div :class="cellGroupCls">
        <slot></slot>
    </div>
</template>
<script>
    const prefix = 'z13';
    export default {
        props: {
            className: [String]
        },
        computed: {
            cellGroupCls() {
                return [
                    `${prefix}-cell-group`, {
                        [this.className]: this.className
                    }
                ]
            }
        }
    }
</script>
<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-cell-group {
        position: relative;
        margin: $margin-base 0;
    }
</style>