<template>
    <span :class="iconCls" :style="iconStyle"/>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            type: [String],
            size: [String]
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
                    style['width']=  this.size;
                }
                style['background-image'] = 'url("/assets/icon/' + this.type + '.png")';
                return style;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-icon {
        display: block;
        width: $icon-size-default;
        height: $icon-size-default;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
    }
</style>