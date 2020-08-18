<template>
    <div class="container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <template v-if="somersault===true">
                    <div class="int1" style="background-size:100% 100%;  height: 100%;z-index: 10" v-for="item in 5"
             :style="{backgroundImage: side[0],backgroundPositionY:-(newHeight*2*(item-1))+'px',left:newWidth,zIndex:item*2,top:(newHeight*2*(item-1))+'px'}"
                    >{{item}}
                    </div>

                </template>
                <!--                    aa是图片的地址-->
                <input v-if="cc!==4" @click.prevent="advance()" type="button" class="advance" value="前进">
                <input v-if="cc!==0" @click.prevent="retreat()" type="button" class="retreat" value="后退">
                <template v-for="(aa,item) in max" >
                <div :key="item" class="swiper-slide " style="z-index: 3"
                     :style="{background: max[item]}" >
                    {{item}}

                </div>
                    </template>

            </div>

        </div>

    </div>
</template>

<script>
    const Swiper = require('../assets/js/swiper.min')
    export default {
        name: "abbrs",
        data() {
            return {
                max: [
                    `url(${require('../assets/images/maxa.jpg')})`,
                    `url(${require('../assets/images/maxb.jpg')})`,
                    `url(${require('../assets/images/maxc.jpg')})`,
                    `url(${require('../assets/images/maxd.jpg')})`,
                    `url(${require('../assets/images/bj.jpg')})`,
                ],
                side: [
                    `url(${require('../assets/images/maxa.jpg')})`,
                    `url(${require('../assets/images/maxb.jpg')})`,
                    `url(${require('../assets/images/maxc.jpg')})`,
                    `url(${require('../assets/images/maxd.jpg')})`,
                    `url(${require('../assets/images/bj.jpg')})`,
                ],
                swiper: null,
                cc: 0,
                time: 0,
                somersault: false,
                newHeight: 0,
                newWidth: 0,

            }
        },
        methods: {
            advance() {
                this.somersault = true;
                console.log(this.newHeight)
                let timer = setInterval(() => {

                    this.time++
                    if (this.time === 1) {
                        this.time = 0;
                        // this.somersault=false;
                        // this.swiper.slideTo((this.cc + 1), 1, false);
                        clearInterval(timer)
                    }
                }, 1000)


            },
            retreat() {
                this.swiper.slideTo((this.cc - 1), 1, false);
                console.log(this.cc)

            }
        },
        mounted() {
            let windowWidth = document.documentElement.clientWidth;  //实时屏幕宽度
            let windowHeight = document.documentElement.clientHeight;   //实时屏幕高度
            this.newHeight = windowHeight / 10;
            console.log(this.newHeight)
            const _this = this
            this.swiper = new Swiper('.swiper-container', {
                on: {
                    transitionStart() {
                        //每次进入时候 触发的索引
                        _this.cc = this.activeIndex

                    },

                }

            });
        },
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/swiper.min.css';

    .container {
        width: 100%;
        height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        z-index: 1;
    }

    .swiper-container {
        width: 100%;
        height: 100%;

        /*z-index: 2;*/
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        background-size: 100% 100% !important;
        /*position: relative;*/
        z-index: 2;
    }


    .advance, .retreat {
        position: absolute;
        top: 20%;
        width: 50px;
        height: 50px;
    }

    .advance {
        right: 20%;
        background: pink;
        z-index: 999;
    }

    .retreat {
        left: 20%;
        background: pink;
        z-index: 999;
    }

    .int1 {
        position: absolute;
        top: 0;
        width: 100%;
    }
</style>