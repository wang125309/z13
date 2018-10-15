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
        name: 'IconOperation',
        props: {
            type: [String],
            size: [String],
            position: [String],
            top: [String],
            className: [String, Array]
        },
        computed: {
            iconCls() {
                return [
                    `${prefix}-icon`, {
                        [`${this.className}`]: this.className
                    }
                ]
            },
            iconStyle() {
                let style = {};
                style['background-image'] = 'url("/static/icon/' + this.type + '.png")';

                return style;
            },
            iconWrapStyle () {
                let style = {};
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
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-icon-wrap {
        margin: 0 auto;
    }
    .{$prefix}-icon {
        display:block;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

</style>
