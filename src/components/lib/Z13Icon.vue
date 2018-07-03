<template>
    <div :class="mainLogoWrapCls">
        <div :class="mainLogoCls"></div>
        <div :class="mainLogoTextCls">中国人寿金融中心 CBD Z13</div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            mainLogoWrapCls() {
                return [
                    `${prefix}-main-logo-wrap`
                ]
            },
            mainLogoCls() {
                return [
                    `${prefix}-main-logo`
                ]
            },
            mainLogoTextCls() {
                return [
                    `${prefix}-main-logo-text`
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-main-logo-wrap {
        .{$prefix}-main-logo {
            padding: $padding-large 0;
            height: 0.3rem;
            setBackgroundImage('../../assets/icon/z13-logo.png');
        }
        .{$prefix}-main-logo-text {
            text-align: center;
        }
    }
</style>