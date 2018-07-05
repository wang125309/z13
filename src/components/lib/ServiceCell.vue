<template>
    <div @click="handleClick" :class="serviceCellCls">
        <Icon v-show="active" :type="getTypeActive" size="0.09rem"/>
        <Icon v-show="!active" :type="getType" size="0.09rem"/>
        <div :class="serviceCellTextCls">{{ text }}</div>
    </div>
</template>
<script>
    import Icon from "./Icon";
    const prefix = 'z13';
    export default {
        props: {
            type: [String],
            text: [String],
            noBorder: [Boolean],
            className: [String, Array],
            full: [Boolean]
        },
        components: {
            Icon
        },
        computed: {
            serviceCellCls() {
                return [
                    `${prefix}-service-cell`, {
                        [`${prefix}-service-cell-no-board`]: this.noBoard,
                        [`${prefix}-service-cell-active`]: this.active,
                        [`${this.className}`]: this.className,
                        [`${prefix}-service-cell-full`]: this.full
                    }
                ]
            },
            serviceCellTextCls() {
                return [
                    `${prefix}-service-cell-text`
                ]
            },
            getTypeActive() {
                return `${this.type}-active`;
            },
            getType() {
                return `${this.type}`;
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            handleClick() {
                this.active = true;
                setTimeout(() => {
                    this.active = false;
                    this.$emit('click');
                },150);
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl';
    @import '../../styles/hairline.styl';
    .{$prefix}-service-cell {
        position: relative;
        hairline('right')
        margin: $margin-base 0;
        //border-right: 1px solid $border-color;
        flex: 1;
        &:last-child {
            //border: 0;
            hairline-remove('right');
        }
        &-text {
            text-align: center;
            padding: $padding-small 0 0 0;
        }
        &-active {
            color: $brand-color;
        }
        &-full {
            margin: 0;
            padding: $padding-base;
        }
    }
</style>