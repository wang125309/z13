<template>
    <div :class="inputWrapCls">
        <Icon class="iconCls" size="0.1rem" :type="icon"/>
        <input :style="inputStyles" :type="type" :class="inputCls" v-model="model" :placeholder="placeholder"/>
        <slot wx-if="this.$slots"/>
    </div>
</template>

<script>
    import Icon from './Icon'
    const prefix = 'z13';

    export default {
        props: {
            placeholder: [String],
            model: [String],
            icon: [String],
            type: [String]
        },
        components: {
            Icon
        },
        computed: {
            inputWrapCls() {
                return [
                    `${prefix}-input-wrap`
                ]
            },
            iconCls() {
                return [
                    `${prefix}-input-icon`
                ]
            },
            inputCls() {
                return [
                    `${prefix}-input`, {
                        [`$prefix-input-${this.size}`]: this.size
                    }
                ]
            },
            inputStyles() {
                let style = {};
                if (this.icon) {
                    style['margin-left'] = '0.12rem';
                }
                return style;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl'
    .{$prefix}-input-wrap {
        display: flex;
        justify-content: left;
        align-items: center;
        .{$prefix}-input-icon {
            position: absolute;
            left: 0;
        }
        .{$prefix}-input {
            border: none;
            background: $white;
            width: 100%;
            padding: $padding-base 0;
        }
    }
</style>