<template>
    <div ref="avatarArea"  :class="avatarAreaCls">
        <div v-show="!cutVisible" :class="avatarCls" :style="getImage">

            <!--<div v-show="cutVisible" :class="avatarMaskCls"></div>-->
            <!--<div v-show="cutVisible" ref="cutArea" :class="cutAreaCls">-->
                <!--<div ref="cutAreaAvatar" :style="getImage" :class="cutAreaAvatarCls"></div>-->
                <!--<div @touchstart="cutStart" @touchend="cutEnd" @touchmove="cut" ref="cutTools" :class="cutToolsCls">-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <img id="clipArea" :src="image" ref="clipArea" v-show="cutVisible"/>
    </div>
</template>

<script>
    import Cropper from 'cropperjs'


    import EXIF from 'exif-js/exif'
    const prefix = 'z13';
    const rotateImg = (img, direction, canvas) => {
        let min_step = 0;
        let max_step = 3;
        if (img == null)return;
        let height = img.height;
        let width = img.width;
        //var step = img.getAttribute('step');
        let step = 2;
        if (step == null) {
            step = min_step;
        }
        if (direction === 'right') {
            step++;
            step > max_step && (step = min_step);
        } else {
            step--;
            step < min_step && (step = max_step);
        }
        let degree = step * 90 * Math.PI / 180;
        let ctx = canvas.getContext('2d');

        switch (step) {
            case 0:
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0);
                break;
            case 1:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, 0, -height);
                break;
            case 2:
                canvas.width = width;
                canvas.height = height;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, -height);
                break;
            case 3:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, 0);
                break;
        }
    };
    export default {
        computed: {
            cutMaskCls () {
                return [
                    `${prefix}-cut-mask`
                ]
            },
            avatarCls () {
                return [
                    `${prefix}-avatar`
                ]
            },
            cutAreaCls () {
                return [
                    `${prefix}-cut-area`
                ]
            },
            avatarAreaCls () {
                return [
                    `${prefix}-avatar-area`
                ]
            },

            avatarMaskCls () {
                return [
                    `${prefix}-avatar-mask`
                ]
            },
            cutAreaAvatarCls () {
                return [
                    `${prefix}-cut-area-avatar`
                ]
            },
            cutToolsCls () {
                return [
                    `${prefix}-cut-tools`
                ]
            },
            cutToolsInnerCls () {
                return [
                    `${prefix}-cut-tools-inner`
                ]
            },
            getImage () {
                return {
                    'background-image': 'url(' + this.image + ')'
                }
            }
        },
        mounted () {
        },
        data () {
            return {
                left: 0,
                top: 0,
                flag: false,
                image: '',
                cutVisible: true,
                baseX: 0,
                baseY: 0,
                imageWidth: 0,
                imageHeight: 0,
                scale: 1
            }
        },
        watch: {
            showCutArea () {

            }
        },
        props: {
            showCutArea: false
        },
        methods: {
            completeCliper (uploadType) {
                let _self = this;
                let base64 = cropper.getCroppedCanvas().toDataURL();
                console.log(base64)
                let img = new Image()
                img.src = base64
                let expectWidth, expectHeight
                img.onload = function () {
                    let _this = this;
                    if (_this.naturalWidth > _this.naturalHeight && _this.naturalWidth > 750) {
                        expectWidth = 750;
                        expectHeight = expectWidth * _this.naturalHeight / _this.naturalWidth;
                    } else if (_this.naturalHeight > _this.naturalWidth && _this.naturalHeight > 750) {
                        expectHeight = 750;
                        expectWidth = expectHeight * _this.naturalWidth / _this.naturalHeight;
                    }
                    _self.imageWidth = expectWidth;
                    _self.imageHeight = expectHeight;
                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    canvas.width = expectWidth;
                    canvas.height = expectHeight;
                    ctx.drawImage(_this, 0, 0, expectWidth, expectHeight);
                    base64 = canvas.toDataURL()
                }

                _self.$emit('uploaded', base64)
                _self.image = base64;
            },
            startCliper (imgId) {
                let _self = this;
                this.reRotate(imgId);
                _self.cutVisible = true;

            },
            cutStart ($evt) {
                if (this.left === 0 && this.top === 0) {
                    this.flag = true;
                    this.baseX = 0;
                    this.baseY = 0;
                }
                else {
                    let cutAreaAvatar = this.$refs.cutAreaAvatar;
                    this.baseX = parseFloat(cutAreaAvatar.style.backgroundPositionX);
                    this.baseY = parseFloat(cutAreaAvatar.style.backgroundPositionY);
                }
                let pageX = $evt.touches[0].pageX;
                let pageY = $evt.touches[0].pageY;
                this.left = pageX;
                this.top = pageY;
            },
            cutEnd ($evt) {

            },
            cut ($evt) {
                $evt.preventDefault();
                if (this.flag) {
                    let cutAreaAvatar = this.$refs.cutAreaAvatar;
                    let cutTools = this.$refs.cutTools;
                    let cutArea = this.$refs.cutArea;
                    let pageX = $evt.touches[0].pageX;
                    let pageY = $evt.touches[0].pageY;
                    let w = this.baseX - pageX + this.left;
                    let h = this.baseY - pageY + this.top;
                    if (this.imageHeight > this.imageWidth) {
                        if (w < 0)
                            w = 0;
                        if (w > this.scale * this.imageWidth - this.imageWidth)
                            w = this.scale * this.imageWidth - this.imageWidth;
                        if (h > 0)
                            h = 0;
                        if (h < - this.scale * this.imageHeight * (cutTools.clientWidth / this.imageWidth) + parseFloat(cutTools.clientHeight))
                            h = - this.scale * this.imageHeight * (cutTools.clientWidth / this.imageWidth) + parseFloat(cutTools.clientHeight);
                        cutAreaAvatar.style.backgroundPositionX = w + 'px';
                        cutAreaAvatar.style.backgroundPositionY = h + 'px';
                    }
                    else if (this.imageHeight < this.imageWidth) {
                        if (h < 0)
                            h = 0;
                        if (h > this.scale * this.imageHeight - this.imageHeight)
                            h = this.scale * this.imageHeight - this.imageHeight;
                        if (w > 0)
                            w = 0;
                        if (w < - this.scale * this.imageWidth * (cutTools.clientHeight / this.imageHeight) + parseFloat(cutTools.clientWidth))
                            w = - this.scale * this.imageWidth * (cutTools.clientHeight / this.imageHeight) + parseFloat(cutTools.clientWidth);
                        cutAreaAvatar.style.backgroundPositionX = w + 'px';
                        cutAreaAvatar.style.backgroundPositionY = h + 'px';
                    }
                    else if (this.imageHeight === this.imageWidth){
                        cutAreaAvatar.style.backgroundPositionX = w + 'px';
                        cutAreaAvatar.style.backgroundPositionY = h + 'px';
                    }
                    this.baseX = parseFloat(cutAreaAvatar.style.backgroundPositionX);
                    this.baseY = parseFloat(cutAreaAvatar.style.backgroundPositionY);
                }
            },
            reRotate (uploadType) {
                let _self = this;
                let file = document.getElementById(uploadType).files[0];
                let Orientation = null;
                EXIF.getData(file, function () {
                    Orientation = EXIF.getTag(this, 'Orientation');
                });
                let image = new Image();
                let freader = new FileReader();
                let base64, cc, can = null;
                freader.onloadend = (e) => {
                    let image = new Image();
                    image.src = e.target.result;
                    image.onload = function () {
                        let _this = this;
                        let expectWidth = _this.naturalWidth;
                        let expectHeight = _this.naturalHeight;

                        if (_this.naturalWidth > _this.naturalHeight && _this.naturalWidth > 750) {
                            expectWidth = 750;
                            expectHeight = expectWidth * _this.naturalHeight / _this.naturalWidth;
                        } else if (_this.naturalHeight > _this.naturalWidth && _this.naturalHeight > 750) {
                            expectHeight = 750;
                            expectWidth = expectHeight * _this.naturalWidth / _this.naturalHeight;
                        }
                        _self.imageWidth = expectWidth;
                        _self.imageHeight = expectHeight;
                        let canvas = document.createElement("canvas");
                        let ctx = canvas.getContext("2d");
                        canvas.width = expectWidth;
                        canvas.height = expectHeight;
                        ctx.drawImage(_this, 0, 0, expectWidth, expectHeight);
                        can = canvas;
                        cc = canvas.toDataURL("image/jpeg", 1);

                        if (Orientation !== "" && Orientation !== 1) {
                            switch (Orientation) {
                                case 6: //顺时针（向左）90度旋转
                                    rotateImg(_this, 'left', canvas);
                                    let temp = _self.imageHeight
                                    _self.imageHeight = _self.imageWidth
                                    _self.imageWidth = temp
                                    break;
                                case 8: //逆时针（向右）90度旋转
                                    rotateImg(_this, 'right', canvas);
                                    let temp1 = _self.imageHeight
                                    _self.imageHeight = _self.imageWidth
                                    _self.imageWidth = temp1
                                    break;
                                case 3: //180度旋转
                                    rotateImg(_this, 'right', canvas);//转两次
                                    rotateImg(_this, 'right', canvas);
                                    break;
                            }
                        }
                        base64 = can.toDataURL("image/jpeg", 1);
                        _self.image = base64;
                        new Promise((resolve, reject) => {
                            let img = new Image()
                            img.src = _self.image
                            img.onload = () => {
                                resolve()
                            }
                        }).then(() => {
                            const image = _self.$refs.clipArea;
                            window.cropper = new Cropper(image, {
                                aspectRatio: 1 / 1,
                                minCanvasHeight: document.body.clientWidth,
                                minContainerHeight: document.body.clientWidth,
                                crop(event) {
                                },
                            });
                        })
                    }
                }
                freader.readAsDataURL(file);
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../styles/var.styl';
    @import '~cropperjs/dist/cropper.min.css';
    .{$prefix}-avatar {
        width: 100%;
        height: 1rem;
        position: relative;
        /*background-size: 1rem auto;*/
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left top;
    }
    .{$prefix}-avatar-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $background-mask;
        z-index: 10;
    }
    .{$prefix}-cut-mask {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;
    }
    .{$prefix}-cut-area {
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1rem;

        &-avatar {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
            setBackgroundImage('../../assets/avatar.png');
            /*background-size: 1rem auto;*/
            background-size: cover;
            background-position: left top;
        }
    }
    .{$prefix}-cut-tools {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        setBackgroundImage('../../assets/cut-area.png');
        z-index: 11;
    }
    .{$prefix}-avatar-area {
        overflow: hidden;
    }
    #clipArea {
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1rem;
    }
</style>
