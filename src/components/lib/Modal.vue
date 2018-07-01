<template>
    <div :class="modalWrapCls">
        <div :class="modalCls">
            <div :class="modalHeaderCls">
                {{title}}
            </div>
            <div :class="modalBodyCls">
                <slot></slot>
            </div>
            <div :class="modalFooterCls">
                <div v-for="i in buttons" :class="modalButtonCls" @click="i.event">{{i.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    const prefix = 'z13';
    export default {
        computed: {
            modalWrapCls() {
                return [
                    `${prefix}-modal-wrap`
                ]
            },
            modalCls() {
                return [
                    `${prefix}-modal`
                ]
            },
            modalHeaderCls() {
                return [
                    `${prefix}-modal-header`
                ]
            },
            modalBodyCls() {
                return [
                    `${prefix}-modal-body`
                ]
            },
            modalFooterCls() {
                return [
                    `${prefix}-modal-footer`
                ]
            },
            modalButtonCls() {
                return [
                    `${prefix}-modal-button`
                ]
            }
        }
    }
</script>