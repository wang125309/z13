<template>
    <div v-show="visible" id="app">
        <router-view/>
        <Toast id="toast" ref="toast" type="warning"/>
    </div>
</template>

<script>
    import Toast from "./components/lib/Toast";
    import sprite from "./assets/sprite.png"
    export default {
        name: 'App',
        components: {
            Toast
        },
        data () {
            return {
                visible: false
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
            toggleToast(type, text) {
                let toast = this.$root.$children[0].$refs.toast;
                toast.setType(type);
                toast.setMessage(text);
                toast.show();
            }
        }
    }
</script>

<style lang="stylus">@import 'styles/base.styl';</style>
