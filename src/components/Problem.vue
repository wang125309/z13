<template>
    <LayoutBase>
        <Navbar arrow-left>常见问题</Navbar>
        <CellGroup full>
            <Cell full padding problem>
                常见问题1
                <template slot="answer">
                    这个问题没有答案
                </template>
            </Cell>
            <Cell full padding problem withoutBorder>
                常见问题2
                <template slot="answer">
                    这个问题也没有答案
                </template>
            </Cell>
        </CellGroup>
    </LayoutBase>
</template>
<script>
    import LayoutBase from './lib/LayoutBase'
    import CellGroup from './lib/CellGroup'
    import Cell from './lib/Cell'
    import Navbar from "./lib/Navbar";
    export default {
        components: {
            Navbar,
            LayoutBase,
            CellGroup,
            Cell
        },

    }
</script>
<style scoped lang="stylus">

</style>