<template>
    <div :class="searchInputWrapCls">
        <form :class="searchFormCls" action="javasript:;" type="search">
            <Icon size="0.04rem" :class-name="searchInputIconCls" position="left" type="search"/>
            <input @input="inputChange" @keypress="enter" v-bind:value="value" :class="searchInputCls" type="text"/>
        </form>
    </div>
</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {
            Icon
        },
        watch: {
            model () {

            }
        },
        methods: {
            enter ($evt) {
                if ($evt.charCode === 13) {
                    this.$emit('search')
                }
            },
            inputChange ($evt) {
                this.$emit('input', $evt.target.value)
            }
        },
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
            },
            searchFormCls () {
                return [
                    `${prefix}-search-form`
                ]
            }
        },
        props: {
            value: [String]
        },
        data() {
            return {

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
            flex: 1;
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
    .{$prefix}-search-form {
        display: flex;
        flex: 1;
    }
</style>
