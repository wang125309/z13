<template>
    <div :class="cellGroupCls">
        <slot></slot>
    </div>
</template>
<script>
    const prefix = 'z13';
    export default {
        props: {
            className: [String],
            full: [Boolean],
            noMargin: [Boolean]
        },
        computed: {
            cellGroupCls() {
                return [
                    `${prefix}-cell-group`, {
                        [`${prefix}-cell-group-full`]: this.full,
                        [this.className]: this.className,
                        [`${prefix}-cell-group-no-margin`]: this.noMargin
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-cell-group {
        position: relative;
        margin: $margin-base 0;
        &-full {
            background-color: $white;
        }
        &-no-margin {
            margin: 0;
        }
    }
</style>