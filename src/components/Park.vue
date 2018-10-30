<template>
    <LayoutBase>
        <title>停车服务</title>
        <div class="park-area">
            <div class="park-area-title">
                输入车牌查找爱车
            </div>
            <div class="park-area-phone-number">
                <div class="park-phone"></div>
                <div class="park-phone"></div>
                <div class="park-phone"></div>
                <div class="park-phone"></div>
                <div class="park-phone"></div>
                <div class="park-phone"></div>
                <div class="park-phone"></div>
                <div class="park-phone"></div>
            </div>
            <div class="park-area-button-area">
                <button class="park-button">即将上线，敬请期待</button>
                <a class="park-link" href="javascript:;">绑定您的爱车，一键查看停车位置</a>
            </div>
        </div>
    </LayoutBase>
</template>
<script>
    import LayoutBase from './lib/LayoutBase'
    export default {
        components: {LayoutBase}
    }
</script>
<style lang="stylus">
    .park-area {
        background-color: #ffffff;
        position: absolute;
        width: 92%;
        height: 96%;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        border: 1px solid #dcdcdc;
        &-title {
            font-size: 0.07rem;
            padding: 0.4rem 0 0.2rem 0;
            text-align: center;
        }
        &-phone-number {
            display: flex;
            justify-content: space-between;
            padding: 0 0.04rem;
            .park-phone {
                width: 0.08rem;
                height: 0.12rem;
                border: 1px solid #dcdcdc;
            }
        }
        &-button-area {
            padding: 0.2rem 0;
            text-align: center;
            .park-button {
                margin: 0 auto;
                display: block;
                padding: 0.04rem 0.08rem;
                background-color: #dcdcdc;
                border: 1px solid #979797;
                border-radius: 0.1rem;
                color: #979797;
                font-size: 0.05rem;
                text-align: center;
            }
            .park-link {
                color: #979797;
                display: block;
                margin-top: 0.15rem;
            }
        }
    }
</style>
