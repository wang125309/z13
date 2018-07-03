<template>
    <div @click="handleClick" :class="serviceCellCls">
        <Icon :type="getType" size="0.1rem"/>
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
            className: [String, Array]
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
                        [`${this.className}`]: this.className
                    }
                ]
            },
            serviceCellTextCls() {
                return [
                    `${prefix}-service-cell-text`
                ]
            },
            getType() {
                let type = `${this.type}`;
                if (this.active) {
                    type += '-active';
                }
                return type;
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
                },100);
                this.$emit('click');
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

    }
</style>