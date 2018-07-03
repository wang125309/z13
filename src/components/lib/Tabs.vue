<template>
    <div :class="tabsCls">
        <slot></slot>
    </div>
</template>

<script>
    import TabsCell from './TabsCell'
    const prefix = 'z13';
    export default {
        props: {
            active: [Number]
        },
        components: {
            TabsCell
        },
        computed: {
            tabsCls() {
                return [
                    `${prefix}-tabs`
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import '../../styles/var.styl'
    @import '../../styles/hairline.styl'

    .{$prefix}-tabs {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        //border-bottom: 1px solid $border-color;
        hairline('bottom');
        background-color: $white;
    }

</style>