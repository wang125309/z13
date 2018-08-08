<template>
    <LayoutBase>
        <Navbar arrow-left>企业选择</Navbar>
        <Panel class-name="panel" no-padding>
            <CellGroup full no-margin>
                <Cell @click="go(i)" padding full v-for="i in data" :key="'company' + i.id">
                    {{i.name}}
                </Cell>
            </CellGroup>
        </Panel>
    </LayoutBase>
</template>

<script>
    import LayoutBase from './lib/LayoutBase'
    import Navbar from './lib/Navbar'
    import Cell from './lib/Cell'
    import CellGroup from './lib/CellGroup'
    import Input from './lib/Input'
    import Button from './lib/Button'
    import Panel from "./lib/Panel";
    import request from "../service/service";
    import API from '../service/api'
    import pageResult from '../service/pageResult'

    export default {
        name: 'Login',
        components: {
            Panel,
            Button,
            Navbar,
            CellGroup,
            Cell,
            Input,
            LayoutBase
        },
        data () {
            return {
                data: []
            }
        },
        created () {
            this.refresh();
        },
        methods: {
            go (i) {
                this.$store.dispatch('SET_INDENTIFICATION_COMPANY', i);
                this.$router.push({
                    path: '/company-identification/'
                })
            },
            refresh () {
                request(API.company, {
                    type: 'GET'
                }, (data) => {
                    this.data = pageResult(data.data)
                }, (data) => {
                    _this.$root.$children[0].toggleToast('fail', data.message);
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    .panel {
        margin-top: $margin-large;
    }
</style>
