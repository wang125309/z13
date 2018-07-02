<template>
    <LayoutBase>
        <Navbar arrow-left>404</Navbar>
        <div class="main">
            <Icon type="404" size="0.5rem"/>
        </div>
    </LayoutBase>
</template>
<script>
    import Navbar from "./lib/Navbar";
    import Icon from "./lib/Icon";
    import LayoutBase from "./lib/LayoutBase";
    export default {
        components: {LayoutBase, Icon, Navbar}
    }
</script>
<style lang="stylus">
    @import '../styles/var.styl';
    .main {
        margin-top: $margin-large * 5;
    }
</style>