<template>
    <div @click="go" :class="tabBarCellCls">
        <Icon size="0.06rem" :type="getIconType"/>
        <div :class="tabBarCellTextCls">
            <slot/>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'
    const prefix = 'z13';
    export default {
        components: {
            Icon
        },
        props: {
            icon: [String],
            active: [Boolean],
            url: [String]
        },
        computed: {
            tabBarCellCls() {
                return [
                    `${prefix}-tab-bar-cell`, {
                        [`${prefix}-tab-bar-cell-active`]: this.active
                    }
                ]
            },
            getIconType() {
                return (this.active ? `${this.icon}-active` : this.icon)
            },
            tabBarCellTextCls() {
                return [
                    `${prefix}-tab-bar-cell-text`
                ]
            }
        },
        methods: {
            go() {
                this.$router.push({
                    path: this.url
                })
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-tab-bar-cell {
        flex: 1;
        text-align: center;
        padding-top: $padding-base;
        &-active {
            .{$prefix}-tab-bar-cell-text {
                color: $brand-color;
            }
        }
        &-text {
            padding: $padding-small;
        }
    }
</style>