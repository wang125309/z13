<template>
    <LayoutBase>
        <title>贴心服务</title>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <div class="operation-tabs">
            <div @click="go_operation()" class="operation-tab">
                <Icon size="0.08rem" type="blands-icon-active"></Icon>
                <div class="operation-text">百叶帘</div>
            </div>
            <div @click="go(10)" class="operation-tab">
                <Icon size="0.08rem" type="operation"></Icon>
                <div class="operation-text">物业报修</div>
            </div>
        </div>
        <Panel noPadding className="panel">
            <ServiceCellGroup>
                <ServiceCell noActivable full @click="go(1)" type="service-delivery" text="就餐服务"/>
                <ServiceCell noActivable full @click="go(2)" type="service-express" text="快递"/>
                <ServiceCell noActivable full @click="go(3)" type="service-visitor" text="访客管理"/>
            </ServiceCellGroup>
            <ServiceCellGroup>
                <ServiceCell noActivable full @click="go(4)" type="service-park" text="停车"/>
                <ServiceCell noActivable full @click="go(5)" type="rent-icon-active" text="可租单元"/>
                <ServiceCell noActivable full @click="go(6)" type="service-layout" text="大楼布局"/>
            </ServiceCellGroup>
            <ServiceCellGroup>
                <ServiceCell noActivable full @click="go(7)" type="service-water" text="送水"/>
                <ServiceCell noActivable full @click="go(8)" type="service-clean" text="保洁"/>
                <ServiceCell noActivable full @click="go(9)" type="service-wash-car" text="洗车"/>
            </ServiceCellGroup>
        </Panel>
        <Banner class="main-banner">
            <swiper id="banner-swiper">
                <swiper-slide class="banner-slide" v-bind:key="'bannerx' + i.id" v-for="i in banners">
                    <div class="banner" @click.stop="go_banner(i.link_url)" :style="'background-image:url(' + i.image + ')'"></div>
                </swiper-slide>
            </swiper>
        </Banner>
        <TabBar :active="1"/>
    </LayoutBase>

</template>

<script>
    import Navbar from "./lib/Navbar";
    import Icon from "./lib/Icon";
    import LayoutBase from "./lib/LayoutBase";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Panel from "./lib/Panel";
    import ServiceCellGroup from "./lib/ServiceCellGroup";
    import ServiceCell from "./lib/ServiceCell";
    import TabBar from "./lib/TabBar";
    import requests from '../service/service'
    import API from '../service/api'
    import Banner from './lib/Banner'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Swiper from 'swiper'

    export default {
        components: {
            Banner,
            Panel,
            Cell,
            CellGroup,
            LayoutBase,
            Icon,
            Navbar,
            ServiceCellGroup,
            ServiceCell,
            TabBar,
            swiperSlide,
            swiper
        },
        created () {
            requests(API.banners, {
                type: 'GET',
                data: {
                    location: 1
                }
            }, (data) => {
                this.banners = data.data;
                this.$nextTick(() => {
                    new Swiper('#banner-swiper', {
                        autoplay: {
                            delay: 3000, //3秒切换一次
                        },
                        slidesPerView: 'auto',
                        loop: true
                    })
                })
            }, (err) => {

            })
        },
        data () {
            return {
                bannerOptions: {
                    slidesPerView: 'auto',
                    autoplay: true,
                    reverseDirection: false
                },
                banners: []
            }
        },
        methods: {
            go_operation () {
                this.$router.push({
                    path: '/operation'
                })
            },
            go (n) {
                let url = ''
                if ( n === 1 ) {
                    url = '/delivery-list';
                }
                else if ( n === 2 ) {
                    url = '/express';
                }
                else if ( n === 3 || n === 10 ) {
                    url = '/visitor'
                    this.$root.$children[0].toggleToast('warning', '即将上线，敬请期待')
                }
                else if ( n === 4 ) {
                    url = '/park'
                }
                else if ( n === 5 ) {
                    url = '/rent-building'
                }
                else if ( n === 6 ) {
                    url = '/building-layout'
                }
                else if ( n === 7 ) {
                    url = '/water-list'
                }
                else if ( n === 8 ) {
                    url = '/clean-list'
                }
                else if ( n === 9 ) {
                    url = '/wash-car-list'
                }
                if (n !== 3 && n !== 10) {
                    this.$router.push({
                        path: url
                    })
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    @import '~swiper/dist/css/swiper.min.css';
    .main-banner {
        width: 100%;
        margin-top: 0.15rem;
    }
    .banner {
        setBackgroundImage('', center);
        width: 100%;
        height: 0.5rem;
        background-size: cover;
    }
    .operation-tabs {
        display: flex;
        align-items: center;
        position: relative;
        //border-bottom: 1px solid $border-color;
        hairline('bottom');
        background-color: $white;
        .operation-tab {
            flex: 1;
            position: relative;
            //border-right: 1px solid $border-color;
            hairline('right');
            padding: $padding-large * 2 0;
            text-align: center;
            &:last-child {
                border: none;
            }
            &:active {
                background-color: $white * 0.95;
            }
        }
        .operation-text {
            margin-top: $margin-base;
        }
    }
    .panel {
        margin-top: $margin-base;
        .panel-title {
            position: relative;
            padding: $padding-base;
            //border-bottom: 1px solid $border-color;
            hairline('bottom');
        }
    }
</style>
