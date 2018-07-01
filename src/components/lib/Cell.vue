<template>
    <div :class="cellCls" @click="go">
        <slot></slot>
        <Icon top="0.036rem" v-if="isLink" type="arrow-right" position="right"/>
    </div>
</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {Icon},
        props: {
            full: [Boolean],
            withoutBorder: [Boolean],
            padding: [Boolean],
            isLink: [Boolean, String]
        },
        computed: {
            cellCls() {
                return [
                    `${prefix}-cell`, {
                        [`${prefix}-cell-full`]: this.full,
                        [`${prefix}-cell-no-border`]: this.withoutBorder,
                        [`${prefix}-cell-padding`]: this.padding
                    }
                ]
            }
        },
        methods: {
            go() {
               if (this.isLink) {
                   this.$router.push({
                       path: this.isLink
                   })
               }
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
        &-padding {
            padding: $padding-base $padding-base $padding-base 0;
        }
    }
</style>