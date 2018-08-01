<template>
    <LayoutBase>
        <Navbar arrow-left>可租单元</Navbar>
        <Banner :style="'background-image:url(' + data.image + ')'"/>
        <!--<div :class="rentBuildingAreaCls">-->
            <!--<div v-for="i in data" :key="'rent' + i.id" @click="go(i.id)" :class="rentBuildingItemCls">-->
                <!--<Icon :class="rentImgCls" type="rent-img" position="left" size="0.25rem"/>-->
                <!--<div :class="rentBuildingItemInfoCls">-->
                    <!--<div :class="titleCls">{{i.area}} | {{i.location}}</div>-->
                    <!--<div :class="descAreaCls">-->
                        <!--<div :class="descCls">-->
                            <!--<span :class="subTitleCls">容纳人数：</span>-->
                            <!--<span :class="detailsCls">{{i.capacity}}</span>-->
                        <!--</div>-->
                        <!--<div :class="descCls">-->
                            <!--<span :class="subTitleCls">采光朝向：</span>-->
                            <!--<span :class="detailsCls">{{i.face}}</span>-->
                        <!--</div>-->
                        <!--<div :class="descCls">-->
                            <!--<span :class="subTitleCls">装修情况：</span>-->
                            <!--<span :class="detailsCls">{{i.deck}}</span>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div :class="priceCls">-->
                        <!--<div :class="mainPriceCls">{{i.price}}元/m²·天</div>-->
                        <!--<div :class="subPriceCls">约{{i.price*30}}元月</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </LayoutBase>
</template>

<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import Tabs from "./lib/Tabs";
    import DropdownTab from "./lib/DropdownTab";
    import Icon from "./lib/Icon";
    import request from "../service/service";
    import API from "../service/api";
    import pageResult from "../service/pageResult";
    import Banner from "./lib/Banner";
    const prefix = 'z13';

    export default {
        components: {
            Banner,
            Icon,
            DropdownTab,
            Tabs,
            Navbar,
            LayoutBase
        },
        computed: {
        },
        methods: {
            refresh () {
                request(`${API.rentableunits}/${this.$route.params.id}/`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            }
        },
        data () {
            return {
                data: []
            }
        },
        created () {
            this.refresh();
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
</style>