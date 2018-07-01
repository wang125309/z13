<template>
    <div :class="situationLogoWrapCls">
        <div :style="situationLogoStyle" :class="situationLogoCls"></div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        props: {
            size: [String],
            type: [String]
        },
        computed: {
            situationLogoWrapCls() {
                return [
                    `${prefix}-situation-logo-wrap`
                ]
            },
            situationLogoCls() {
                return [
                    `${prefix}-situation-logo`
                ]
            },
            situationLogoStyle() {
                let style = {};
                if (this.size) {
                    style['width']=  this.size;
                }
                style['background-image'] = 'url("/assets/logo/' + this.type + '.png")';
                return style;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl'
    .{$prefix}-situation-logo-wrap {

        .{$prefix}-situation-logo {
            width: $situation-logo-size;
            height: $situation-logo-size;
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position: center;
            margin: $margin-large auto;
        }

    }
</style>