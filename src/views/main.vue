<template>
    <div class="container" :class="this.bj===1?'daytime':'night'">
        <div style="position: fixed;top:3.7%;right:23.1%;z-index: 999;">
            <div class="rotation">{{isPlay ? '关音乐' : '开音乐'}}</div>
            <div class="loader1" @click="pause(true)">
                <div class="loop">
                    <div class="ring"></div>
                </div>
                <div class="loop">
                    <div class="ring"></div>
                </div>
            </div>
            <audio ref="music" id="music" src="../assets/music/cn.mp3" loop="loop" preload autoplay="autoplay"></audio>
            <div class="logo"></div>
        </div>
        <div v-if="this.bj===2">
        <div class="moon" ></div>
        <div class="star-five"></div>
        </div>
<div v-if="this.bj===1">
        <div class="cloud one" ></div>
        <div class="cloud two" ></div>
        <div class="cloud three"></div>
</div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                music: false,
                list: [
                    require('../assets/music/cn.mp3'),
                ],
                isPlay: false,
            }
        },
        created() {
            let count = 0;
            for (let item of this.list) {
                let img = new Image()
                img.src = item;
                count++
                if (count === 1) {
                    console.log(222)
                    this.$router.replace('/one')
                }
            }
            let aData = new Date().getHours();
            if (aData>7&&aData<19){
                this.bj=1;
                console.log(this.bj)
            }else {
                this.bj=2;
                console.log(this.bj)
            }
        },

        watch: {
            isPlay(val) {
            },
        },
        mounted() {


            this.$EventBus.$on('isPlay', data => {
                this.isPlay = data;

            })

        },
        methods:{

            pause(val) {

                // console.log(this.$refs.music)
                if (this.$refs.music !== null) {
                    //检测播放是否已暂停.this.$refs.music.paused 在播放器播放时返回false.
                    if (this.$refs.music.paused) {
                        this.$refs.music.play();// 这个就是播放
                        this.isPlay= true
                        // console.log(this.music)

                    } else {
                        if (val) {
                            this.$refs.music.pause();// 这个就是暂停
                            this.isPlay = false
                            // console.log(this.music)
                        }
                    }
                }
            },
            autoPlayAudio() {
                //把this的指向给存了起来，使得try里面的pause调用上面的pause方法
                const _this = this
                try {
                    WeixinJSBridge.invoke('WeixinJSBridgeReady', {}, function (e) {
                        _this.pause()
                    });
                } catch (e) {
                    _this.pause()
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .logo{
        background: url(../assets/images/logo.png) no-repeat;
        background-size: 100%;
        position: fixed;
        right: 5%;
        top: 3%;
        width: 112.8px;
        height: 52.8px;
    }
    .container {
        height: 100vh;
        margin: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative
    }
    .daytime{
        background: linear-gradient(#d8b9d7 50%, #ffc0cb);
    }
    .night{
        background: linear-gradient(#383838 50%, #1a1f26);

    }
    .rotation {
        color: white;
        font-weight: 300;
        width: 5em;
        height: 5em;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 7%;
        left: 5%;
        position: fixed;
        letter-spacing: 2px
    }

    .loader1 {
        width: 5em;
        height: 5em;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 7%;
        left: 5%;
        position: fixed;
        letter-spacing: 1px;
        color: white;
        border: 1px dotted pink;
        border-radius: 50%;
        &:active{
            background: yellow;
            opacity: 0.5;
            box-shadow: 5px 5px 20px 10px rgba(255, 255, 0, 0.5)

        }
    }


    .loader1 .loop {
        position: absolute;
        border-radius: 50%;
        border-style: solid;
        animation: animate2 3s linear infinite;
    }

    .loader1 .loop:nth-child(1) {
        width: 100%;
        height: 100%;
        color: gold;
        border-color: currentColor transparent transparent currentColor;
        border-width: 0.2em 0.2em 0 0;
        --deg: -45deg;
        animation-direction: normal;
    }

    .loader1 .loop:nth-child(2) {
        width: 70%;
        height: 70%;
        color: lime;
        border-color: currentColor currentColor transparent transparent;
        border-width: 0.2em 0 0 0.2em;
        --deg: -135deg;
        animation-direction: reverse;
    }

    .loader1 .loop .ring {
        position: absolute;
        width: 50%;
        height: 0.1em;
        top: 50%;
        left: 50%;
        background-color: transparent;
        transform: rotate(var(--deg));
        transform-origin: left;
        &:before{
            position: absolute;
            top: -0.5em;
            right: -0.5em;
            content: '';
            width: 1em;
            height: 1em;
            background-color: currentColor;
            border-radius: 50%;
            box-shadow: 0 0 2em,
            0 0 4em,
            0 0 6em,
            0 0 8em,
            0 0 10em,
            0 0 0 0.5em rgba(255, 255, 0, 0.1);

        }
    }



    @keyframes animate2 {
        to {
            transform: rotate(1turn);
        }
    }

    .cloud,
    .cloud:before,
    .cloud:after {
        z-index: 1;
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 100px;
        box-shadow: 0 0 2px 2px #fff;

    }
    .cloud {
        border: 50px solid #fff;

    }
    .cloud:after {
        content: "";
        border: 24px solid #fff;
        padding-left: 110px;
        top: -4px;
        left: -96px;
    }

    .cloud:before {
        content: "";
        border: 30px solid #fff;
        padding-left: 20px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -12px;
        left: -90px;
    }
    .one{
        left: 20%;
        animation: shadow1 8s infinite;
    }
    .two{
        left: 60%;
        animation: shadow2 10s infinite;
    }
    .three{
        left: 35%;
        animation: shadow3 9s infinite;
    }

    @keyframes shadow1 {
        0%{top:120%;opacity: 0.4;}
        50%,56%,62%{top:10%;transform: scaleX(1);}
        53%,59%{top:10%;transform: scaleX(1.2);}
        100% {top:-20%;opacity: 0.4;}
    }
    @keyframes shadow2 {
        0%{top:120%;opacity: 0.6;transform: scale(0.5);}
        65%,70%,77%{top:40%;transform: scale(0.5);}
        68%,74%{opacity: 0.7;top:40%;transform: scale(0.7,0.6);}
        100% {top:-20%;opacity: 0.6;transform: scale(0.5);}
    }

    @keyframes shadow3 {
        0%{top:120%;opacity: 0.5;transform: scale(0.8);}
        64%,68%,72%{top:35%;transform: scale(0.8);}
        66%,70%{top:35%;transform: scale(0.5,0.8);}
        100% {top:-10%;opacity: 0.5;transform: scale(0.8);}
    }
/*moon*/
    .moon {
        width: 1.5rem;
        height: 1.5rem;
        -webkit-transform: rotate(-25deg);
        -moz-transform: rotate(-25deg);
        -ms-transform: rotate(-25deg);
        -o-transform: rotate(-25deg);
        transform: rotate(-25deg);
        background: linear-gradient(#ffba58 50%, #d8903d);
        position: absolute;
        border-radius: 1.5rem;
        right: 9%;
        top: 15%;
        &:before{

            content: '';
            width: 1.5rem;
            height: 1.5rem;
            background:#383838;
            position: absolute;
            border-radius: 1.5rem;
            right: 0.3rem;

        }
    }
/*    star*/
    .star-five {
        top: 10%;
        left: 50%;
        position: absolute;
        display: block;
        color: white;
        width: 0;
        height: 0;
        border-right:  0.5rem solid transparent;
        border-bottom: 0.3rem  solid white;
        border-left:   0.5rem solid transparent;
        -moz-transform:    rotate(35deg);
        -webkit-transform: rotate(35deg);
        -ms-transform:     rotate(35deg);
        -o-transform:      rotate(35deg);
        animation: star 10s infinite;
        &:before{
            content: '';
            border-bottom: 0.4rem solid white;
            border-left: 0.15rem solid transparent;
            border-right: 0.15rem solid transparent;
            position: absolute;
            height: 0;
            width: 0;
            top: -0.275rem;
            left: -0.300rem;
            display: block;
            -webkit-transform: rotate(-35deg);
            -moz-transform:    rotate(-35deg);
            -ms-transform:     rotate(-35deg);
            -o-transform:      rotate(-35deg);
        }
        &:after{
            content: '';
            position: absolute;
            display: block;
            color: white;
            left: -0.525rem;
            width: 0;
            height: 0;
            border-right: 0.5rem solid transparent;
            border-bottom: 0.3rem solid white;
            border-left: 0.5rem solid transparent;
            -webkit-transform: rotate(-70deg);
            -moz-transform:    rotate(-70deg);
            -ms-transform:     rotate(-70deg);
            -o-transform:      rotate(-70deg);
        }
    }
    @keyframes star {
        0%,100%{opacity: 0.7;transform: scale(0.2);}
        50% {opacity: 0.7;transform: scale(0.3);}
    }

</style>
