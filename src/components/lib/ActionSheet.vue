<template>
    <div :class="actionSheetWrapCls">
        <div :class="actionSheetCls">
            <div :class="actionSheetBodyCls">
                <slot/>
            </div>
            <div :class="actionSheetButtonWrapCls">
                <div :class="actionSheetButtonCls" :type="i.type" v-for="i in options">{{i.title}}</div>
            </div>
            <div :class="actionSheetButtonCancelCls">
                <div :class="actionSheetButtonCls">取消</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            title: [String],
            options: [Array],
            type: [String]
        },
        computed: {
            actionSheetWrapCls () {
                return [
                    `${prefix}-action-sheet-wrap`
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
        .{$prefix}-action-sheet {
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