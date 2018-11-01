<template>
    <div>
        <div id="app" :class="visible? 'app-visible': ''">
            <router-view/>
            <Toast id="toast" ref="toast" type="warning"/>
        </div>
        <div v-show="!visible" :class="!visible? 'spin-hidden': ''">
            <img class="spin" :src="spin"/>
        </div>
    </div>
</template>

<script>
    import Toast from "./components/lib/Toast";
    import sprite from "./assets/sprite.png";
    import spin from "./assets/spin.svg";
    export default {
        name: 'App',
        components: {
            Toast
        },
        data () {
            return {
                visible: false,
                spin: spin
            }
        },
        mounted () {
            // lazy load sprite
            let image = new Image();
            image.src = sprite;
            image.onload = () => {
                this.visible = true;
            }
        },
        methods: {
            toggleToast(type, text, hold=0) {
                let toast = this.$root.$children[0].$refs.toast;
                toast.setType(type);
                toast.setMessage(text);
                toast.show(hold);
            },
            hiddenToast () {
                let toast = this.$root.$children[0].$refs.toast;
                toast.hide()
            }
        }
    }
</script>

<style lang="stylus">
    @import 'styles/base.styl';
    .spin {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%);
        width: 0.1rem;
        &.spin-hidden {
            transition: opacity $transition-time ease-in-out;
            opacity: 0;
        }
    }
    #app {
        opacity: 0;
        transition: opacity $transition-time ease-in-out, visibility $transition-time ease-in-out;
        visibility: hidden;
        &.app-visible {
            opacity: 1;
            visibility: visible;
            transition: opacity $transition-time ease-in-out, visibility $transition-time ease-in-out;
        }
    }


</style>
