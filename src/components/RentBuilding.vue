<template>
    <LayoutBase>
        <Navbar arrow-left>可租单元</Navbar>
        <Tabs>
            <DropdownTab>面积范围</DropdownTab>
            <DropdownTab>容纳工位</DropdownTab>
            <DropdownTab>楼层</DropdownTab>
        </Tabs>
        <div :class="rentBuildingAreaCls">
            <div :class="rentBuildingItemCls">
                <Icon :class="rentImgCls" type="rent-img" position="left" size="0.25rem"/>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls"A>300平米 | 13层</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">100-200工位</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">东南</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">精装修</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">10.88元/m²·天</div>
                        <div :class="subPriceCls">约3.15万元/月</div>
                    </div>
                </div>
            </div>
            <div :class="rentBuildingItemCls">
                <Icon :class-name="rentImgCls" type="rent-img" position="left" size="0.25rem"/>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls">300平米 | 13层</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">100-200工位</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">东南</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">精装修</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">10.88元/m²·天</div>
                        <div :class="subPriceCls">约3.15万元/月</div>
                    </div>
                </div>
            </div>
            <div :class="rentBuildingItemCls">
                <Icon :class-name="rentImgCls" type="rent-img" position="left" size="0.25rem"/>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls">300平米 | 13层</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">100-200工位</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">东南</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">精装修</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">10.88元/m²·天</div>
                        <div :class="subPriceCls">约3.15万元/月</div>
                    </div>
                </div>
            </div>
            <div :class="rentBuildingItemCls">
                <Icon :class-name="rentImgCls" type="rent-img" position="left" size="0.25rem"/>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls">300平米 | 13层</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">100-200工位</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">东南</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">精装修</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">10.88元/m²·天</div>
                        <div :class="subPriceCls">约3.15万元/月</div>
                    </div>
                </div>
            </div>
            <div :class="rentBuildingItemCls">
                <Icon :class-name="rentImgCls" type="rent-img" position="left" size="0.25rem"/>
                <div :class="rentBuildingItemInfoCls">
                    <div :class="titleCls">300平米 | 13层</div>
                    <div :class="descAreaCls">
                        <div :class="descCls">
                            <span :class="subTitleCls">容纳人数：</span>
                            <span :class="detailsCls">100-200工位</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">采光朝向：</span>
                            <span :class="detailsCls">东南</span>
                        </div>
                        <div :class="descCls">
                            <span :class="subTitleCls">装修情况：</span>
                            <span :class="detailsCls">精装修</span>
                        </div>
                    </div>
                    <div :class="priceCls">
                        <div :class="mainPriceCls">10.88元/m²·天</div>
                        <div :class="subPriceCls">约3.15万元/月</div>
                    </div>
                </div>
            </div>
            <div :class="viewMoreCls">
                查看更多
                <Icon :class-name="viewMoreIconCls" size="0.04rem" type="view-more"/>
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
            }
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

            hairline('bottom');
            &:last-child {
                hairline-remove('bottom');
            }

            .{$prefix}-rent-img {
                left: $padding-small !important;
            }
            &-info {
                margin-left: 0.25rem;
                min-height: 0.25rem;
                padding-left: $padding-small;
                .{$prefix}-title {
                    font-size: $font-size-head;
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
                    right: $padding-small;
                    top: $padding-small;
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

    }
</style>