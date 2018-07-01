<template>
    <div :class="inputWrapCls">
        <Icon class="iconCls" size="0.1rem" :type="icon"/>
        <input :style="inputStyles" :type="inputType" :class="inputCls" :placeholder="placeholder"/>
        <Icon @click="showEye" position="right" v-if="withEye" v-show="!eyeVisible" size="0.1rem" type="eye"/>
        <Icon @click="showEye" position="right" v-if="withEye" v-show="eyeVisible" size="0.1rem" type="eye-close"/>
        <slot wx-if="this.$slots"/>
    </div>
</template>

<script>
    import Icon from './Icon'
    const prefix = 'z13';

    export default {
        data() {
            return {
                eyeVisible: false,
                inputType: this.type
            }
        },
        props: {
            placeholder: [String],
            icon: [String],
            type: [String],
            withEye: [Boolean]
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
                if (this.withEye) {
                    style['margin-right'] = '0.12rem';
                }
                return style;
            },
            eyeCls() {
                return [
                    `${prefix}-eye`
                ]
            }
        },
        methods: {
            showEye() {
                this.eyeVisible = !this.eyeVisible;
                this.eyeVisible? this.inputType = 'text' : this.inputType = 'password';
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