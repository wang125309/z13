<template>
    <span @click="onClick" :class="iconCls" :style="iconStyle"/>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            type: [String],
            size: [String],
            position: [String]
        },
        computed: {
            iconCls() {
                return [
                    `${prefix}-icon`
                ]
            },
            iconStyle() {
                let style = {};
                if (this.size) {
                    style['width'] =  this.size;
                    style['height'] = this.size;
                }
                style['background-image'] = 'url("/assets/icon/' + this.type + '.png")';
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
        },
        methods: {
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-icon {
        display: block;
        margin: 0 auto;
        width: $icon-size-default;
        height: $icon-size-default;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>