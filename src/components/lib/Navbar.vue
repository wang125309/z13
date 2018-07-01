<template>
    <div :class="navbarCls">
        <Icon v-if="arrowLeft" type="arrow-left"/>
        <slot></slot>
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
            arrowLeft: [Boolean]
        },
        computed: {
            navbarCls() {
                return [`${prefix}-navbar`]
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-navbar {
        height: $navbar-height;
        background-color: $brand-color;
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>