<template>
    <LayoutBase>
        <Tabs>
            <DropdownTab :title="areaTitle">
                <div @click="filterArea('0', '全部')" tabindex="0" :class="dropdownItemCls">全部</div>
                <div @click="filterArea('100under', '100m²以下')" tabindex="0" :class="dropdownItemCls">100m²以下</div>
                <div @click="filterArea('100upper', '100m²以上')" tabindex="0" :class="dropdownItemCls">100m²以上</div>
                <div @click="filterArea('100-200', '100m²-200m²')" tabindex="0" :class="dropdownItemCls">100m²-200m²</div>
            </DropdownTab>
            <DropdownTab :title="capacityTitle">
                <div @click="filterCapacity('0', '全部')" tabindex="0" :class="dropdownItemCls">全部</div>
                <div @click="filterCapacity('100under', '100以下')" tabindex="0" :class="dropdownItemCls">100以下</div>
                <div @click="filterCapacity('100upper', '100以上')" tabindex="0" :class="dropdownItemCls">100以上</div>
                <div @click="filterCapacity('100-200', '100-200')" tabindex="0" :class="dropdownItemCls">100-200</div>
            </DropdownTab>
            <DropdownTab :title="unitTitle">
                <div @click="filterUnit(0, '全部')" tabindex="0" :class="dropdownItemCls">全部</div>
                <div @click="filterUnit(1, '一单元')" tabindex="0" :class="dropdownItemCls">一单元</div>
                <div @click="filterUnit(2, '二单元')" tabindex="0" :class="dropdownItemCls">二单元</div>
                <div @click="filterUnit(3, '三单元')" tabindex="0" :class="dropdownItemCls">三单元</div>
                <div @click="filterUnit(4, '四单元')" tabindex="0" :class="dropdownItemCls">四单元</div>
                <div @click="filterUnit(5, '五单元')" tabindex="0" :class="dropdownItemCls">五单元</div>
                <div @click="filterUnit(6, '六单元')" tabindex="0" :class="dropdownItemCls">六单元</div>
                <div @click="filterUnit(7, '七单元')" tabindex="0" :class="dropdownItemCls">七单元</div>
            </DropdownTab>
            <DropdownTab :title="floorTitle">
                <div @click="filterFloor('all', '全部')" tabindex="0" :class="dropdownItemCls">全部</div>
                <div @click="filterFloor('1-10', '1~10')" tabindex="0" :class="dropdownItemCls">1~10</div>
                <div @click="filterFloor('11-20', '11~20')" tabindex="0" :class="dropdownItemCls">11~20</div>
                <div @click="filterFloor('21-30', '21~30')" tabindex="0" :class="dropdownItemCls">21~30</div>
                <div @click="filterFloor('31-40', '31~40')" tabindex="0" :class="dropdownItemCls">31~40</div>
                <div @click="filterFloor('41-46', '41~46')" tabindex="0" :class="dropdownItemCls">41~46</div>
            </DropdownTab>
        </Tabs>
        <div :class="rentBuildingAreaCls">
            <div v-for="i in data" :key="'rent' + i.id" @click="go(i.id)" :class="rentBuildingItemCls">
                <!--<Icon :class="rentImgCls" type="rent-img" position="left" size="0.25rem"/>-->
                <div :class="rentImgCls" :style="'background-image:url(' + i.image + ')'"></div>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls">{{i.area}}平米 | {{i.location}}层</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">{{i.capacity}}</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">{{i.face}}</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">{{i.deck}}</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">{{i.price}}元/m²·天</div>
                        <div :class="subPriceCls">约{{i.price*30*i.area}}元月</div>
                    </div>
                </div>
            </div>
        </div>
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

    const prefix = 'z13';

    export default {
        components: {
            Icon,
            DropdownTab,
            Tabs,
            Navbar,
            LayoutBase
        },

        computed: {
            rentBuildingAreaCls () {
                return [
                    `${prefix}-rent-building-area`
                ]
            },
            rentImgCls () {
                return [
                    `${prefix}-rent-img`
                ]
            },
            rentBuildingItemCls () {
                return [
                    `${prefix}-rent-building-item`
                ]
            },
            rentBuildingItemInfoCls () {
                return [
                    `${prefix}-rent-building-item-info`
                ]
            },
            titleCls () {
                return [
                    `${prefix}-title`
                ]
            },
            descAreaCls () {
                return [
                    `${prefix}-desc-area`
                ]
            },
            descCls () {
                return [
                    `${prefix}-desc`
                ]
            },
            subTitleCls () {
                return [
                    `${prefix}-sub-title`
                ]
            },
            detailsCls () {
                return [
                    `${prefix}-details`
                ]
            },
            priceCls () {
                return [
                    `${prefix}-price`
                ]
            },
            mainPriceCls () {
                return [
                    `${prefix}-main-price`
                ]
            },
            subPriceCls () {
                return [
                    `${prefix}-sub-price`
                ]
            },
            viewMoreCls () {
                return [
                    `${prefix}-view-more`
                ]
            },
            viewMoreIconCls () {
                return [
                    `${prefix}-view-more-icon`
                ]
            },
            dropdownItemCls () {
                return [
                    `${prefix}-dropdown-item`
                ]
            },
            dropdownTextCls() {
                return [
                    `${prefix}-dropdown-text`
                ]
            }
        },
        methods: {
            refresh (page) {
                let filter = {};
                if (this.filter.area !== '0' && this.filter.area !== '' && this.filter.area !== undefined) {
                    filter.area = this.filter.area;
                } else {
                    delete this.filter.area
                    delete filter.area
                }
                if (this.filter.capacity !== '0' && this.filter.capacity !== '' && this.filter.capacity !== undefined) {
                    filter.capacity = this.filter.capacity;
                } else {
                    delete this.filter.area
                    delete filter.area
                }
                if (this.filter.floor !== '-1' && this.filter.floor !== '' && this.filter.floor !== undefined) {
                    filter.floor = this.filter.floor;
                } else {
                    delete this.filter.floor
                    delete filter.floor
                }
                if (this.filter.unit !== 0 && this.filter.floor !== '' && this.filter.floor !== undefined) {
                    filter.unit = this.filter.unit;
                } else {
                    delete this.filter.unit
                    delete filter.unit
                }
                request(API.rentableunits, {
                    type: 'GET',
                    data: filter
                }, (data) => {
                    if (page === 1) this.data = [];
                    Object.assign(this.data, pageResult(data.data, page));
                }, (data) => {
                    this.$root.$children[0].toggleToast('warning', data.message)
                })
            },
            filterUnit (unit, title) {
                this.filter.unit = unit
                this.page = 1
                this.unitTitle = title
                this.refresh(1)
            },
            filterArea (area, title) {
                this.filter.area = area;
                this.page = 1
                this.areaTitle = title
                this.refresh(1)
            },
            filterCapacity (capacity, title) {
                this.filter.capacity = capacity;
                this.page = 1
                this.capacityTitle = title
                this.refresh(1)
            },
            filterFloor (floor, title) {
                if (floor === 'all') {
                    this.filter.floor = '-1'
                } else {
                    this.filter.floor = floor
                }
                this.floorTitle = title
                this.page = 1
                this.refresh(1)
            },
            go (id) {
                this.$router.push({
                    path: '/rent-building-details/' + id
                })
            }
        },
        data () {
            return {
                data: [],
                page: 1,
                filter: {
                    area: '',
                    capacity: '',
                    floor: '',
                    unit: null
                },
                areaTitle: '面积范围',
                capacityTitle: '容纳工位',
                unitTitle: '单元',
                floorTitle: '楼层'
            }
        },
        created () {
            this.refresh(1);
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .{$prefix}-rent-building-area {
        padding: $padding-base 0;
        .{$prefix}-view-more {
            padding: $padding-small;
            color: $font-second;
            background-color: $white;
            vertical-align: middle;
            display: flex;
            justify-content: center;
            align-items: center;
            &-icon {
                margin: 0 0.01rem;
            }
        }

        .{$prefix}-rent-building-item {
            position: relative;
            padding: $padding-small;
            background-color: $white;
            display: flex;

            justify-content: left;
            hairline('bottom');
            &:last-child {
                hairline-remove('bottom');
            }

            .{$prefix}-rent-img {
                height: 0.25rem;
                width: 0.25rem;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            &-info {
                position: relative;
                flex: 1;
                min-height: 0.25rem;
                padding-left: $padding-small;
                .{$prefix}-title {
                    font-size: $font-size-head;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 60%;
                    white-space: nowrap;
                }
                .{$prefix}-desc-area {
                    position: absolute;
                    bottom: $padding-small;
                    .{$prefix}-desc {
                        .{$prefix}-sub-title {
                            color: $font-second;
                        }
                        .{$prefix}-details {
                        }
                    }
                }
                .{$prefix}-price {
                    position: absolute;
                    right: 0;
                    top: 0;
                    .{$prefix}-main-price {
                        color: #E8450D;
                        font-size: $font-size-head;
                        padding-bottom: $padding-small;
                        text-align: right;
                    }
                    .{$prefix}-sub-price {
                        color: $font-second;
                        text-align: right;
                    }
                }
            }
        }
        .{$prefix}-dropdown {
            &-item {
                position: relative;
                hairline('bottom');
                padding: $padding-small;
                &:active {
                    background-color: $white * 0.95;
                }
                &:last-child {
                    hairline-remove('bottom');
                }
            }
        }
    }

</style>
