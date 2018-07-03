<template>
    <LayoutBase>
        <Scrollable>
            <Navbar>中国人寿金融中心 CBD Z13</Navbar>
            <Banner class="main-banner"/>
            <Card overflow className="news-card">
                <div class="news-list">
                    <Tag class-name="tag" backgroundColor="red" color="#fff" borderColor="#fff">可租单元</Tag>
                    <div class="news-details">大楼22楼进行出租，面积大约100公里</div>
                    <div class="news-date">10.25</div>
                </div>
                <div class="news-list">
                    <Tag class-name="tag" backgroundColor="#F39900" color="#fff" borderColor="#fff">可租单元</Tag>
                    <div class="news-details">大楼22楼进行出租，面积大约100公里</div>
                    <div class="news-date">10.25</div>
                </div>
                <div class="news-list no-padding">
                    <Tag class-name="tag" backgroundColor="#F39900" color="#fff" borderColor="#fff">可租单元</Tag>
                    <div class="news-details">大楼22楼进行出租，面积大约100公里</div>
                    <div class="news-date">10.25</div>
                </div>
            </Card>
            <div class="env-card">
                <div class="temperature-area">
                    <div class="now-temperature">
                        <span class="number">6</span>
                        <span class="addon">℃</span>
                    </div>
                    <div class="whole-temperature">
                        <div class="whole-temperature-line">22℃ / -6℃</div>
                        <div class="whole-temperature-line">雨夹雪</div>
                    </div>
                </div>
                <div class="PM25-area">
                    <div class="inner-pm25">
                        <div class="title">室内PM2.5</div>
                        <div class="pm25">
                            <span class="pm25-number pm25-good">20</span>
                            <span class="pm25-icon">
                                <Icon class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <span class="pm25-good pm25-text">优</span>
                            </span>
                        </div>
                    </div>
                    <div class="outside-pm25">
                        <div class="title">室外PM2.5</div>
                        <div class="pm25">
                            <span class="pm25-number pm25-danger">161</span>
                            <span class="pm25-icon">
                                <Icon class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <Icon class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <span class="pm25-danger pm25-text">重度污染</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Panel class-name="service-panel" no-board no-padding>
                <ServiceCellGroup>
                    <ServiceCell @click="go(1)" type="blands-icon" text="百叶窗"/>
                    <ServiceCell @click="go(2)" type="tools-icon" text="物业报修"/>
                    <ServiceCell @click="go(3)" type="delivery-icon" text="就餐服务"/>
                    <ServiceCell @click="go(4)" type="express-icon" text="快递"/>
                </ServiceCellGroup>
                <ServiceCellGroup>
                    <ServiceCell @click="go(5)" type="visitor-icon" text="访客管理"/>
                    <ServiceCell @click="go(6)" type="park-icon" text="停车"/>
                    <ServiceCell @click="go(7)" type="rent-icon" text="可租单元"/>
                    <ServiceCell @click="go(8)" type="building-icon" text="大厦服务"/>
                </ServiceCellGroup>
            </Panel>

            <Card class-name="rent-card" full title="可租单元">
                <div class="rent-wrap">
                    <Icon class-name="rent-img" type="rent-img" size="0.35rem"/>
                    <div class="rent-details">
                        <div class="rent-title">13楼大面积精装修</div>
                        <div class="rent-area">
                            <p>300平米|13层</p>
                            <p>100-200工位</p>
                            <p>精装修</p>
                            <p>
                                <span class="price">10元</span>
                                <span>/平米</span>
                            </p>
                        </div>
                    </div>
                </div>
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
    import Icon from "./lib/Icon";
    import ServiceCellGroup from "./lib/ServiceCellGroup";
    import ServiceCell from "./lib/ServiceCell";
    import Panel from "./lib/Panel";
    import Tag from "./lib/Tag";
    export default {
        name: 'Home',
        components: {
            Tag,
            Panel,
            ServiceCell,
            ServiceCellGroup,
            Icon,
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
        },
        methods: {
            go(n) {
                let url = '/';
                this.$router.push({
                    path: url
                })
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
    .service-panel {
        margin-bottom: $margin-base;
    }
    .news-list {
        padding: 0 0 $padding-small 0;
        display: flex;
        align-items: center;
        .tag {
            white-space: nowrap;
            line-height: 1;
        }
        .news-details {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 $padding-small;
        }
        &.no-padding {
            padding: 0;
        }
    }
    .env-card {
        margin: $margin-base;
        padding: $padding-base;
        border: 1px solid $border-color;
        background-color: $white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        .temperature-area {
            flex: 3;
            border-right: 1px solid $border-color;
            .now-temperature {
                display: flex;
                align-items: flex-start;
                padding-bottom: $padding-base;

                .number {
                    font-size: $font-size-big;
                    line-height: 1;
                }
                .addon {
                    line-height: 1;
                }
            }
            .whole-temperature {
                text-align: left;
                .whole-temperature-line {
                    padding-bottom: $padding-small;
                }
            }
        }
        .PM25-area {
            flex: 4;
            padding: $padding-base $padding-base $padding-base $padding-base * 2;
            .inner-pm25 {

            }
            .outside-pm25 {
                margin-top: $margin-base;
            }
            .title {
                margin-bottom: $margin-small;
                color: $font-second;
            }
            .pm25 {
                display: flex;
                align-items: baseline;
                .pm25-number {
                    font-size: $font-size-head-large;
                }
                .pm25-icon {
                    display: flex;
                    justify-content: flex-start;
                }
            }
            .pm25-good {
                color: $brand-color;
            }
            .pm25-danger {
                color: red;
            }
            .pm2-icon {
                margin-left: 3px;
            }
            .pm25-text {
                margin-left: 3px;
            }
        }

    }
    .rent-wrap {
        display: flex;
        .rent-img {
            flex: 2;
            background-size: cover;
        }
        .rent-details {
            flex: 3;
            padding-left: $padding-small;
            .rent-title {
                font-size: $font-size-head;
            }
            .rent-area {
                color: $font-second;
                p {
                    margin: $margin-small 0 0 0;
                }
                .price {
                    color: red;
                }
            }
        }
    }

</style>

