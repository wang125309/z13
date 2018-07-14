<template>
    <div :class="navbarCls">
        <Icon position="left" size="0.06rem" @click="previous" v-if="arrowLeft" type="arrow-left"/>
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
        },
        methods: {
            previous() {
                this.$router.go(-1);
            }
        },
        created () {
            this.$store.dispatch('SET_USER_INFO', this)
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