<template>
    <div @click="handleClick" :class="avatarCls" :style="avatarStyle">
        <div v-if="withSetting" :class="avatarSettingCls">
            <Icon :class="avatarSettingIconCls" size="0.06rem" type="setting"/>
        </div>
    </div>
</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: { Icon },
        props: {
            src: [String],
            size: [String],
            position: [String],
            withSetting: [Boolean]
        },
        computed: {
            avatarCls() {
                return [
                    `${prefix}-avatar`, {
                        [`${prefix}-avatar-with-setting`]: this.withSetting
                    }
                ]
            },
            avatarSettingCls () {
                return [
                    {
                        [`${prefix}-avatar-setting`]: this.withSetting
                    }
                ]
            },
            avatarSettingIconCls () {
                return [
                    `${prefix}-avatar-setting-icon`
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
        },
        methods: {
            handleClick () {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-avatar {
        border-radius: 100%;
        margin: 0 auto;
        width: $avatar-size-base;
        height: $avatar-size-base;
        background-size: cover;
        background-position: top left;
        background-repeat: no-repeat;
        background-color: #ccc;
        &-setting {
            position: absolute;
            right: 0;
            bottom: 0;
        }
        &-with-setting {
            position: relative;
        }
    }
</style>
