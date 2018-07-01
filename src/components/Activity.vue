<template>
    <LayoutBase>
        <Navbar arrowLeft>活动详情</Navbar>
        <Card></Card>
    </LayoutBase>
</template>

<script>
    import Navbar from './lib/Navbar'
    import LayoutBase from './lib/LayoutBase';
    import ActivityImages from "./lib/ActivityImages";
    import Card from "./lib/Card";
    import Button from "./lib/Button";
    export default {
        name: 'Activity',
        components: {
            Navbar,
            Button,
            Card,
            LayoutBase,
        },
        methods: {
            getActive(n) {
                return n === this.active
            },
            setActive(n) {
                this.active = n;
            }
        },
        data () {
            return {
                active: 0
            }
        }
    }
</script>

<style lang="stylus">
    @import '../styles/var.styl';
    .activity-card {
        margin-top: $margin-base;
    }
</style>
