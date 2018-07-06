<template>
    <LayoutBase>
        <Navbar arrow-left>大厦服务</Navbar>
        <SearchInput></SearchInput>
        <div :class="panelCls">
            <div :class="serviceItemCls">
                <div :class="messageCls">
                    <div :class="itemTitleCls">
                        大厦6月份杀虫计划的温馨提示
                    </div>
                </div>
                <div :class="subItemCls">
                    物业部
                    <span :class="timeCls">2分钟前</span>
                </div>
                <Icon :class-name="iconCls" type="rent-img" size="0.25rem" position="right"/>
            </div>

        </div>
    </LayoutBase>
</template>
<script>
    import LayoutBase from "./lib/LayoutBase";
    import Navbar from "./lib/Navbar";
    import SearchInput from "./lib/SearchInput";
    import Panel from "./lib/Panel";
    import Icon from "./lib/Icon";

    const prefix = 'z13';
    export default {
        components: {
            Icon,
            Panel,
            SearchInput,
            Navbar,
            LayoutBase
        },
        computed: {
            panelCls () {
                return [
                    `${prefix}-panel`
                ]
            },
            serviceItemCls () {
                return [
                    `${prefix}-service-item`
                ]
            },
            messageCls () {
                return [
                    `${prefix}-message`
                ]
            },
            itemTitleCls () {
                return [
                    `${prefix}-item-title`
                ]
            },
            subItemCls () {
                return [
                    `${prefix}-sub-item`
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
            }
        }
    }
</script>

<style lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .{$prefix}-panel {
        margin-top: $padding-base;
        .{$prefix}-service-item {
            position: relative;
            hairline('top');
            background-color: $background-body;
            padding: $padding-base;
            height: 0.25rem;
            &:last-item {
                hairline('bottom');
            }
            .{$prefix}-message {
                margin-right: 0.25rem;
                .{$prefix}-item-title {
                    font-size: $font-size-head;
                }

            }
            .{$prefix}-sub-item {
                position: absolute;
                bottom: $padding-base;
            }
            .{$prefix}-time {
                color: $font-second;
            }
        }
        .{$prefix}-icon {
            top: $padding-base;
            margin-right: $padding-base;
        }
    }
</style>