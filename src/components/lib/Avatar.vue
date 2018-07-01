<template>
    <div :class="avatarCls" :style="avatarStyle"/>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            src: [String],
            size: [String],
            position: [String]
        },
        computed: {
            avatarCls() {
                return [
                    `${prefix}-avatar`
                ]
            },
            avatarStyle() {
                let style = {};
                if (this.size) {
                    style['width'] =  this.size;
                    style['height'] = this.size;
                }
                style['background-image'] = 'url(' + this.src + ')';
                if (this.position === 'left') {
                    style['left'] = 0;
                    style['right'] = 'initial';
                }
                if (this.position === 'right') {
                    style['left'] = 'initial';
                    style['right'] = 0;
                }
                if (this.position) {
                    style['position'] = 'absolute';
                }
                return style;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-avatar {
        border-radius: 100%;
        margin: 0 auto;
        width: $avatar-size-base;
        height: $avatar-size-base;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>