<template>
    <LayoutBase>
        <Navbar v-show="false" arrowLeft>活动详情</Navbar>
        <ActivityDetailImage
            :src="data.image"
            :title="data.name"
            :date="data.begin_time.split('-')[0]"
            :location="data.address"
            :status="data.status === 0 ? '全部' : data.status === 1 ? '进行中' : '已结束'"
        />
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
                    <div class="activity-card-message">
                        <div class="activity-card-message-text">{{data.signupCount}} 人参与</div>
                        <div @click="goSignUps" class="activity-card-message-avatars">
                            <Avatar v-for="i in data.signups" :src="i.image" :key="'avatar' + i.id" size="0.09rem"/>
                            <Icon class="activity-card-arrow-right" @click="signUpMenu" type="arrow-right" size="0.05rem"/>
                        </div>
                    </div>
                </Cell>
            </CellGroup>
        </Card>
        <Panel noPadding>
            <ActivityCardItem title="活动介绍">
                <div v-html="data.description"/>
            </ActivityCardItem>
            <ActivityCardItem title="规则">
                <div v-html="data.rule_desc"/>
            </ActivityCardItem>
            <ActivityCardItem title="场地">
                <div v-html="data.descrsite_desciption"/>
            </ActivityCardItem>
            <ActivityCardItem title="评论" noBorder>
                <div class="activity-comment-area">
                    <div class="activity-empty-comment" v-if="comments.length === 0">快来发表评论吧</div>
                    <div v-else>
                        <div v-if="!showAllComments && index < 3 || showAllComments" v-for="(i, index) in comments" v-bind:key="'comment_' + i.id" class="activity-comment-item">
                            <div class="user-area">
                                <Avatar size="0.12rem" :src="i.userImage"/>
                            </div>
                            <div class="activity-comment-item-content">
                                <div class="activity-comment-item-content-body">
                                    <div class="flexable">
                                        <div class="activity-comment-item-content-user">{{i.userName}}</div>
                                        <div class="activity-comment-item-content-time">{{i.create_time}}</div>
                                    </div>
                                    <div class="flexable">
                                        <Icon @click="like(i.id)" v-if="!i.isPraise" size="0.055rem" class="like" type="unlike"/>
                                        <Icon @click="unlike(i.id)" v-if="i.isPraise" size="0.055rem" class="like" type="like"/>
                                        <div class="like-num">{{i.praise}}</div>
                                        <Icon @click="commentTo(i.id, i.userName)" size="0.06rem" class="comment-icon" type="comment-icon"/>
                                    </div>
                                </div>
                                <div>{{i.content}}</div>
                            </div>
                        </div>
                        <div v-if="!showAllComments && comments.length > 3" @click="more_comment" class="more-comment">查看更多评论</div>
                    </div>
                </div>
            </ActivityCardItem>
        </Panel>
        <div v-show="commentToolsVisible" @click="hiddenComment" class="comment-mask"/>
        <div v-show="commentToolsVisible" class="comment-tools">
            <form action="#" onsubmit="return false;">
                <Input
                    ref="commentInput"
                    @keypress="sendComment"
                    v-model="commentMessage"
                    @input="sendComment"
                    @focus="focus"
                    class="comment-input"
                    circle
                    :placeholder="placeholder"
                >
                    <span
                        @click="sendComment"
                        class="comment-input-btn">
                        发送
                    </span>
                </Input>
            </form>
        </div>
        <div class="sign-bar-placeholder"/>
        <div class="sign-bar">
            <div class="sign-item-wrap">
                <Icon @click="doComment" position="left" size="0.08rem" class="comment" type="comment"/>
                <Button @onClick="sign_up" :color="color" size="small-padding" width="0.2rem" circle className="sign-up-button">{{buttonText}}</Button>
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
                comments: [],
                commentToId: null,
                liked: false,
                buttonText: '我要报名',
                color: '',
                showAllComments: false,
                placeholder: '添加评论'
            }
        },
        created () {
            this.refresh();
            this.refresh_comments();
        },
        methods: {
            signUpMenu () {
                this.$router.push({
                    path: '/sign-up-list/' + this.$route.params.id
                })
            },
            like (id) {
                if (!this.liked) {
                    this.liked = true;
                    requests(`${API.comment}/${id}/praises`, {
                        type: 'PUT',
                        data: {
                            busiType: 1
                        }
                    }, (data) => {
                        this.refresh_comments();
                    }, (data) => {
                        this.$root.$children[0].toggleToast('fail', data.message);
                    })
                }

            },
            unlike (id) {
                if (!this.liked) {
                    this.liked = true;
                    requests(`${API.comment}/${id}/praises`, {
                        type: 'PUT',
                        data: {
                            busiType: 0
                        }
                    }, (data) => {
                        this.refresh_comments()
                    }, (data) => {
                        this.$root.$children[0].toggleToast('fail', data.message);
                    })
                }
            },
            commentTo (id, userName) {
                this.commentToId = id;
                this.placeholder = `回复${userName}`;
                this.doComment();
                setTimeout(() => {
                    this.$refs.commentInput.$el.children[0].focus();
                }, 100)
            },
            refresh () {
                requests(`${API.get_activitys}/${this.$route.params.id}/`, {
                    type: 'GET'
                }, (data) => {
                    this.data = data.data;
                    if (this.data.activityStatus === 0 &&
                        (this.data.people_limit === -1 ||
                            (this.data.people_limit !== -1 &&
                                this.data.signupCount < this.data.people_limit
                            )
                        )
                    ) {
                        this.buttonText = '我要报名';
                    }
                    else if (this.data.activityStatus === 1) {
                        this.buttonText = this.data.begin_time;
                    }
                    else if (this.data.activityStatus === 2) {
                        this.buttonText = '报名已结束';
                        this.color = '#DCDCDC';
                    }
                    else  if (this.data.activityStatus === 3) {
                        this.buttonText = '已报名';
                        this.color = '#ECC722';
                    }
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            refresh_comments () {
                requests(`${API.get_activitys}/${this.$route.params.id}/comments/`, {
                    type: 'GET'
                }, (data) => {
                    this.comments = pageResult(data.data, 1);
                    this.liked = false;
                }, (data) => {
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            doComment () {
                this.commentToolsVisible = true;
            },
            hiddenComment () {
                this.commentToolsVisible = false;
                this.placeholder = '添加回复';
                this.commentToId = null;
            },
            focus () {
                setTimeout(() => {
                    window.scrollTo(0, 1000000);
                }, 100)
            },
            sendComment ($evt) {
                requests(`${API.get_activitys}/${this.$route.params.id}/comments`, {
                    type: 'POST',
                    data: this.commentToId ? {
                        content: this.commentMessage,
                        parentId: this.commentToId
                    } : {
                        content: this.commentMessage
                    }
                }, (data) => {
                    this.hiddenComment();
                    this.commentMessage = '';
                    this.refresh_comments();
                }, (data) => {
                    this.$router.push({
                        path: '/login'
                    })
                    this.$root.$children[0].toggleToast('fail', data.message);
                })
            },
            more_comment ($evt) {
                this.showAllComments = true;
            },
            sign_up () {
                if (this.data.activityStatus === 0 &&
                    (this.data.people_limit === -1 ||
                        (this.data.people_limit !== -1 &&
                            this.data.signupCount < this.data.people_limit
                        )
                    )
                ) {
                    requests(`${API.get_activitys}/${this.$route.params.id}/signups`, {
                        type: 'POST'
                    }, (data) => {
                        this.refresh();
                    }, (data) => {
                        if (data.response.status === 401) {
                            this.$router.push({
                                path: '/login'
                            })
                            this.$root.$children[0].toggleToast('fail', '报名活动请先登录');
                        } else {
                            this.$root.$children[0].toggleToast('fail', data.message);
                        }
                    })
                }
            },
            goSignUps () {
                this.$router.push({
                    path: '/sign-up-list/' + this.$route.params.id
                })
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
    .comment-input-btn {
        color: $brand-color;
        padding-left: $padding-base;
    }
    .sign-bar-placeholder {
        height: $padding-base * 5;
    }
    .sign-item-wrap {
        padding: 0 $padding-base;
    }
    .activity-empty-comment {
        padding: $padding-small;
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
                font-size: $font-size-base;
                &-body {
                    display: flex;
                    padding-bottom: $padding-small;
                    justify-content: space-between;
                }
                &-user {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 0.17rem;
                }
                &-time {
                    margin-left: $margin-base;
                    color: $font-second;
                }
            }
            &:last-child {
                hairline-remove('bottom');
            }
        }
    }
    .flexable {
        display: flex;
        justify-content: space-between;
    }
    .like {
        margin-right: $margin-small;
    }
    .like-num {
        color: $font-second;
    }
    .comment-icon {
        margin-left: $margin-small;
    }
    .more-comment {
        padding: $padding-small;
        text-align: center;
        font-size: $font-size-base;
        color: $font-second;
    }
    .comment-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
    }
    .activity-card-message {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .activity-card-message-avatars {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .activity-card-arrow-right {
        margin-left: $padding-base;
    }
</style>
