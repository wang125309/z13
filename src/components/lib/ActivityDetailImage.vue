<template>
    <div :class="activityDetailImagesCls" :style="activityDetailImagesStyle">
        <div :class="activityDetailImagesTitleCls">{{title}}</div>
        <Tag backgroundColor="rgba(0, 0, 0, 0.4)" borderColor="rgba(0, 0, 0, 0)" color="#666" :className="activityDetailImagesStatusTagCls">{{status}}</Tag>
        <div :class="activityDetailImagesLocationCls">
            <Icon class="location-icon" size="0.05rem" position="left" type="location"/>
            <span style="margin-left: 0.02rem;">
                {{location}}
            </span>
        </div>
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
            activityDetailImagesCls() {
                return [`${prefix}-activity-detail-images`]
            },
            activityDetailImagesStyle() {
                let style = {};
                style['background-image'] = 'url(' + this.src + ')';
                return style;
            },
            activityDetailImagesTitleCls() {
                return [
                    `${prefix}-activity-detail-images-title`
                ]
            },
            activityDetailImagesLocationCls() {
                return [
                    `${prefix}-activity-detail-images-location`
                ]
            },
            activityDetailImagesStatusTagCls() {
                return `${prefix}-activity-detail-images-status-tag`
            }
        }

    }
</script>
<style scoped lang="stylus">
    @import '../../styles/var.styl';
    .location-icon {
        margin-left: $margin-base;
    }
    .{$prefix}-activity-detail-images {
        position: relative;
        width: 100%;
        height: 0.4rem;
        &-title {
            padding: $padding-base;
        }
        &-location {
            padding: 0 $padding-base;
            span {
                padding-left: $padding-base;
            }
        }
        &-status-tag {
            position: absolute;
            right: 0;
            top: 0;
            margin: $padding-base - $padding-tag;
        }
    }
</style>