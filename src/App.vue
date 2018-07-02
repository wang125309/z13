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
    }
</script>

<style lang="stylus">@import 'styles/base.styl';</style>
