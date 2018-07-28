<template>
    <div :class="bannerCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            className: [String]
        },
        computed: {
            bannerCls() {
                return [
                    `${prefix}-banner`, {
                        [`${this.className}`]: this.className
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-banner {
        setBackgroundImage('', bottom);
        background-size: cover;
        height: $banner-height;
    }
</style>