<template>
    <div ref="avatarArea" :class="avatarAreaCls">
        <div :class="avatarCls">
            <div :class="avatarMaskCls"/>
            <div ref="cutArea" :class="cutAreaCls">
                <div ref="cutAreaAvatar" :class="cutAreaAvatarCls"></div>
                <div  @touchstart="cutStart" @touchend="cutEnd" @touchmove="cut" ref="cutTools" :class="cutToolsCls">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AlloyFinger from 'alloyfinger'
    const prefix = 'z13';
    export default {
        computed: {
            cutMaskCls () {
                return [
                    `${prefix}-cut-mask`
                ]
            },
            avatarCls () {
                return [
                    `${prefix}-avatar`
                ]
            },
            cutAreaCls () {
                return [
                    `${prefix}-cut-area`
                ]
            },
            avatarAreaCls () {
                return [
                    `${prefix}-avatar-area`
                ]
            },

            avatarMaskCls () {
                return [
                    `${prefix}-avatar-mask`
                ]
            },
            cutAreaAvatarCls () {
                return [
                    `${prefix}-cut-area-avatar`
                ]
            },
            cutToolsCls () {
                return [
                    `${prefix}-cut-tools`
                ]
            },
            cutToolsInnerCls () {
                return [
                    `${prefix}-cut-tools-inner`
                ]
            }
        },
        mounted () {
            let af = new AlloyFinger(this.$refs.cutTools, {
                pinch: function (evt) {
                    alert(evt.zoom);
                }
            });

        },
        data () {
            return {
                left: 0,
                top: 0,
                flag: false
            }
        },
        methods: {
            cutStart ($evt) {
                let pageX = $evt.touches[0].pageX;
                let pageY = $evt.touches[0].pageY;
                if (this.left === 0 && this.top === 0) {
                    this.left = pageX;
                    this.top = pageY;
                    this.flag = true;
                    console.log(this.left, this.top)
                }
            },
            cutEnd ($evt) {
            },
            cut ($evt) {
                if (this.flag) {
                    let avatarArea = this.$refs.avatarArea;
                    let cutTools = this.$refs.cutTools;
                    let pageX = $evt.touches[0].pageX;
                    let pageY = $evt.touches[0].pageY;
                    let w = (pageX - this.left);
                    let h = (pageY - this.top);
                    if (w + cutTools.clientWidth > avatarArea.clientWidth) {
                        w = avatarArea.clientWidth - cutTools.clientWidth;
                    }
                    if (h + cutTools.clientHeight > avatarArea.clientHeight) {
                        h = avatarArea.clientHeight - cutTools.clientHeight;
                    }
                    if (w < 0) {
                        w = 0;
                    }
                    if (h < 0) {
                        h = 0;
                    }
                    cutTools.style.left = 0;
                    cutTools.style.top = 0;
                    let cutAreaAvatar = this.$refs.cutAreaAvatar;
                    cutAreaAvatar.style.backgroundPositionX = '-' + w + 'px';
                    cutAreaAvatar.style.backgroundPositionY = '-' + h + 'px';
                    let cutArea = this.$refs.cutArea;
                    cutArea.style.left = w + 'px';
                    cutArea.style.top = h + 'px';
                }
            },
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';

    .{$prefix}-avatar {
        width: 100%;
        height: 1rem;
        position: relative;
        setBackgroundImage('../../assets/avatar.png');
    }
    .{$prefix}-avatar-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $background-mask;
        z-index: 10;
    }
    .{$prefix}-cut-mask {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;
    }
    .{$prefix}-cut-area {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.5rem;
        height: 0.5rem;

        &-avatar {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
            setBackgroundImage('../../assets/avatar.png');
            background-position: 0 0;
            background-size: 1rem 1rem;
        }
    }
    .{$prefix}-cut-tools {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        setBackgroundImage('../../assets/cut-area.png');
        z-index: 11;
    }
    .{$prefix}-avatar-area {
        overflow: hidden;
    }
</style>