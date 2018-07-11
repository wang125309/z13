<template>
    <LayoutBase>
        <Navbar arrowLeft>头像</Navbar>
        <div class="avatar-area">
            <ImageCliper/>
        </div>
        <Button bottom-white className="change-avatar" @onClick="selectVisible" circle full width="92%">更换头像</Button>
        <ActionSheet @onVisibleChange="selectVisible" :visible="visibleAction" capture @captureCamera="captureCamera" @captureActive="captureActive"></ActionSheet>
        <input :class="fileSelectorCls" type="file" ref="camera" capture="camera" accept="image/*"/>
        <input :class="fileSelectorCls" type="file" ref="active" accept="image/*"/>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import ActionSheet from "./lib/ActionSheet";
    import ImageCliper from "./lib/ImageCliper";
    const prefix = 'z13';

    export default {
        name: 'ChangeAvatar',
        components: {
            ImageCliper,
            ActionSheet,
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
        },
        data () {
            return {
                visibleAction: false
            }
        },
        computed: {
            fileSelectorCls () {
                return [
                    `${prefix}-file-selector`
                ]
            }
        },
        methods: {
            captureActive () {
                this.$refs.active.click()
            },
            captureCamera () {
                this.$refs.camera.click()
            },
            selectVisible () {
                this.visibleAction = !this.visibleAction;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .cell-group {
        margin-top: $margin-large;
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;
    }
    .next-step {
        margin-top: $margin-large;
    }
    .{$prefix}-file-selector {
        visibility: hidden;
        width: 0;
        height: 0;
    }
    .avatar-area {

    }
</style>
