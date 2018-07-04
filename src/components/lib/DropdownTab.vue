<template>
    <div :class="dropdownTabCls" @click="setActive">
        <span :class="dropdownTextCls">
            <slot></slot>
        </span>
        <FontIcon :class-name="pullDownCls" size="10px" type="pull-down"/>
        <div @click="menuClick" v-show="active" :class="dropdownCls">
            <FontIcon :class-name="arrowCls" size="16px" type="pull-down"/>
            <FontIcon :class-name="arrowWrapCls" size="16px" type="pull-down"/>
            <div tabindex="0" :class="dropdownItemCls">90m²以下</div>
            <div tabindex="0" :class="dropdownItemCls">90m²-150m²</div>
            <div tabindex="0" :class="dropdownItemCls">150m²-220m²</div>
            <div tabindex="0" :class="dropdownItemCls">220m²-500m²</div>
            <div tabindex="0" :class="dropdownItemCls">500m²-1000m²</div>
            <div tabindex="0" :class="dropdownItemCls">1000m²以上</div>
        </div>
    </div>
</template>
<script>
    import FontIcon from "./FontIcon";
    const prefix = 'z13';
    export default {
        components: {
            FontIcon
        },
        props: {
            active: {
                type: Boolean,
                default: false
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
            },
            dropdownItemCls () {
                return [
                    `${prefix}-dropdown-item`
                ]
            },
            dropdownTextCls() {
                return [
                    `${prefix}-dropdown-text`
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
            &:active {
                background-color: $white * 0.95;
            }
            &:last-child {
                hairline-remove('bottom');
            }

        }
    }

</style>