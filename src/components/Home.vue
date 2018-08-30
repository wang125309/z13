<template>
    <LayoutBase>
        <Scrollable>
            <Navbar>中国人寿金融中心 CBD Z13</Navbar>
            <Banner class="main-banner">
                <swiper :options="swiperBannerOption">
                    <swiper-slide class="banner-slide" v-bind:key="'banner' + i.id" v-for="i in data.banners">
                        <div class="banner" @click.stop="go_banner(i.link_url)" :style="'background-image:url(' + i.image + ')'"></div>
                    </swiper-slide>
                </swiper>
            </Banner>
            <Card className="news-card">
                <div :key="'service' + i.id" class="news-list" @click="goNews(i.id)" v-for="i in data.newsAndRunableUnit.news">
                    <Tag class-name="tag" backgroundColor="red" color="#fff" borderColor="#fff">大厦服务</Tag>
                    <div class="news-details">{{i.title}}</div>
                    <div class="news-date">{{i.create_time.split(' ')[0].split('-')[1] + '.' + i.create_time.split(' ')[0].split('-')[2]}}</div>
                </div>
                <div class="news-list" :key="'rent' + i.id" @click="goRent(i.id)" v-for="i in data.newsAndRunableUnit.rentablrUnits">
                    <Tag class-name="tag" backgroundColor="#F39900" color="#fff" borderColor="#fff">可租单元</Tag>
                    <div class="news-details">{{i.title}}</div>
                    <div class="news-date">10.25</div>
                </div>
            </Card>
            <div class="env-card">
                <div class="temperature-area">
                    <div class="now-temperature">
                        <span class="number">{{data.weather.wd}}</span>
                        <span class="addon">℃</span>
                    </div>
                    <div class="whole-temperature">
                        <div class="whole-temperature-line">{{data.weather.wdLow}} / {{data.weather.wdHigh}}</div>
                        <div class="whole-temperature-line">{{data.weather.wdType}}</div>
                    </div>
                </div>
                <div class="PM25-area">
                    <div class="inner-pm25">
                        <div class="title">室内PM2.5</div>
                        <div class="pm25">
                            <span class="pm25-number pm25-good">{{data.weather.innerPm25}}</span>
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
                            <span :class="(parseInt(data.weather.outerPm25) >= 115 ? 'pm25-danger': 'pm25-good') + ' pm25-number'">{{parseInt(data.weather.outerPm25)}}</span>
                            <span class="pm25-icon">
                                <Icon v-if="parseInt(data.weather.outerPm25) < 35" class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) < 35" class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) < 35" class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) < 75 && parseInt(data.weather.outerPm25) >= 35" class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) < 75 && parseInt(data.weather.outerPm25) >= 35" class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) < 115 && parseInt(data.weather.outerPm25) >= 75" class-name="pm2-icon" type="env-good" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) >= 115 && parseInt(data.weather.outerPm25) < 150"  class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) >= 150 && parseInt(data.weather.outerPm25) < 250"  class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) >= 150 && parseInt(data.weather.outerPm25) < 250"  class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) >= 250"  class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) >= 250"  class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <Icon v-if="parseInt(data.weather.outerPm25) >= 250"  class-name="pm2-icon" type="env-bad" size="0.04rem"/>
                                <span :class="(parseInt(data.weather.outerPm25) >= 115 ? 'pm25-danger': 'pm25-good') + ' pm25-text'">{{data.weather.pm25Type}}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Panel class-name="service-panel" no-board no-padding>
                <ServiceCellGroup>
                    <ServiceCell @click="go(1)" type="blands-icon" text="百叶帘"/>
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

            <Card v-if="data.rentableUnits.pageResult && data.rentableUnits.pageResult.length" class-name="rent-card" details="" full title="可租单元" viewDetails="/rent-building">
                <div class="rent-wrap" @click="goRent(data.rentableUnits.pageResult[0].id)">
                    <Icon class-name="rent-img" type="rent-img" size="0.35rem"/>
                    <div class="rent-details">
                        <div class="rent-title">{{data.rentableUnits.pageResult[0].title}}</div>
                        <div class="rent-area">
                            <p>{{data.rentableUnits.pageResult[0].area}}平米|{{data.rentableUnits.pageResult[0].location}}层</p>
                            <p>{{data.rentableUnits.pageResult[0].capacity}}</p>
                            <p>{{data.rentableUnits.pageResult[0].deck}}</p>
                            <p>
                                <span class="price">{{data.rentableUnits.pageResult[0].price}}元</span>
                                <span>/平米</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
            <Card full title="社区活动" viewDetails="/activity-list">
                <swiper :options="swiperOption">
                    <swiper-slide :key="'activity' + i.id" v-for="i in data.activitys.pageResult">
                        <div @click="goActivity(i.id)" class="activity-item" :style="'background-image:url(' + i.image +')'">
                            <div class="activity-item-title">{{i.name}}</div>
                            <div class="activity-item-date">{{i.begin_time.split(' ')[0]}}</div>
                        </div>
                    </swiper-slide>
                </swiper>
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
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import requests from '../service/service'
    import API from '../service/api'

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
            Scrollable,
            swiper,
            swiperSlide
        },
        data () {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                },
                swiperBannerOption: {
                    slidesPerView: 'auto',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                },
                data: {
                    newsAndRunableUnit: {
                        news: [],
                        rentablrUnits: []
                    },
                    weather: {},
                    rentableUnits: {
                        pageResult:[{}]
                    },
                    activitys: {
                        pageResult:[{
                            begin_time: ' '
                        }]
                    }
                }
            }
        },
        methods: {
            go(n) {
                let url = '/';
                if (n === 1) {
                    url = '/operation'
                }
                else if (n === 2 || n === 4 || n === 5 || n === 6) {
                    this.$root.$children[0].toggleToast('warning', '即将上线，敬请期待')
                }
                else if (n === 3) {
                    url = '/delivery-list'
                }
                else if (n === 7) {
                    url = '/rent-building'
                }
                else if (n === 8) {
                    url = '/building-service'
                }
                this.$router.push({
                    path: url
                })
            },
            goRent (id) {
                this.$router.push({
                    path: '/rent-building-details/' + id
                })
            },
            goActivity (id) {
                this.$router.push({
                    path: '/activity/' + id
                })
            },
            goNews (id) {
                this.$router.push({
                    path: '/service-details/' + id
                })
            },
            go_banner (url) {
                if (url) location.href = url;
            }
        },
        created () {
            requests(API.get_homepage, {
                type: 'GET'
            }, (data) => {
                this.data = data.data
            }, (data) => {
                console.log(data)
                this.$root.$children[0].toggleToast('fail', data.message)
            })
        }
    }
</script>
<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    @import '~swiper/dist/css/swiper.min.css';
    .swiper-slide {
        width: 80%;
    }
    .banner-slide {
        width: 100%;
    }
    .activity-item {
        setBackgroundImage('../assets/activity-item.png', center);
        width: 100%;
        height: 0.4rem;
        background-size: cover;
    }
    .main-banner {
        position: absolute;
        width: 100%;
        left: 0;
    }
    .banner {
        setBackgroundImage('', center);
        width: 100%;
        height: 0.5rem;
        background-size: cover;
    }
    .news-card {
        margin-top: $banner-height - $padding-base;
        z-index: 100000;
        position: relative;
    }
    .service-panel {
        margin-bottom: $margin-base;
    }
    .news-list {
        padding: $padding-small 0 0 0;
        display: flex;
        align-items: center;
        &:first-child {
            padding: 0;
        }
        .tag {
            white-space: nowrap;
            line-height: 1;
        }
        .news-details {
            flex: 1;
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
        position: relative;
        margin: $margin-base;
        padding: $padding-base;
        //border: 1px solid $border-color;
        hairline('all')
        background-color: $white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        .temperature-area {
            flex: 3;
            position: relative;
            hairline('right');
            //border-right: 1px solid $border-color;
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
                    margin-right: $padding-small;
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
    .activity-item-title {
        font-size: $font-size-head;
        padding: $padding-base;
    }
    .activity-item-date {
        padding: 0 $padding-base;
    }
</style>

