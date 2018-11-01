<template>
    <LayoutBase>
        <title>重置密码</title>
        <Navbar v-show="false" arrowLeft>忘记密码</Navbar>
        <SituationLogo size="0.2rem" type="success"/>
        <div class="text-area">
            <p>您的密码已经修改成功</p>
        </div>
        <Button @onClick="complete" type="circle" full width="92%">完成</Button>
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
            complete () {
                this.$router.push({
                    path: '/login'
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
