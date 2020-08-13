<template>
    <div  @touchstart.prevent.once="gtouchstart()" style="width:100%; height:100%; position:absolute;">
        <div class="logo"></div>
        <div class="swiper-container" id="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide aa">
                    <div class="headline">阿姨别这样</div>

                </div>
                <div class="swiper-slide bb"></div>
                <div class="swiper-slide cc"></div>
                <div class="swiper-slide dd"></div>
                <div class="swiper-slide cc"></div>
            </div>
        </div>
        <div class="thumb-list">
            <div class="swiper-container thumb" id="thumb1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">

                        <img src="../assets/images/1.jpg"  >
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/images/mina.jpg"  >
                    </div>
                </div>
            </div>
            <div class="swiper-container thumb" id="thumb2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/2.jpg"  ></div>
                    <div class="swiper-slide"><img src="../assets/images/minb.jpg"  ></div>
                </div>
            </div>
            <div class="swiper-container thumb" id="thumb3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/3.jpg"  ></div>
                    <div class="swiper-slide"><img src="../assets/images/minc.jpg"  ></div>
                </div>
            </div>
            <div class="swiper-container thumb" id="thumb4">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/4.jpg"  ></div>
                    <div class="swiper-slide"><img src="../assets/images/mind.jpg"  ></div>
                </div>
            </div>
            <div class="swiper-container thumb" id="thumb5">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/3.jpg"  ></div>
                    <div class="swiper-slide"><img src="../assets/images/minc.jpg"  ></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    const Swiper = require('../assets/js/swiper.min')
    export default {
        name: "three",
        data(){
            return{

            }
        },
        mounted() {

            let thumbSwiper = new Swiper('.thumb', {
                watchSlidesProgress: true,

                effect: 'cube',
                touchRatio: 0,
                cubeEffect: {
                    shadow: false,
                },
                on: {
                    tap: function() {
                        bannerSwiper.slideTo(this.$el.index(),1,false);
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

                       let activeIndex = this.activeIndex
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
        watch: {

        },
        methods:{
            gtouchstart(){
                this.$EventBus.$emit("isPlay", true);
                let aa = document.getElementById('music')
                aa.play();



            }
        }
    }
</script>

<style scoped >
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
    .aa{ background: url(../assets/images/maxa.jpg) no-repeat;
        background-size: 100% 100%;}
    .bb{ background: url(../assets/images/maxb.jpg) no-repeat;
        background-size: 100% 100%;}
    .cc{ background: url(../assets/images/maxc.jpg) no-repeat;
        background-size: 100% 100%;}
    .dd{ background: url(../assets/images/maxd.jpg) no-repeat;
        background-size: 100% 100%;}
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

    .logo{
        z-index: 999;
        background: url(../assets/images/logo.png) no-repeat;
        background-size: 100%;
        position: fixed;
        right: 5%;
        top: 3%;
        width: 141px;
        height: 66px;
    }
</style>
