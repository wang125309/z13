<template>
    <LayoutBase>
        <Navbar arrow-left>大厦布局</Navbar>
        <SearchInput/>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import SearchInput from "./lib/SearchInput";

    export default {
        name: 'Login',
        components: {
            SearchInput,
            Navbar,
            LayoutBase
        },
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
</style>
