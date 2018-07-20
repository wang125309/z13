<template>
    <LayoutBase>
        <Navbar arrowLeft>活动详情</Navbar>
        <ActivityDetailImage :src="data.image" :title="data.name" :status="data.status === 0 ? '全部' : data.status === 1 ? '进行中' : '已结束'"  date="2017-06-03" location="平顶山"/>
        <Card noPadding>
            <CellGroup noMargin>
                <Cell padding>
                    <div class="activity-card-title">报名时间：</div>
                    <div class="activity-card-message">{{data.signup_begin_time.split(' ')[0]}}  {{data.signup_end_time.split(' ')[0]}}</div>
                </Cell>
                <Cell padding>
                    <div class="activity-card-title">活动时间：</div>
                    <div class="activity-card-message">{{data.begin_time.split(' ')[0]}}  {{data.end_time.split(' ')[0]}}</div>
                </Cell>
                <Cell padding>
                    <div class="activity-card-title">活动地点：</div>
                    <div class="activity-card-message">{{data.address}}</div>
                </Cell>
                <Cell padding withoutBorder>
                    <div class="activity-card-title">活动参与：</div>
                    <div class="activity-card-message">{{data.signupCount}} 人参与</div>
                </Cell>
            </CellGroup>
        </Card>
        <Panel noPadding>
            <ActivityCardItem title="活动介绍">
                {{data.description}}
            </ActivityCardItem>
            <ActivityCardItem title="规则">
                {{data.rule_desc}}
            </ActivityCardItem>
            <ActivityCardItem title="场地">
                {{data.site_desc}}
            </ActivityCardItem>
            <ActivityCardItem title="评论" noBorder>
                <div class="activity-comment-area">
                    <div v-if="comments.length === 0">快来发表评论吧</div>
                    <div v-else>
                        <div v-for="i in comments" v-bind:key="'comment_' + i.id" class="activity-comment-item">
                            <div class="user-area">
                                <Avatar size="0.12rem" :src="i.userImage"/>
                            </div>
                            <div class="activity-comment-item-content">
                                <div>{{i.userName}}</div>
                                <div>{{i.content}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ActivityCardItem>
        </Panel>
        <div v-if="commentToolsVisible" @click="hiddenComment" class="comment-mask"/>
        <div v-if="commentToolsVisible" class="comment-tools">
            <form action="#" onsubmit="return false;">
                <Input @keypress="sendComment" v-model="commentMessage" @input="sendComment" @focus="focus" type="done" class="comment-input" circle placeholder="添加评论"/>
            </form>
        </div>
        <div class="sign-bar-placeholder"/>
        <div class="sign-bar">
            <div class="sign-item-wrap">
                <Icon @click="doComment" position="left" size="0.08rem" class="comment" type="comment"/>
                <Button size="small-padding" width="0.2rem" circle className="sign-up-button">我要报名</Button>
            </div>
        </div>
    </LayoutBase>
</template>

<script>
    import Navbar from './lib/Navbar'
    import LayoutBase from './lib/LayoutBase';
    import ActivityDetailImage from "./lib/ActivityDetailImage";
    import Card from "./lib/Card";
    import CellGroup from "./lib/CellGroup";
    import Cell from "./lib/Cell";
    import Button from "./lib/Button";
    import ActivityCardItem from "./lib/ActivityCardItem";
    import Panel from "./lib/Panel";
    import Icon from "./lib/Icon";
    import Toast from "./lib/Toast";
    import requests from "../service/service"
    import API from "../service/api"
    import Input from "./lib/Input";
    import pageResult from "../service/pageResult";
    import Avatar from "./lib/Avatar";
    export default {
        name: 'Activity',
        components: {
            Avatar,
            Input,
            Icon,
            Panel,
            ActivityCardItem,
            Navbar,
            Button,
            Card,
            LayoutBase,
            ActivityDetailImage,
            CellGroup,
            Cell,
            Toast
        },
        data () {
            return {
                active: 0,
                data: {
                    signup_begin_time: ' ',
                    signup_end_time: ' ',
                    begin_time: ' ',
                    end_time: ' '
                },
                commentToolsVisible: false,
                commentMessage: '',
                comments: []
            }
        },
        created () {
            this.refresh();
            this.refresh_comments();
        },
        methods: {
            refresh () {
                requests(`${API.get_activitys}/${this.$route.params.id}/`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            refresh_comments () {
                requests(`${API.get_activitys}/${this.$route.params.id}/comments/`, {
                    type: 'GET'
                }, (data) => {
                    this.comments = pageResult(data.data, 1);
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            doComment () {
                this.commentToolsVisible = true;
            },
            hiddenComment () {
                this.commentToolsVisible = false;
            },
            focus () {
                window.scrollTo(0, 1000000);
            },
            sendComment ($evt) {
                console.log($evt)
                if ($evt.charCode === 13 && this.commentMessage.length) {
                    requests(`${API.get_activitys}/${this.$route.params.id}/comments`, {
                        type: 'POST',
                        data: {
                            content: this.commentMessage
                        }
                    }, (data) => {
                        this.hiddenComment();
                        this.commentMessage = '';
                    }, (data) => {
                        this.$root.$children[0].toggleToast('fail', data.message);
                    })
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/var.styl';
    @import '../styles/hairline.styl';
    .activity-card {
        margin-top: $margin-small;
        &-title {
            color: $font-second;
        }
        &-message {
            padding-top: $padding-small;
        }
    }
    .sign-bar {
        position: fixed;
        padding: $padding-base 0;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: $white;
        z-index: 100;
        //border-top: 1px solid $border-color;
        hairline('top');
    }
    .comment {
        left: $margin-base !important;
    }
    .comment-mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 101;
    }
    .comment-tools {
        background-color: $background-body;
        position: fixed;
        bottom: 0;
        z-index: 102;
        hairline('top');
        width: 100%;
    }
    .comment-input {
        padding: $padding-base;
    }
    .sign-bar-placeholder {
        height: $padding-base * 5;
    }
    .sign-item-wrap {
        padding: 0 $padding-base;
    }
    .activity-comment-area {
        background-color: $background-default;
        .activity-comment-item {
            display: flex;
            padding: $padding-small;
            position: relative;
            hairline('bottom');
            .user-area {
            }
            .activity-comment-item-content {
                padding: 0 0 0 $padding-small;
                flex: 1;
            }
            &:last-child {
                hairline-remove('bottom');
            }
        }
    }
</style>
