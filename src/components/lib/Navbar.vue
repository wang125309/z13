<template>
    <div :class="navbarCls">
        <Icon class="arrow-left" position="left" size="0.05rem" @click="previous" v-if="arrowLeft" type="arrow-left"/>
        <slot></slot>
        <Avatar v-if="user" size="0.09rem" class="navbar-avatar" @click="go" :src="user.image"/>
    </div>
</template>

<script>
    import Icon from './Icon'
    import Avatar from "./Avatar";

    const prefix = 'z13';
    export default {
        components: {
            Avatar,
            Icon
        },
        props: {
            arrowLeft: [Boolean]
        },
        computed: {
            user () {
                return this.$store.state.user;
            },
            navbarCls() {
                return [`${prefix}-navbar`]
            }
        },
        methods: {
            previous () {
                this.$router.go(-1);
            },
            go () {
                this.$router.push({
                    path: '/personal-info'
                })
            }
        },
        created () {
            this.$store.dispatch('SET_USER_INFO', this)
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .arrow-left {
        margin-left: $padding-base;
    }
    .{$prefix}-navbar {
        height: $navbar-height;
        background-color: $brand-color;
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.05rem;
    }
    .navbar-avatar {
        position: absolute;
        right: $margin-small;
    }
</style>