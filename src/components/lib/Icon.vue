<template>
    <div :class="iconWrapCls" :style="iconWrapStyle">
        <span @click="onClick" :class="iconCls" :style="iconStyle">
            <slot/>
        </span>
    </div>
</template>

<script>
    import $ from 'n-zepto'
    const prefix = 'z13';
    export default {
        props: {
            type: [String],
            size: [String],
            position: [String],
            top: [String],
            className: [String, Array],
            absolute: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            iconCls() {
                return [
                    `${prefix}-icon`, {
                        [`${this.className}`]: this.className,
                        [`icon-${this.type}`]: this.type
                    }
                ]
            },
            iconStyle() {
                let style = {};
                // style['background-image'] = 'url("/static/icon/' + this.type + '.png")';

                style['transform'] = `scale(${this.scale}) translateY(-50%)`;
                style['position'] = 'absolute';
                style['top'] = '50%';
                return style;
            },
            iconWrapStyle () {
                let style = {};
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
                else {
                    style['position'] = 'relative';
                }
                if (this.top) {
                    style['top'] = this.top;
                }
                if (this.size) {
                    style['width'] = this.size;
                    style['height'] = this.size;
                }
                return style;
            },
            iconWrapCls () {
                return [
                    `${prefix}-icon-wrap`
                ]
            }
        },
        methods: {
            onClick() {
                this.$emit('click');
            }
        },
        data () {
            return {
                scale: 1
            }
        },
        mounted () {
            if (this.size) {
                // style['width'] =  this.size;
                // style['height'] = this.size;
                let width = $(`.icon-${this.type}`).css('width');
                let height = $(`.icon-${this.type}`).css('height');
                if (width && height) {
                    let widthNumber = parseInt(width.substring(0, width.length - 2));
                    let heightNumber = parseInt(height.substring(0, height.length - 2));
                    let bigger = widthNumber > heightNumber ? widthNumber : heightNumber;
                    let x = parseFloat(this.size.substring(0, this.size.length - 3)) * $('body')[0].clientWidth;
                    let scale = x/bigger;
                    this.scale = scale;
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/sprite.css';
    .{$prefix}-icon-wrap {
        margin: 0 auto;
    }
    .{$prefix}-icon {
        display:block;
        transform-origin: left top;
        background-image: url("../../assets/sprite.png")
    }

</style>
