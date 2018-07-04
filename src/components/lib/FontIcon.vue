<template>
    <i :class="iconCls" :style="iconStyle"></i>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            iconCls () {
                return [
                    `${prefix}-font-icon iconfont`, {
                        [`${prefix}-${this.type}`]: this.type,
                        [`${this.className}`]: this.className
                    }
                ]
            },
            iconStyle() {
                if (this.size) {
                    return {
                        'font-size': this.size
                    }
                }
                return {};
            }
        },
        props: {
            type: [String],
            size: [String],
            className: [String, Array]
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/iconfont.css';
</style>