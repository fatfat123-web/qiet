<template>
    <div @touchstart.prevent.once="gtouchstart()" style="width:100%; height:100%; position:absolute;">
        <div class="logo"></div>
        <div class="swiper-container" id="banner">
            <div class="swiper-wrapper">
                <div v-for="item in max.length" :key="item" class="swiper-slide " :style="{background: max[item-1]}">
                    <div v-if="item===1" class="headline">阿姨别这样</div>
                    <test v-if="item===2&&ss===1" :open="open" class="test"></test>
                    <img v-if="item===3" class="show" src="../assets/images/4.4.png" height="354" width="457"/>

                    <form v-show="item===5" class="fo">
                       <span>您的名字啊~</span>
                        <input type="text" v-model="form.name">
                        <span>您的联系方式~</span>
                        <input type="text" v-model="form.phone">
                        <br><br>
                        <input type="submit" value="提交">
                    </form>

                    <div style="color: white">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="thumb-list">
            <div class="swiper-container thumb" :key="index" v-for="(item,index) in img">
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

    export default {
        name: "three",
        data() {
            return {
                max: [
                    `url(${require('../assets/images/maxa.jpg')}) 0% 0% /100% 100% no-repeat`,
                    `url(${require('../assets/images/maxb.jpg')}) 0% 0% /100% 100% no-repeat`,
                    `url(${require('../assets/images/maxc.jpg')}) 0% 0% /100% 100% no-repeat`,
                    `url(${require('../assets/images/maxd.jpg')}) 0% 0% /100% 100% no-repeat`,
                    `url(${require('../assets/images/bj.jpg')}) 0% 0% /100% 100% no-repeat`,
                ],
                img: [
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
                aa: '',
                transmit: null,
                ss: null,
                form: {
                    name: 'aaa',
                    phone: 1234,
                },
                open: {
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
                }
            };
        },
        computed: {},
        mounted() {
            this.swiper();

        },
        watch: {},
        components: {
            test,
        },

        methods: {
            swiper() {
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


            // test() {
            //
            //     console.log(this.ss)
            // },
            gtouchstart() {
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
        bottom: -200px;
        opacity: 0;
        transition: all 0.5s ease 1s;

    }

    .ani-slide .show {
        bottom: 0;
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
        border:1px solid;
        border-color: #00ffff #ffffff #00ccff #ffffff;
        input{
            height:0.5rem;
        }
        span{
            line-height: 0.9rem;
            width: 100%;
            height: 0.9rem;
            display:inline-block;
        }
        input:nth-child(-n+4) {
            background: rosybrown;
            opacity: 0.7;
            width: 70%;
        }

        input:nth-child(7) {
            background:#d8b9d7;
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
</style>
