<template>
    <div @touchstart.prevent.once="gtouchStart()" style="width:100%; height:100%; position:absolute;">
        <div class="logo"></div>
        <div class="swiper-container" id="banner">
            <div class="swiper-wrapper">
                <div v-for="item in max.length" :key="item" class="swiper-slide" :id="`imageToFile${item}`"
                     :style="{background: max[item-1]}">
                    <!--                    第一页-->
                    <div v-if="item===1" class="headline">阿姨别这样</div>
                    <!--                    第二页 ss===1只有在当前页的时候才显示-->
                    <test v-if="item===2&&ss===1" :open="open1" class="test"></test>
                    <!--                    第三页 -->
                    <test v-if="item===3&&ss===2" :open="open2" class="test"></test>
                    <img v-if="item===3" class="show" src="../assets/images/4.4.png" height="354" width="457"/>
                    <!--                    第四页-->
                    <div v-if="item===4" class="uploading" ref="imageToFile">
                        <!-- 海报html元素 -->
                        <div v-if="img" @click="img=''" class="close">关闭</div>
                        <img crossOrigin="anonymous" class="newImg" :src="img" v-if="img"/>
                        <span class="hint" v-if="hint">{{hint=== 0?'':hint===1 ? '上传的图片格式不对哦':'图片太大了请选择3m以下的呀'}}</span>
                        <img :src="pic" class="pic" id="pic" v-if="pic">
                        <template v-if="conceal">
                            <button type="button" class="bt1" style="  left: 60%;" @click.prevent.stop="screenShot">点我截图</button>
                            <input type="button" class="bt1" value="点我上传">
                            <input type="file" class="bt1" style="opacity: 0" @change.prevent.stop="getFile" ref="inputer">
                        </template>
                    </div>
                    <!--                    第五页-->
                    <form v-show="item===5" class="fo">
                        <span>您的名字啊~</span>
                        <input type="text" v-model="form.name">
                        <span>您的联系方式~</span>
                        <input type="text" v-model="form.phone">
                        <br><br>
                        <label>
                            <input type="submit" style="margin-bottom: 5%;width: 35%" value="提交" @click.prevent="tj()">
                        </label>
                    </form>
                    <div style="color: white">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="thumb-list">
            <div class="swiper-container thumb" :key="index" v-for="(item,index) in imgA">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img :src="item.serial">
                    </div>
                    <div class="swiper-slide">
                        <img :src="item.min">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Swiper = require('../assets/js/swiper.min')
    import test from "./test";
    import html2canvas from 'html2canvas'
    import EXIF from 'exif-js';
    export default {
        name: "three",
        data() {
            return {
                max: [
                    `url(${require('../assets/images/maxa.jpg')})`,
                    `url(${require('../assets/images/maxb.jpg')})`,
                    `url(${require('../assets/images/maxc.jpg')})`,
                    `url(${require('../assets/images/maxd.jpg')})`,
                    `url(${require('../assets/images/bj.jpg')})`,
                ],
                imgA: [
                    {
                        serial: require('../assets/images/1.jpg'),
                        min: require('../assets/images/mina.jpg'),
                    },
                    {
                        serial: require('../assets/images/2.jpg'),
                        min: require('../assets/images/minb.jpg'),
                    },
                    {
                        serial: require('../assets/images/3.jpg'),
                        min: require('../assets/images/minc.jpg'),
                    },
                    {
                        serial: require('../assets/images/4.jpg'),
                        min: require('../assets/images/mind.jpg'),
                    },
                    {
                        serial: require('../assets/images/2.jpg'),
                        min: require('../assets/images/minb.jpg'),
                    },
                ],
                img: '',
                pic: '',
                aa: '',
                conceal: true,
                transmit: null,
                hint: '',
                ss: null,
                form: {
                    name: 'aaa',
                    phone: 1234,
                },
                open1: {
                    //需要做动效显示的字
                    name: '这里是显示的字体啊啊',
                    //one的数量决定第一个动画里显示的字数，如果one大于name的长度只会开启两个动画  所有的动画参考 https://animate.style/
                    one: 4,
                    //在满足one小于name长度情况下，第一个字体动画的样式(总共三个样式)  animate__faster快速
                    oneClass: 'animate__backInLeft animate__fast',
                    //在满足one小于name长度情况下，字体为偶数的动画样式(总共三个样式)，不满足情况下为基数(总共2个样式)
                    twoClass: 'animate__bounceInDown',
                    //在满足one小于name长度情况下，字体为基数的动画样式(总共三个样式)，不满足情况下为偶数(总共2个样式)
                    threeClass: 'animate__bounceInUp',
                    //在满足one小于name长度情况下，第一个字体的颜色(总共三个样式)，不满足情况下这个颜色没用(总共2个样式)
                    aa: 'red  !important',
                    //在满足one小于name长度情况下，字体为偶数的动画样式(总共三个样式)，不满足情况下为基数(总共2个样式)
                    bb: 'white',
                    //在满足one小于name长度情况下，字体为基数的动画样式(总共三个样式)，不满足情况下为偶数(总共2个样式)
                    cc: 'cyan !important',
                },
                open2: {
                    //需要做动效显示的字
                    name: '啊啊啊啊这里是第三页啊',
                    //one的数量决定第一个动画里显示的字数，如果one大于name的长度只会开启两个动画  所有的动画参考 https://animate.style/
                    one: 0,
                    //在满足one小于name长度情况下，第一个字体动画的样式(总共三个样式)  animate__faster快速
                    oneClass: 'animate__backInLeft animate__fast',
                    //在满足one小于name长度情况下，字体为偶数的动画样式(总共三个样式)，不满足情况下为基数(总共2个样式)
                    twoClass: 'animate__zoomInLeft animate__fast',
                    //在满足one小于name长度情况下，字体为基数的动画样式(总共三个样式)，不满足情况下为偶数(总共2个样式)
                    threeClass: 'animate__zoomInRight animate__fast',
                    //在满足one小于name长度情况下，第一个字体的颜色(总共三个样式)，不满足情况下这个颜色没用(总共2个样式)
                    aa: 'red  !important',
                    //在满足one小于name长度情况下，字体为偶数的动画样式(总共三个样式)，不满足情况下为基数(总共2个样式)
                    bb: 'white',
                    //在满足one小于name长度情况下，字体为基数的动画样式(总共三个样式)，不满足情况下为偶数(总共2个样式)
                    cc: 'cyan !important',
                },

            };
        },
        computed: {},
        mounted() {
            const _this = this
            let thumbSwiper = new Swiper('.thumb', {
                watchSlidesProgress: true,
                effect: 'cube',
                touchRatio: 0,
                cubeEffect: {
                    shadow: false,
                },
                on: {
                    tap: function () {
                        bannerSwiper.slideTo(this.$el.index(), 1, false);
                    },
                },
            });
            let bannerSwiper = new Swiper('#banner', {
                mousewheel: true,
                effect: 'coverflow',
                speed: 1000,
                watchSlidesProgress: true,
                on: {
                    init(swiper) {
                        let slide = this.slides.eq(0);
                        slide.addClass('ani-slide');
                    },
                    touchMove() {
                        for (let i = 0; i < this.slides.length; i++) {
                            let slideProgress = this.slides[i].progress
                            if (Math.abs(slideProgress) < 1) {
                                thumbSwiper[i].setTranslate(thumbSwiper[i].width * (Math.abs(slideProgress) - 1))
                            }
                        }
                    },
                    transitionStart() {
                        for (let i = 0; i < this.slides.length; i++) {
                            let slide = this.slides.eq(i);
                            slide.removeClass('ani-slide');
                        }
                        //每次进入时候 触发的索引
                        let activeIndex = this.activeIndex
                        _this.ss = activeIndex;
                        for (let i = 0; i < thumbSwiper.length; i++) {
                            if (i === activeIndex) {
                                thumbSwiper[i].slideTo(1);
                            } else {
                                thumbSwiper[i].slideTo(0);
                            }
                        }
                    },
                    transitionEnd() {
                        let slide = this.slides.eq(this.activeIndex);
                        slide.addClass('ani-slide');
                    },
                }
            });
            thumbSwiper[0].slideTo(1, 0)

        },
        watch: {},
        components: {
            test,
        },
        methods: {
            //生成海报
            screenShot() {
                this.conceal = false;
                setTimeout(() => {
                    html2canvas(document.getElementById('imageToFile4'), {
                        scrollY: 0,
                        scrollX: 0,
                        useCORS: true,
                        backgroundColor: null,
                        taintTest: true, // 在渲染前测试图片
                    }).then((canvas) => {// 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
                        this.img = canvas.toDataURL('image/png');
                        this.conceal = true;
                    })
                }, 400)
            },
            //验证格式
            async getFile(e) {
                let file = e.target.files
                const isRuleImg = file[0].type === 'image/jpeg' || file[0].type === 'image/png' || file[0].type === 'image/gif';
                const isLt2M = file[0].size / 1024 / 1024 < 5;
                if (!isRuleImg) {
                    this.hint = 1
                    return
                }
                if (!isLt2M) {
                    this.hint = 2
                    return
                }
                this.pic = window.URL.createObjectURL(file[0])
                this.hint = 0

                EXIF.getData(file[0], function() {
                    let orientation = EXIF.getTag(this,'Orientation');
                  console.log(orientation);
                  switch(orientation){
                    case 6: // 需要顺时针（向左）90度旋转
                      alert('需要顺时针（向左）90度旋转');
                      break;
                    case 8: // 需要逆时针（向右）90度旋转
                      alert('需要顺时针（向右）90度旋转');
                      break;
                    case 3: // 需要180度旋转
                      alert('需要180度旋转');
                      break;
                  }
                })
            },
            //提交按钮
            async tj() {
                let form = JSON.parse(JSON.stringify(this.form));
                const timestamp = new Date().getTime();
                form.timestamp = timestamp;
                console.log(form)
                console.log(form.timestamp)
            },
            //第一次触摸触发音乐 先不用有BUG
            gtouchStart() {
                this.$EventBus.$emit("isPlay", true);
                let aa = document.getElementById('music')
                aa.play();
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/swiper.min.css';

    html, body, #banner, #banner .swiper-slide {
        height: 100%;
    }

    body {
        background: #000;
        overflow: hidden;
    }

    #banner .swiper-slide {
        overflow: hidden;
        background-size: 100% 100% !important;

    }

    #banner .swiper-slide img {
        width: 100%;

    }

    .thumb-list {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 5%;
    }

    .thumb {
        width: 10%;
        margin-left: 4%;
        float: left;
    }

    .thumb .swiper-slide img {
        width: 100%;
        display: block;
    }

    .headline {
        position: absolute;
        top: 20%;
        right: 15%;
        width: 10%;
        text-align: center;
        color: white;

    }

    .swiper-slide .headline {

        animation: turn 1s linear 1;
    }

    @keyframes turn {
        0% {
            -webkit-transform: rotate(0deg) translate(0px, 100px);
        }
        25% {
            -webkit-transform: rotate(90deg) translate(0px, 75px);
        }
        50% {
            -webkit-transform: rotate(180deg) translate(0px, 50px);
        }
        75% {
            -webkit-transform: rotate(270deg) translate(0px, 25px);
        }
        100% {
            -webkit-transform: rotate(360deg) translate(0, 0);
        }
    }

    .ani-slide .headline {

        animation: rotate .5s linear 4;
    }


    @keyframes rotate {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(25px) scale(1.1, 0.9);

        }
        75% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .logo {
        z-index: 999;
        background: url(../assets/images/logo.png) no-repeat;
        background-size: 100%;
        position: fixed;
        right: 5%;
        top: 3%;
        width: 141px;
        height: 66px;
    }

    .show {

        left: 0;
        width: 100%;
        height: auto;
        position: absolute;
        opacity: 1;

    }

    .swiper-slide .show {
        bottom: -20%;
        opacity: 0;
        transition: all 0.7s ease 0.5s;

    }

    .ani-slide .show {
        bottom: 10%;
        opacity: 1;
    }

    .fo {
        position: absolute;
        justify-content: center;
        top: 25%;
        right: 15%;
        background-color: rgba(216, 185, 215, 0.4);
        width: 70%;
        padding: 5% 0 0 0;
        font-size: 0.3rem;
        text-align: center;
        border: 1px solid;
        border-color: #00ffff #ffffff #00ccff #ffffff;

        input {
            height: 0.5rem;
        }

        span {
            line-height: 0.9rem;
            width: 100%;
            height: 0.9rem;
            display: inline-block;
        }

        input:nth-child(-n+4) {
            background: rosybrown;
            opacity: 0.7;
            width: 70%;
        }

        input:nth-child(7) {
            background: #d8b9d7;
            width: 100px;
            height: 30px;
            margin: 2% 0 10% 0;
        }
    }

    .test {
        font-size: 0.5rem;
        /*这个高度越高动画效果越明显*/
        height: 90%;
        z-index: 3;
        width: 100%;
        top: -20%;
    }

    .uploading {
        position: absolute;
        /*top: 16%;*/
        /*left: 10%;*/
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
        /*background-color: rgba(255, 115, 215, 0.4);*/
        z-index: 3;
        border-color: #00ffff #ffffff #00ccff #ffffff;
    }

    .pic {
        position: absolute;
        width: 100%;
        height: auto;
        z-index: 3;

    }

    .bt1 {
        position: absolute;
        top: 85%;
        width: 25%;
        height: 6%;
        left: 15%;
    }

    .hint {
        font-size: 0.3rem;
        color: white;
        position: absolute;
        left: 25%;
        bottom: 25%;
    }

    .close {
        font-size: 0.3rem;
        position: absolute;
        top: 12%;
        right: 0;
        background: #00ccff;
        color: white;
        z-index: 100;
        padding: 2% 4%;


    }

    .newImg {
        position: absolute;
        z-index: 99;

    }
</style>
