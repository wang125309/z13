<template>
    <div :class="toastWrapCls">
        <div :class="toastCls">
            <Icon :className="toastIconCls" :type="iconType" size="0.1rem"/>
            <div :class="toastMessageCls">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {Icon},
        props: {
            type: {
                type: String,
                default: 'warning'
            },
            message: [String]
        },
        computed: {
            toastWrapCls() {
                return [
                    `${prefix}-toast-wrap`, {
                        [`${prefix}-toast-wrap-show`]: this.visible
                    }
                ]
            },
            toastCls() {
                return [
                    `${prefix}-toast`
                ]
            },
            iconType() {
                return `toast-${this.type}`
            },
            toastMessageCls() {
                return [
                    `${prefix}-toast-message`
                ]
            },
            toastIconCls() {
                return `${prefix}-toast-icon`
            }
        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show() {
                this.visible = true;
                setTimeout(() => {
                    this.visible = false;
                }, 1500);
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../styles/var.styl";

    .{$prefix}-toast-wrap {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-color: $background-mask;
        opacity: 0;
        visibility: hidden;
        transition: opacity visibility $transition-time ease-in-out;
        .{$prefix}-toast {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: $background-mask-dark;
            -webkit-transition: opacity visibility $transition-time ease-in-out;
            width: 0.4rem;
            padding: $padding-base;
            border-radius: 3px;
            &-icon {
                margin: 0 auto;
            }
            &-message {
                padding: $padding-base;
                color: $white;
                text-align: center;
            }
        }
        &-show {
            opacity: 1;
            visibility: visible;
            transition: opacity $transition-time ease-in-out;
            .{$prefix}-toast {
                opacity: 1;
                visibility: visible;
                transition: opacity $transition-time ease-in-out;
            }
        }

    }
</style>