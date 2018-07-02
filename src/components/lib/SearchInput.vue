<template>
    <div :class="searchInputWrapCls">
        <Icon  size="0.04rem"  :class-name="searchInputIconCls" position="left" type="search"/>
        <input :class="searchInputCls" type="text"/>
    </div>
</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {Icon},
        computed: {
            searchInputWrapCls() {
                return [
                    `${prefix}-search-input-wrap`
                ]
            },
            searchInputCls() {
                return [
                    `${prefix}-search-input`
                ]
            },
            searchInputIconCls() {
                return [
                    `${prefix}-search-input-icon`
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';

    .{$prefix}-search-input-wrap {
        padding: $padding-base;
        background-color: $white;
        position: relative;
        display: flex;
        .{$prefix}-search-input {
            border-radius: $padding-base * 2;
            padding: $padding-small $padding-base*2 + $padding-small;
            display: block;
            width: 100%;
            border: 0;
            background-color: $background-default;
            &-icon {
                margin: $padding-small $padding-small+$margin-base;
            }
        }
    }
</style>