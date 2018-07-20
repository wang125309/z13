<template>
    <div :class="inputWrapCls">
        <Icon v-if="icon" position="left" class="iconCls" size="0.07rem" :type="icon"/>
        <input :defaultValue="defaultValue" @input="inputChange" @keypress="keypress" :style="inputStyles" v-bind:value="value" :type="inputType" :class="inputCls" :placeholder="placeholder"/>
        <Icon @click="showEye" position="right" v-if="withEye" v-show="!eyeVisible" size="0.07rem" type="eye"/>
        <Icon @click="showEye" position="right" v-if="withEye" v-show="eyeVisible" size="0.07rem" type="eye-close"/>
        <Button :className="sendCodeCls" v-if="sendCode" type="send-code">发送验证码</Button>
        <Icon @click="clear" v-if="withClear" :class="clearCls" size="0.04rem" top="0.04rem" type="delete" position="right"/>
        <slot wx-if="this.$slots"/>
    </div>
</template>

<script>
    import Icon from './Icon'
    import Button from './Button'
    const prefix = 'z13';

    export default {
        watch: {
            model () {

            }
        },
        data() {
            return {
                eyeVisible: false,
                inputType: this.type,
            }
        },
        props: {
            placeholder: [String],
            icon: [String],
            type: [String],
            withEye: [Boolean],
            sendCode: [Boolean],
            withClear: [Boolean],
            value: [String],
            circle: [Boolean],
            defaultValue: [String]
        },
        components: {
            Icon,
            Button
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
                        [`${prefix}-input-${this.size}`]: this.size,
                        [`${prefix}-input-circle`]: this.circle,
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
            sendCodeCls() {
                return `${prefix}-send-code`
            },
            clearCls () {
                return [
                    `${prefix}-input-clear`
                ]
            }
        },
        methods: {
            showEye() {
                this.eyeVisible = !this.eyeVisible;
                this.eyeVisible? this.inputType = 'text' : this.inputType = 'password';
            },
            clear () {
                this.value = ''
            },
            inputChange ($evt) {
                this.$emit('input', $evt.target.value)
            },
            keypress ($evt) {
                this.$emit('keypress', $evt);
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl'
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }
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
            &-circle {
                border-radius: $padding-base * 4;
                background-color: $background-default;
                width: auto;
                padding: $padding-small;
                flex: 1;
            }
            &-clear {
                margin-right: $padding-base;
            }
        }
        .{$prefix}-send-code {
            position: absolute;
            right: 0;
        }
    }
</style>