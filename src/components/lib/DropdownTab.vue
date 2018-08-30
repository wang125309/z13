<template>
    <div v-on-click-outside="handleClickOutside" :class="dropdownTabCls" @click="setActive">
        <span :class="dropdownTextCls">
            {{title}}
        </span>
        <FontIcon :class-name="pullDownCls" size="10px" type="pull-down"/>
        <div @click="menuClick" v-show="active" :class="dropdownCls">
            <FontIcon :class-name="arrowCls" size="16px" type="pull-down"/>
            <FontIcon :class-name="arrowWrapCls" size="16px" type="pull-down"/>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import FontIcon from "./FontIcon";
    import { mixin as onClickOutside } from 'vue-on-click-outside';

    const prefix = 'z13';
    export default {
        components: {
            FontIcon
        },
        mixins: [onClickOutside],

        props: {
            active: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: '',
                require: true
            }
        },
        computed: {
            dropdownTabCls () {
                return [
                    `${prefix}-dropdown-tab`, {
                        [`${prefix}-dropdown-tab-active`]: this.active
                    }
                ]
            },
            dropdownTextCls () {
                return [
                    `${prefix}-dropdown-text`
                ]
            },
            arrowCls() {
                return [
                    `${prefix}-dropdown-arrow`
                ]
            },
            arrowWrapCls () {
                return [
                    `${prefix}-dropdown-arrow-wrap`
                ]
            },
            pullDownCls () {
                return [
                    `${prefix}-pull-down-icon`
                ]
            },
            dropdownCls () {
                return [
                    `${prefix}-dropdown`
                ]
            }

        },
        methods: {
            setActive () {
                this.$parent.$children.forEach((e) => {
                    if (this !== e) {
                        e.active = false;
                    }
                });
                this.active = !this.active;
            },
            handleClickOutside () {
                this.active = false;
            },
            menuClick (e) {
                e.stopPropagation()
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl';
    .{$prefix}-dropdown-tab {
        padding: $padding-base;
        text-align: center;
        color: $font-second;
        display: flex;
        position: relative;
        align-items: center;
        .{$prefix}-pull-down {
            display: block;
            transform-origin: center;
            transition: all $transition-time ease-in-out;
        }
        &-active {
            .{$prefix}-dropdown-text {
                color: $brand-color;
                white-space: nowrap;
            }
            .{$prefix}-pull-down-icon {
                color: $brand-color;
                transition: all $transition-time ease-in-out;
                transform: rotate(180deg);
            }
        }
    }
    .{$prefix}-dropdown {
        position: absolute !important;
        background-color: $white;
        z-index: 100;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        hairline('all', $border-color, 3px);
        box-shadow: 1px 1px 2px #ececed;
        &-text {
            white-space: nowrap;
        }
        &-arrow {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%) translateY(-65%);
            color: $white;
            z-index: 11;
            &-wrap {
                position: absolute;
                left: 50%;
                top: -1px;
                transform: translateX(-50%) translateY(-65%);
                z-index: 10;
                color: $border-color;
            }
        }
        &-item {
            position: relative;
            hairline('bottom');
            padding: $padding-small;
            white-space: nowrap;
            &:active {
                background-color: $white * 0.95;
            }
            &:last-child {
                hairline-remove('bottom');
            }

        }
    }

</style>
