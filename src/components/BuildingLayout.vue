{<template>
    <LayoutBase>
        <Navbar arrow-left>大厦布局</Navbar>
        <SearchInput/>
        <CellGroup :class-name="cellGroupCls" full no-margin>
            <div :class="cellCls">
                <Icon size="0.2rem" :class="iconCls" type="rent-img" position="left"/>
                <div :class="wrapCls">
                    <div :class="titleCls">洗车店名字</div>
                    <div :class="timeCls">08:00 - 22:00</div>
                </div>
            </div>
            <Cell without-border :class-name="cellBottomCls">
                <div :class="itemCls">
                    <div>地点：A座1层1002房间</div>
                    <div>电话：010-2321424</div>
                </div>
                <a href="tel: 010-2321424">
                    <Icon :class="callCls" size="0.11rem" position="right" type="call"/>
                </a>
            </Cell>
        </CellGroup>
        <div :class="roomPanelCls" v-if="i.companys.length" v-for="i in data" v-bind:key="i.id">
            <div :class="roomPanelItemCls" v-for="j in i.companys" v-bind:key="'company'+ i.id">
                <div :class="cellImgCls"></div>
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
                        {{j.contract}}
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
    const prefix = 'z13';

    export default {
        name: 'Login',
        components: {
            CellGroup,
            Cell,
            Icon,
            SearchInput,
            Navbar,
            LayoutBase
        },
        computed: {
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
            }
        },
        data () {
            return {
                data: []
            }
        },
        methods: {
            refresh () {
                request(API.building, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                }, (data) => {
                    _this.$root.$children[0].toggleToast('fail', data.message);
                });
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
    }
    .{$prefix}-item-details {
        flex: 1;
        padding: 0 $padding-small;
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
            padding: $padding-small;
            &:last-child {
                hairline-remove('bottom')
            }
        }
    }
</style>
