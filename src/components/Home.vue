<template>
    <LayoutBase>
        <Scrollable>
            <Navbar>中国人寿金融中心 CBD Z13</Navbar>
            <Banner class="main-banner"/>
            <Card overflow className="news-card">
                <div>dsfasfd</div>
                <div>dsfasfd</div>
                <div>dsfasfd</div>
                <div>dsfasfd</div>
            </Card>
            <Card height="0.3rem" className="env-card">

            </Card>
            <Card full title="可租单元">
                asdf
            </Card>
            <Card full title="社区活动">
                互动
            </Card>
            <TabBar :active="0"/>
        </Scrollable>
    </LayoutBase>
</template>

<script>
    import Navbar from './lib/Navbar'
    import Banner from './lib/Banner'
    import Card from './lib/Card'
    import LayoutBase from './lib/LayoutBase';
    import Scrollable from './lib/Scrollable';
    import TabBar from "./lib/TabBar";
    export default {
        name: 'Home',
        components: {
            TabBar,
            LayoutBase,
            Navbar,
            Banner,
            Card,
            Scrollable
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .main-banner {
        position: absolute;
        width: 100%;
        left: 0;
    }
    .news-card {
        margin-top: $banner-height - $padding-base;
    }
    .env-card {

    }
</style>
