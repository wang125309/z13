{<template>
    <LayoutBase>
        <Navbar arrow-left>大厦布局</Navbar>
        <CellGroup :class-name="cellGroupCls" full no-margin>
            <div :class="cellCls">
                <Icon size="0.2rem" :class="iconCls" type="rent-img" position="left"/>
                <div :class="wrapCls">
                    <div :class="titleCls">CBD Z13大厦</div>
                </div>
            </div>
            <Cell without-border :class-name="cellBottomCls">
                <div :class="itemCls">
                    <div>公司地址：朝阳区国贸二期366号</div>
                    <div>服务电话：010-66336633</div>
                </div>
                <a href="tel: 010-66336633">
                    <Icon :class="callCls" size="0.11rem" position="right" type="call"/>
                </a>
            </Cell>
        </CellGroup>
        <div class="building-layout-search-area">
            <SearchInput @search="refresh" v-model="filter.name"/>
            <div class="building-layout-filter">
                <div class="building-layout-title">大厦导航</div>
                <DropdownTab title="单元">
                    <div @click="filterUnit('1')" tabindex="0" :class="dropdownItemCls">一单元</div>
                    <div @click="filterUnit('2')" tabindex="0" :class="dropdownItemCls">二单元</div>
                    <div @click="filterUnit('3')" tabindex="0" :class="dropdownItemCls">三单元</div>
                    <div @click="filterUnit('4')" tabindex="0" :class="dropdownItemCls">四单元</div>
                    <div @click="filterUnit('5')" tabindex="0" :class="dropdownItemCls">五单元</div>
                    <div @click="filterUnit('6')" tabindex="0" :class="dropdownItemCls">六单元</div>
                    <div @click="filterUnit('7')" tabindex="0" :class="dropdownItemCls">七单元</div>
                </DropdownTab>
                <DropdownTab title="楼层">
                    <div @click="filterFloor('1-10')" tabindex="0" :class="dropdownItemCls">1~10</div>
                    <div @click="filterFloor('11-20')" tabindex="0" :class="dropdownItemCls">11~20</div>
                    <div @click="filterFloor('21-30')" tabindex="0" :class="dropdownItemCls">21~30</div>
                    <div @click="filterFloor('31-40')" tabindex="0" :class="dropdownItemCls">31~40</div>
                    <div @click="filterFloor('41-46')" tabindex="0" :class="dropdownItemCls">41~46</div>
                </DropdownTab>
            </div>
        </div>
        <div :class="roomPanelCls" v-if="i.companys.length" v-for="(i, index) in data" v-bind:key="index">
            <div @click="hidden(i.tid)" :class="floorCls">
                <div>{{i.floor}}</div>
                <Icon :class="floorIcon" position="right" type="up-arrow" size="0.04rem"/>
            </div>
            <div v-show="i.active" :class="roomPanelItemCls" v-for="(j, $index) in i.companys" v-bind:key="'company'+ $index">
                <div :class="cellImgCls" :style="'background-image:url(' + i.logo + ')'"></div>
                <div :class="itemDetailsCls">
                    <div :class="itemDetailsHead">
                        <div>
                            {{j.name}}
                        </div>
                        <div>
                            {{j.room}}
                        </div>
                    </div>
                    <div :class="itemDetailsBody">
                        {{j.locations}}
                    </div>
                </div>
            </div>
        </div>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import SearchInput from "./lib/SearchInput";
    import Icon from "./lib/Icon";
    import Cell from "./lib/Cell";
    import CellGroup from "./lib/CellGroup";
    import API from "../service/api";
    import request from "../service/service";
    import DropdownTab from "./lib/DropdownTab";
    const prefix = 'z13';

    export default {
        name: 'Login',
        components: {
            DropdownTab,
            CellGroup,
            Cell,
            Icon,
            SearchInput,
            Navbar,
            LayoutBase
        },
        computed: {
            dropdownItemCls () {
                return [
                    `${prefix}-dropdown-item`
                ]
            },
            floorIcon () {
                return [
                    `${prefix}-floor-icon`
                ]
            },
            cellGroupCls () {
                return [
                    `${prefix}-cell-group`
                ]
            },
            wrapCls () {
                return [
                    `${prefix}-wrap`
                ]
            },
            titleCls () {
                return [
                    `${prefix}-title`
                ]
            },
            timeCls () {
                return [
                    `${prefix}-time`
                ]
            },
            iconCls () {
                return [
                    `${prefix}-icon`
                ]
            },
            cellCls () {
                return [
                    `${prefix}-cell`
                ]
            },
            callCls () {
                return [
                    `${prefix}-call`
                ]
            },
            cellBottomCls () {
                return [
                    `${prefix}-cell-bottom`
                ]
            },
            itemCls () {
                return [
                    `${prefix}-item`
                ]
            },
            cellImgCls () {
                return [
                    `${prefix}-cell-img`
                ]
            },
            itemDetailsCls () {
                return [
                    `${prefix}-item-details`
                ]
            },
            itemDetailsHead () {
                return [
                    `${prefix}-item-details-head`
                ]
            },
            itemDetailsBody () {
                return [
                    `${prefix}-item-details-body`
                ]
            },
            roomPanelCls () {
                return [
                    `${prefix}-room-panel`
                ]
            },
            roomPanelItemCls () {
                return [
                    `${prefix}-room-panel-item`
                ]
            },
            floorCls () {
                return [
                    `${prefix}-floor`
                ]
            }
        },
        data () {
            return {
                data: [],
                floorVisible: [],
                filter: {
                    companys: '',
                    floor: '-1',
                    name: ''
                }
            }
        },
        methods: {
            refresh () {
                request(API.building, {
                    type: 'GET',
                    data: this.filter.name ? this.filter : {
                        companys: this.filter.companys,
                        floor: this.filter.floor
                    }
                }, (data) => {
                    this.data = data.data;
                    let cnt = 0;
                    for (let i of data.data) {
                        cnt ++ ;
                        Object.assign(i, {tid: cnt, active: true})
                    }
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                });
            },
            filterFloor (floor) {
                this.filter.floor = floor
                this.refresh()
            },
            filterUnit (unit) {
                this.filter.companys = unit
                this.refresh()
            },
            hidden (tid) {
                for (let i in this.data) {
                    if (this.data[i].tid === tid) {
                        console.log(this.data[i].active);
                        this.data[i].active = !this.data[i].active;
                        this.data.splice(this.data.length)
                        break;
                    }
                }
            }
        },
        mounted () {
            this.refresh()
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .building-layout-search-area {
        margin: $margin-base 0;
        padding: $padding-base 0;
        position: relative;
        .building-layout-filter {
            background: #fff;
            display: flex;
            position: relative;
            hairline('bottom');
            hairline('top');
            .building-layout-title {
                padding: $padding-base;
                flex: 1;
            }
        }
    }
    .{$prefix}-floor {
        position: relative;
        padding: $padding-base;
        background-color: $white;
        hairline('bottom');
        display: flex;
        justify-content: space-between;
    }
    .{$prefix}-floor-icon {
        padding-right: $padding-base;
    }
    .{$prefix}-cell-group {
    }
    .{$prefix}-icon {
        margin-left: $margin-base;
    }
    .{$prefix}-time {
        margin-top: $padding-base;
        color: $font-second;
    }
    .{$prefix}-title {
        font-size: $font-size-head;
    }
    .{$prefix}-wrap {
        margin-left: 0.2rem;
        padding-left: $padding-base;
    }
    .{$prefix}-cell {
        hairline('bottom');
        position: relative;
        padding: $padding-base;
        margin-right: 0 !important;
        height: 0.2rem;
        &-bottom {
            padding: $padding-base 0;
            .{$prefix}-cell {
                height: initial;
                margin-left: 0 !important;
                padding-left: $padding-base;
            }
        }
    }
    .{$prefix}-call {
        top: 0;
        left: initial;
    }
    .{$prefix}-item {
        color: $font-second;
        line-height: 1.5;
    }

    .{$prefix}-cell-img {
        padding: $padding-base;
        width: 0.1rem;
        height: 0.1rem;
        background-color: cornsilk;
        setBackgroundImage('', center)
        background-size: cover;
    }
    .{$prefix}-item-details {
        flex: 1;
        padding: 0 0 0 $padding-base;
        &-head {
            display: flex;
            justify-content: space-between;
        }
        &-body {
            padding-top: $padding-base;
            color: $font-second;
        }
    }
    .{$prefix}-room-panel {
        background-color: $white;
        position: relative;
        hairline('top');
        hairline('bottom');
        margin: $margin-base 0;
        &-item {
            position: relative;
            display: flex;
            justify-content: space-between;
            hairline('bottom');
            padding: $padding-base $padding-base $padding-base 0;
            margin-left: $padding-base;
            &:last-child {
                hairline-remove('bottom')
            }
        }
    }
</style>
