<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!--            1-->
            <div class="swiper-slide">
                <img class="particulars" src="../assets/images/1.1.png" height="89" width="506"/>
                <img  class="headline" src="../assets/images/1.2.png" height="384" width="144"/>
                <img  class="show" src="../assets/images/1.3.png" height="148" width="327"/>
            </div>
            <!--            2-->
            <div class="swiper-slide">
                <div class="cssanimation leDanceOutTop sequence"> 啊我是傻逼 </div>
            </div>
            <!--            3-->
            <div class="swiper-slide">
                3
            </div>
            <!--            4-->
            <div class="swiper-slide">
                4

            </div>
            <!--            5-->
            <div class="swiper-slide">
                5
            </div>
            <!--            6-->
            <div class="swiper-slide">
                6
            </div>
            <!--            7-->
            <div class="swiper-slide">
                7
            </div>
            <!--            8-->
            <div class="swiper-slide">

                8
            </div>
            <!--            9-->
            <div class="swiper-slide">

                9
            </div>
            <!--            10-->
            <div class="swiper-slide">
                10
            </div>


        </div>
    </div>
</template>

<script>

    import '../assets/css/swiper.min.css';
    import Swiper from 'swiper';

    export default {
        name: "slideshow",
        data() {
            return {
                slideId: 0,
                switch: true,
                swiper: null,


            }
        },
        mounted() {


            this.swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                followFinger: false,
                speed: 1000,
                mousewheel: true,
                // effect : 'flip',
                // flip: {
                //     slideShadows : true,
                //     limitRotation : true,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    init(swiper) {
                        let slide = this.slides.eq(0);
                        slide.addClass('ani-slide');
                    },
                    //可视页面没出现时动画的位置
                    transitionStart() {
                        for (let i = 0; i < this.slides.length; i++) {
                            let slide = this.slides.eq(i);
                            slide.removeClass('ani-slide');
                        }
                    },
                    //可视页面出现的动画
                    transitionEnd() {
                        let slide = this.slides.eq(this.activeIndex);
                        slide.addClass('ani-slide');

                    },
                }
            });
        },
        watch: {},
        methods: {
            see(e) {
                window.location.href = e
            },
        },
    }
</script>
<!--    swiper-slide  进入时候的动画-->
<!--  ani-slide 离开时候的动画-->
<style scoped lang="scss">

    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        transition-delay: .3s;
    }

    .swiper-container {
        width: 100vw;
        height: 100vh;

    }

    .swiper-slide {
        /*text-align: center;*/
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        /*display: flex;*/
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        /*justify-content: center;*/
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        /*align-items: center;*/
    }

    .dolphin1 {
        top: 36%;
        width: 85%;
        position: absolute;
    }

    .dolphin2 {
        top: 25%;
        right: 5%;
        width: 65%;
        height: auto;
        position: absolute;
    }

    .dolphin3 {
        bottom: 0;
        left: 0;
        width: 40%;
        height: auto;
        position: absolute;
    }

    .dolphin4 {
        top: 45%;
        right: 15%;
        width: 40%;
        height: auto;
        position: absolute;

    }

    .dolphin5 {
        top: 45%;
        right: 5%;
        width: 70%;
        height: auto;
        position: absolute;

    }

    .show {

        left: 14%;
        width: 68%;
        height: auto;
        position: absolute;
        opacity: 1;
        bottom: 11%;
    }

    .typeface {
        top: 68%;
        width: 85%;
        position: absolute;
    }

    .bt1 {
        position: absolute;
        top: 76%;
        justify-content: center;
        height: 40%;


        img {
            /*vertical-align: top;*/
            width: 28%;
            height: auto;
            margin: 4% 1% 0 3.5%;
        }
    }

    .particulars {
        position: absolute;
        top: 18%;
        left: 11%;
        width: 78%;
        height: auto;

    }

    .model {
        position: absolute;
        top: 20%;
        left: 12%;
        width: 65%;
        height: auto;

    }

    .swiper-slide .dolphin3 {
        width: 10%;
        height: auto;
        transition: all .3s;
    }

    .ani-slide .dolphin3 {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
        width: 40%;
        height: auto;

    }

    .swiper-slide .particulars {
        opacity: 0;
        transform-origin: left bottom;
        -webkit-animation: rotateOutUpLeft 1s;
        animation: rotateOutUpLeft 1s;
    }

    @keyframes rotateOutUpLeft {
        from {
            opacity: 1;
        }

        to {
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
        }
    }

    .rotateOutUpLeft {
        animation-name: rotateOutUpLeft;

    }

    .ani-slide .particulars {
        -webkit-animation: rotateInDownLeft 1s;
        animation: rotateInDownLeft 1s;
        transform-origin: left bottom;
        opacity: 1;
    }

    @keyframes rotateInDownLeft {
        from {
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
        }

        to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }

    .rotateInDownLeft {
        animation-name: rotateInDownLeft;

    }

    .rotateInUpLeft {
        animation-name: rotateInUpLeft;
        transform-origin: left bottom;
    }

    .headline {
        position: absolute;
        top: 33%;
        right: 39%;
        width: 22%;
        height: auto;

    }

    .map {
        position: absolute;
        top: 71%;
        right: 20%;
        width: 64%;
        height: auto;

    }

    .brief {
        position: absolute;
        top: 62%;
        right: 7%;
        width: 80%;
        height: auto;

    }

    .db {
        position: absolute;
        bottom: 4%;
        width: 80%;
        height: auto;
    }

    .certificate {
        position: absolute;
        bottom: 20%;
        width: 90%;
        height: auto;

    }

    .swiper-slide {
        background: url(../assets/images/bj.jpg) no-repeat;
        background-size: 100% 100%;
        color: white;

    }


    .swiper-slide p {
        transform: translateX(-200px);
        opacity: 0;
        transition: all .4s;
    }

    .ani-slide p {
        transform: translateX(0);
        opacity: 1;
    }

    .swiper-slide .dolphin1, .db {
        transform: translate(-400px, 200px) rotate(9deg);
        opacity: 0;
        transition: all .8s;
    }

    .ani-slide .dolphin1, .db {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
    }

    .swiper-slide .db {
        transform: translate(-400px, 200px) rotate(9deg);
        opacity: 0;
        transition: all .8s;
    }

    .ani-slide .db {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
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

    @keyframes shadow {
        0%, 100% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(1.2);
        }
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

    .swiper-slide .show {
        bottom: -10%;
        opacity: 0;
        transition: all 0.3s ease 1s;

    }

    .ani-slide .show {
        bottom: 11%;
        opacity: 1;
    }


    .swiper-slide .certificate {
        opacity: 0;

    }

    .ani-slide .certificate {
        -webkit-animation: zoomInUp 0.7s;
        animation: zoomInUp 0.7s;
        opacity: 1;
    }

    @keyframes zoomInUp {
        from {

            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        60% {
            opacity: 1;
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -20%, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        }
    }

    .details {
        position: absolute;
        bottom: 5%;
        width: 90%;
        height: auto;
        left: 5%;

    }

    .swiper-slide .details {
        opacity: 0;

    }

    .ani-slide .details {
        -webkit-animation: fadenum 2s;
        animation: fadenum 2s;
        opacity: 1;

    }

    @-webkit-keyframes fadenum {

        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }

    }


    .swiper-slide .brief {
        opacity: 0;

    }

    .ani-slide .brief {
        -webkit-animation: fadenum 2s;
        animation: fadenum 2s;
        opacity: 1;

    }

    @-webkit-keyframes fadenum {

        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }

    }

    .backtrack {
        position: absolute;
        width: 20%;
        left: 15%;
        bottom: 20%;
        height: auto;
    }

    .swiper-slide .backtrack {
        opacity: 0;

    }

    .ani-slide .backtrack {
        -webkit-animation: fadenum 2.5s;
        animation: fadenum 2.5s;
        opacity: 0.8;

    }

    @-webkit-keyframes fadenum {

        0% {
            opacity: 0;
        }

        100% {
            opacity: 0.8;
        }

    }


</style>
