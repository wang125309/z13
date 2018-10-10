<template>
    <div :class="navbarCls">
        <Icon class="arrow-left" position="left" size="0.05rem" @click="previous" v-if="arrowLeft" type="arrow-left"/>
        <slot></slot>
        <Avatar size="0.08rem" class="navbar-avatar" @click="go" :src="user ? user.image : defaultAvatar"/>
    </div>
</template>

<script>
    import Icon from './Icon'
    import Avatar from "./Avatar";
    import defaultAvatar from "../../assets/default-avatar.png"
    const prefix = 'z13';
    export default {
        components: {
            Avatar,
            Icon
        },
        props: {
            arrowLeft: [Boolean]
        },
        data () {
            return {
                defaultAvatar: defaultAvatar
            }
        },
        computed: {
            user () {
                if ('user' in this.$store.state) {
                    return this.$store.state.user;
                }
                else {
                    return {}
                }
            },
            navbarCls() {
                return [`${prefix}-navbar`]
            }
        },
        methods: {
            previous () {
                if (this.$route.name === 'Login') {
                    this.$router.push({
                        path: '/'
                    })
                } else {
                    this.$router.go(-1);
                }

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
        top: $margin-small;
        right: $margin-small;
    }
</style>
