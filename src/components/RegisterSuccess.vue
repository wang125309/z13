<template>
    <LayoutBase>
        <Navbar arrowLeft>注册</Navbar>
        <SituationLogo size="0.2rem" type="success"/>
        <div class="text-area">
            <p>注册成功</p>
            <p>通过单位认证，解锁更多大厦服务</p>
        </div>
        <Button @onClick="companySelect" type="circle" full width="92%">去认证</Button>
        <div class="jump-link-wrap">
            <a class="jump-link" @click="jump" href="javascript:;">跳过</a>
        </div>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Icon from './lib/Icon'
    import SituationLogo from './lib/SituationLogo'
    import Button from './lib/Button'

    export default {
        name: 'RegisterSuccess',
        components: {
            Button,
            Navbar,
            Icon,
            SituationLogo,
            LayoutBase
        },
        methods: {
            jump () {
                this.$router.push({
                    path: '/'
                })
            },
            companySelect () {
                this.$router.push({
                    path: '/company-list'
                })
            }
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .icon-wrap {
        margin: $margin-large auto;
    }
    .text-area {
        text-align: center;
        margin: 0 0 $margin-large*2 0;
    }
    .jump-link-wrap {
        text-align: center;
    }
    .jump-link {
        color: $font-second;
    }
</style>
