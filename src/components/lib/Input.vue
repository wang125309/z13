<template>
    <div tabindex="1" :class="inputWrapCls">
        <Icon v-if="icon" position="left" class="iconCls" size="0.07rem" :type="icon"/>
        <input :disabled="disabled" @focus="focus" :defaultValue="defaultValue" @input="inputChange" @keypress="keypress" :style="inputStyles" v-bind:value="value" :type="inputType" :class="inputCls" :placeholder="placeholder"/>
        <Icon @click="showEye" position="right" v-if="withEye" v-show="!eyeVisible" size="0.07rem" type="eye"/>
        <Icon @click="showEye" position="right" v-if="withEye" v-show="eyeVisible" size="0.07rem" type="eye-close"/>
        <Button :disabled="codeSend" @onClick="handelSendCode" :className="sendCodeCls" v-if="sendCode" type="send-code">{{sendMessage}}</Button>
        <Button :disabled="codeSend" @onClick="handelSendEmailCode" :className="sendCodeCls" v-if="sendCodeEmail" type="send-code">{{sendMessage}}</Button>
        <Icon @click="clear" v-if="withClear" :class="clearCls" size="0.04rem" top="0.04rem" type="delete" position="right"/>
        <slot wx-if="this.$slots"/>
    </div>
</template>

<script>
    import Icon from './Icon'
    import Button from './Button'
    import request from '../../service/service'
    import API from '../../service/api'
    const prefix = 'z13';

    export default {
        watch: {
            model () {

            },
            $route: {
                handler () {
                    this.sendMessage = '发送验证码';
                    this.time = 60;
                    this.codeSend = false;
                }
            }
        },
        data() {
            return {
                eyeVisible: false,
                inputType: this.type,
                codeSend: false,
                sendMessage: '发送验证码',
                time: 60
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
            defaultValue: [String],
            account: [String],
            codeType: [Number],
            disabled: [Boolean],
            sendCodeEmail: [Boolean],
            email: [String]
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
                        [`${prefix}-input-disabled`]: this.disabled
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
                return [
                    `${prefix}-send-code`
                ]
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
            focus () {
                this.$emit('focus')
            },
            clear () {
                this.value = ''
            },
            inputChange ($evt) {
                this.$emit('input', $evt.target.value)
            },
            keypress ($evt) {
                this.$emit('keypress', $evt);
            },
            handelSendCode ($evt) {
                if (!this.codeSend) {
                    request(API.send_phone_Code, {
                        type: 'POST',
                        data: {
                            account: this.account,
                            busiType: this.codeType
                        }
                    }, (data) => {
                        let _self = this;
                        this.codeSend = true;
                        let interval = setInterval(() => {
                            _self.sendMessage = `已发送(${_self.time}s)`;
                            if (_self.time) {
                                _self.time -- ;
                            }
                            else {
                                clearInterval(interval);
                                _self.codeSend = false;
                                _self.sendMessage = '再次发送';
                            }

                        }, 1000);
                    }, (data) => {
                        this.$root.$children[0].toggleToast('warning', data.message)
                    })
                }
            },
            handelSendEmailCode ($evt) {
                if (!this.codeSend) {
                    request(API.send_email_code, {
                        type: 'POST',
                        data: {
                            email: this.email,
                            busiType: this.codeType
                        }
                    }, (data) => {
                        let _self = this;
                        this.codeSend = true;
                        let interval = setInterval(() => {
                            _self.sendMessage = `已发送(${_self.time}s)`;
                            if (_self.time) {
                                _self.time -- ;
                            }
                            else {
                                clearInterval(interval);
                                _self.codeSend = false;
                                _self.sendMessage = '再次发送';
                            }

                        }, 1000);
                    }, (data) => {
                        this.$root.$children[0].toggleToast('warning', data.message)
                    })
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
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
            &-disabled {
                color: $font-second;
            }
        }
        .{$prefix}-send-code {
            position: absolute;
            right: 0;
            &-disabled {
                color: $white;
                background: $font-second;
            }
        }
    }
</style>
