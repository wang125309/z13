<template>
    <div :class="activityImagesCls" :style="activityImagesStyle">
        <div :class="activityImagesTitleCls">{{title}}</div>
        <div :class="activityImagesDateCls">{{date}}</div>
        <Tag backgroundColor="rgba(0, 0, 0, 0.4)" borderColor="rgba(0, 0, 0, 0)" :className="activityImagesStatusTagCls">{{status}}</Tag>
        <div :class="activityImagesLocationCls">
            <Icon position="left" size="0.04rem" type="location"/>
            <span>
                {{location}}
            </span>
        </div>
        <Tag circle borderColor="#fff" color="#fff" backgroundColor="rgba(0, 0, 0, 0.4)" :className="activityImageTagCls">{{tag}}</Tag>
    </div>
</template>
<script>
    import Tag from "./Tag";
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {Icon, Tag},
        props: {
            src: [String],
            title: [String],
            status: [String],
            date: [String],
            location: [String],
            tag: [String]
        },
        computed: {
            activityImagesCls() {
                return [`${prefix}-activity-images`]
            },
            activityImagesStyle() {
                let style = {};
                style['background-image'] = 'url(' + this.src + ')';
                return style;
            },
            activityImagesTitleCls() {
                return [
                    `${prefix}-activity-images-title`
                ]
            },
            activityImagesDateCls() {
                return [
                    `${prefix}-activity-images-date`
                ]
            },
            activityImagesLocationCls() {
                return [
                    `${prefix}-activity-images-location`
                ]
            },
            activityImagesStatusTagCls() {
                return `${prefix}-activity-images-status-tag`
            },
            activityImageTagCls() {
                return `${prefix}-activity-images-tag`
            }
        },

    }
</script>
<style lang="stylus">
    @import '../../styles/var.styl';
    .{$prefix}-activity-images {
        position: relative;
        width: 100%;
        height: 0.4rem;
        &-date {
            padding: $padding-base 0;
            color: $font-second;
            font-size: $font-size-small;
        }

        &-location {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: $padding-base 0 0 $padding-base;
        }
        &-status-tag {
            position: absolute;
            right: 0;
            top: 0;
        }
        &-tag {
            position: absolute;
            right: 0;
            bottom: 0;
            margin: $padding-base - $padding-tag 0 0 0;
        }
    }
</style>