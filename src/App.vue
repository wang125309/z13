<template>
    <div id="app">
        <router-view/>
        <Toast id="toast" ref="toast" type="warning"/>
    </div>
</template>

<script>
    import Toast from "./components/lib/Toast";
    export default {
        name: 'App',
        components: {
            Toast
        },
        methods: {
            toggleToast() {
                let toast = this.$root.$children[0].$refs.toast;
                toast.type = 'success';
                toast.message = '修改成功';
                toast.show();
            }
        }
    }
</script>

<style lang="stylus">@import 'styles/base.styl';</style>
