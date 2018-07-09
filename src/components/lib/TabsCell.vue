<template>
    <div :class="tabsCellCls" @click="tab">
        <slot></slot>
    </div>
</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {Icon},
        props: {
            active: [Boolean]
        },
        computed: {
            tabsCellCls() {
                return [
                    `${prefix}-tabs-cell`, {
                        [`${prefix}-tabs-cell-active`]: this.active
                    }
                ]
            }
        },
        methods: {
            tab() {
                this.$emit('onClick')
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-tabs-cell {
        position: relative;
        padding: $padding-base 0;
        &-active {
            border-bottom: 3px solid $brand-color;
            color: $brand-color;
        }
    }
</style>