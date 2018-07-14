<template>
    <div :class="className">
        <div :class="cellCls" @click="go">
            <slot></slot>
            <Icon top="0.024rem" v-if="isLink" size="0.06rem" type="arrow-right" position="right"/>
            <Icon :className="problemIconCls" size="0.06rem" top="0.036rem" v-if="problem" type="down" position="right"/>
        </div>
        <div v-if="problem" v-show="panelVisible" :class="cellPanelCls">
            <div :class="cellPanelInfoCls">
                <slot name="answer"></slot>
            </div>
        </div>
    </div>

</template>

<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        components: {Icon},
        watch: {
            panelVisible () {

            }
        },
        data () {
            return {
                panelVisible: this.visible
            }
        },
        props: {
            full: [Boolean],
            withoutBorder: [Boolean],
            padding: [Boolean],
            isLink: [Boolean, String],
            problem: [Boolean],
            visible: [Boolean],
            className: [String, Array],
            flex: [Boolean]
        },
        computed: {
            cellCls() {
                return [
                    `${prefix}-cell`, {
                        [`${prefix}-cell-full`]: this.full,
                        [`${prefix}-cell-no-border`]: this.withoutBorder,
                        [`${prefix}-cell-padding`]: this.padding,
                        [`${prefix}-cell-problem`]: this.problem,
                        [`${prefix}-cell-flex`]: this.flex
                    }
                ]
            },
            problemIconCls() {
                let cls = ''
                if (this.panelVisible) {
                    cls = `${prefix}-cell-problem-icon-visible `
                }
                cls += `${prefix}-cell-problem-icon`
                return cls
            },
            cellPanelCls() {
                return [
                    `${prefix}-cell-panel`
                ]
            },
            cellPanelInfoCls() {
                return [
                    `${prefix}-cell-panel-info`
                ]
            }

        },
        methods: {
            go() {
               if (this.isLink) {
                   this.$router.push({
                       path: this.isLink
                   })
               }
               else if(this.problem) {
                   this.panelVisible = !this.panelVisible;
               }
               else {
                   this.$emit('click');
               }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl';
    .{$prefix}-cell {
        position: relative;
        margin: 0 $margin-base;
        //border-bottom: 1px solid $border-color;
        hairline('bottom');
        &-full {
            margin: 0  0 0 $margin-base;
        }
        &-no-border {
            //border: none;
            hairline-remove('bottom');
        }
        &-problem-icon {
            margin-right: $margin-base;
            transform: rotate(0);
            transition: transform $transition-time ease-in-out;
            &-visible {
                transform-origin: center;
                transition: transform $transition-time ease-in-out;
                transform: rotate(180deg);
            }
        }
        &-padding {
            padding: $padding-base $padding-base $padding-base 0;
        }
        &-problem {

        }
        &-panel {
            position: relative;
            padding-bottom: $padding-base;
            hairline('bottom');
            &-info {
                margin-left: $padding-base;
                background-color: $background-default;
                padding: $padding-base;
            }
        }
        &-flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>