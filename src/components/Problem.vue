<template>
    <LayoutBase>
        <Navbar arrow-left>常见问题</Navbar>
        <CellGroup full>
            <Cell  v-bind:key="i.id" v-for="i in data" full padding problem>
                {{i.problem}}
                <template slot="answer">
                   {{i.solution}}
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
    import requests from '../service/service'
    import API from '../service/api'
    import pageResult from "../service/pageResult";

    export default {
        components: {
            Navbar,
            LayoutBase,
            CellGroup,
            Cell
        },
        data () {
            return {
                data: {}
            }
        },
        methods:{
            refresh (page) {
                requests(API.get_problem, {
                    type: 'GET'
                }, (data) => {
                    if (page === 1) this.data = [];
                    Object.assign(this.data, pageResult(data.data, page));
                }, (data) => {
                    console.log(data)
                    this.$root.$children[0].toggleToast('warning', data)
                })
            }
        },
        created () {
            this.refresh(1)
        }
    }
</script>
<style scoped lang="stylus">

</style>