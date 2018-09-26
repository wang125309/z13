<template>
    <LayoutBase>
        <title>修改头像</title>
        <Navbar v-show="false" arrowLeft>头像</Navbar>
        <div class="avatar-area" :style="'background-image:url('+ image +')'">
            <ImageCliper @uploaded="uploaded"  ref="imageCliper" v-show="imageCliperVisible"/>
        </div>
        <Button v-if="changeButtonVisible" bottom-white className="change-avatar" @onClick="captureActive" circle full width="92%">更换头像</Button>
        <div v-if="!changeButtonVisible" :class="actionToolsCls">
            <div @click="cancelCliper" :class="actionToolsCancelCls">取消</div>
            <div @click="completeCliper" :class="actionToolsSureCls">完成</div>
        </div>
        <!--<ActionSheet @onVisibleChange="selectVisible" :visible="visibleAction" capture @captureCamera="captureCamera" @captureActive="captureActive"></ActionSheet>-->

        <form id="image-form">
            <input id="file" @change="cliper" :class="fileSelectorCls" type="file" ref="active" accept="image/*"/>
        </form>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import ActionSheet from "./lib/ActionSheet"
    import ImageCliper from "./lib/ImageCliper"
    import request from "../service/service"
    import API from "../service/api"

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
                visibleAction: false,
                uploadType: 'file',
                imageCliperVisible: false,
                changeButtonVisible: true,
                image: ''
            }
        },
        computed: {
            fileSelectorCls () {
                return [
                    `${prefix}-file-selector`
                ]
            },
            actionToolsCls () {
                return [
                    `${prefix}-action-tools`
                ]
            },
            actionToolsCancelCls () {
                return [
                    `${prefix}-action-tools-cancel`
                ]
            },
            actionToolsSureCls () {
                return [
                    `${prefix}-action-tools-sure`
                ]
            }
        },
        mounted () {
            this.image = this.$store.state.user.image;
        },
        methods: {
            captureActive () {
                this.$refs.active.click()
                this.uploadType = 'file'
            },
            captureCamera () {
                this.$refs.camera.click()
                this.uploadType = 'camera-file'
            },
            selectVisible () {
                this.visibleAction = !this.visibleAction;
            },
            cliper () {
                this.selectVisible();
                this.imageCliperVisible = true;
                this.$refs.imageCliper.startCliper(this.uploadType);
                this.changeButtonVisible = false;
            },
            cancelCliper () {
                this.changeButtonVisible = true;
            },
            completeCliper () {
                this.changeButtonVisible = true;
                this.$refs.imageCliper.completeCliper(this.uploadType);
            },
            uploaded (image) {
                this.image = image;
                this.uploadImage();
            },
            changeAvatar (image) {
                request(API.get_user_info, {
                    type: 'PUT',
                    data: {
                        image: image,
                        busiType: 2 //1 修改昵称2 修改头像3 修改公司4 修改工位6修改手机号
                    }
                }, (data) => {
                    this.$store.dispatch('SET_USER_INFO', this)
                    this.$root.$children[0].toggleToast('success', data.message);
                    setTimeout(() => {
                        this.$router.push({
                            path: '/user-info'
                        })
                    }, 500)
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            uploadImage () {
                request(API.uploadImage, {
                    type: 'POST',
                    data: {
                        fileBase64: this.image
                    }
                }, (data) => {
                    this.changeAvatar(data.data)
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message)
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .{$prefix}-action-tools {
        display: flex;
        background-color: $white;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        width: 100%;
        &-cancel {
            padding: $padding-base;
            &:active {
                background-color: $white * 0.95;
            }
        }
        &-sure {
            padding: $padding-base;
            color: $brand-color;
            &:active {
                background-color: $white * 0.95;
            }
        }
    }
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
        setBackgroundImage('')
        background-position: top left;
        background-size: cover;
        height: 1rem;
    }
</style>
