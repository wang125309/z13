<template>
    <div :class="starPanelCls">
        <slot/>
    </div>
</template>

<script>
    const prefix = 'z13'
    export default {
        computed: {
            starPanelCls () {
                return [
                    `${prefix}-star-panel`
                ]
            }
        }
    }
</script>