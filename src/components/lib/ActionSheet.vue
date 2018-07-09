<template>
    <div :class="actionSheetWrapCls">
        <div :class="actionSheetCls">
            <div v-if="!capture" :class="actionSheetBodyCls">
                <slot/>
            </div>
            <div v-if="!capture" :class="actionSheetButtonWrapCls">
                <div :class="actionSheetButtonTypeCls(i.type)" :type="i.type" v-for="i in options">{{i.title}}</div>
            </div>
            <div v-if="capture" :class="actionSheetButtonWrapCls">
                <div @click="captureCamera" :class="actionSheetButtonTypeCls()">
                    拍照
                </div>
                <div @click="captureActive" :class="actionSheetButtonTypeCls()">
                    从系统相册上传
                </div>
            </div>
            <div :class="actionSheetButtonCancelCls">
                <div @click="actionCancel()" :class="actionSheetButtonCls">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        watch: {
            visible () {
            }
        },
        props: {
            title: [String],
            options: [Array],
            type: [String],
            visible: [Boolean],
            capture: [Boolean]
        },
        computed: {
            actionSheetWrapCls () {
                return [
                    `${prefix}-action-sheet-wrap`, {
                        [`${prefix}-action-sheet-wrap-visible`]: this.visible
                    }
                ]
            },
            actionSheetCls () {
                return [
                    `${prefix}-action-sheet`
                ]
            },
            actionSheetBodyCls () {
                return [
                    `${prefix}-action-sheet-body`
                ]
            },
            actionSheetButtonWrapCls () {
                return [
                    `${prefix}-action-sheet-button-wrap`
                ]
            },
            actionSheetButtonCls () {
                return [
                    `${prefix}-action-sheet-button`, {
                        [`${prefix}-action-sheet-button-${this.type}`]: this.type
                    }
                ]
            },
            actionSheetButtonCancelCls () {
                return [
                    `${prefix}-action-sheet-button-cancel`
                ]
            }
        },
        methods: {
            actionSheetButtonTypeCls (type) {
                return [
                    `${prefix}-action-sheet-button`, {
                        [`${prefix}-action-sheet-button-${type}`]: type
                    }
                ]
            },
            actionCancel () {
                this.$emit('onVisibleChange')
            },
            captureCamera () {
                this.$emit('captureCamera')
            },
            captureActive () {
                this.$emit('captureActive')
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl';
    .{$prefix}-action-sheet-wrap {
        position: fixed;
        z-index: 20;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $background-mask;
        visibility: hidden;
        opacity: 0;
        transition: all $transition-time ease-in-out;

        .{$prefix}-action-sheet {
            transform: translateY(100%);
            transition: all $transition-time ease-in-out;
            position: absolute;
            width: 100%;
            bottom: 0;
            background-color: $background-default;
            text-align: center;
            &-body {
                position: relative;
                background-color: $background-body;
                padding: $padding-base * 2;
                color: $font-second;
                line-height: 1.5;
                hairline('bottom');
            }
        }
        &-visible {
            transition: all $transition-time ease-in-out;
            visibility: visible;
            opacity: 1;
            .{$prefix}-action-sheet {
                transform: translateY(0);
                transition: all $transition-time ease-in-out;
            }
        }
        .{$prefix}-action-sheet-button {
            padding: $padding-base;
            position: relative;
            background-color: $background-body;
            hairline('bottom');
            &:active {
                background-color: $white * 0.95;
            }
            &-error {
                color: red;
            }
        }
        .{$prefix}-action-sheet-button-cancel {
            margin-top: 3px;
            position: relative;
            hairline('top');
            &:active {
                background-color: $white * 0.95;
            }
        }
    }
</style>