<template>

    <div
      :class="['container','animate__animated',{'animate__fadeOut':animateEnd===false},bj===1?'daytime':'night']">
        <!--女孩子-->
        <div class="balloon"></div>
        <figure class="madeline-container">
            <div class="body">
                <div class="body__leg-l"></div>
                <div class="body__leg-r"></div>
            </div>
            <div class="head">
                <div class="head__hat"></div>
                <div class="head__hair"></div>
              <!--                下面1个有问题-->
                <div class="head__face"></div>
                <div class="head__hair--fringe"></div>
            </div>
            <div class="arm__r"></div>
            <div class="arm__l"></div>
        </figure>
        <div v-if="this.bj===2">
            <div class="moon" ></div>
            <div class="star-five"></div>
        </div>
        <div v-if="this.bj===1">
            <div class="cloud one" ></div>
            <div class="cloud two" ></div>
            <div class="cloud three"></div>
        </div>
        <!-- 圈-->
        <div class='loader'></div>
        <ul class="Loading">
            <li>加</li>
            <li>载</li>
            <li>中</li>
            <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px;margin-top: 5%"></li>
            <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px;margin-top: 5%"></li>
            <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px;margin-top: 5%"></li>
        </ul>


    </div>
</template>

<script>


    export default {
        name: "one",
        data() {
            return {
                animateEnd: true,
                animate: true,
                bj:null,
                list: [
                    require('../assets/images/bj.jpg'),
                    require('../assets/images/1.1.png'),
                    require('../assets/images/1.2.png'),
                    require('../assets/images/1.3.png'),

                    require('../assets/images/2.1.png'),
                    require('../assets/images/2.2.png'),
                    require('../assets/images/2.3.png'),
                    require('../assets/images/2.4.png'),
                    require('../assets/images/2.5.png'),


                    require('../assets/images/3.1.png'),
                    require('../assets/images/3.2.png'),
                    require('../assets/images/3.3.png'),
                    require('../assets/images/3.4.png'),

                    require('../assets/images/4.1.png'),
                    require('../assets/images/4.2.png'),
                    require('../assets/images/4.3.png'),
                    require('../assets/images/4.4.png'),
                    require('../assets/images/4.5.png'),


                    require('../assets/images/5.2.png'),
                    require('../assets/images/5.3.png'),
                    require('../assets/images/5.4.png'),

                    require('../assets/images/6.1.png'),
                    require('../assets/images/6.2.png'),
                    require('../assets/images/6.3.png'),

                    require('../assets/images/7.1.png'),
                    require('../assets/images/7.2.png'),
                    require('../assets/images/7.3.png'),

                    require('../assets/images/8.1.png'),
                    require('../assets/images/8.2.png'),
                    require('../assets/images/8.3.png'),

                    require('../assets/images/9.png'),
                    require('../assets/images/9.1.png'),
                    require('../assets/images/9.2.png'),
                    require('../assets/images/9.3.png'),
                    require('../assets/images/9.4.png'),
                    require('../assets/images/9.5.png'),

                    require('../assets/images/10.1.png'),
                    require('../assets/images/10.2.png'),
                    require('../assets/images/10.3.png'),

                    require('../assets/images/logo.png'),

                ],
            }

        },
        components: {},
        methods: {
            autoPlayAudio() {
                this.$EventBus.$emit('isPlay', true)
                try {
                    WeixinJSBridge.invoke('WeixinJSBridgeReady', {}, function (e) {
                        let aa = document.getElementById('music')
                        aa.play();
                    });
                } catch (e) {
                    let aa = document.getElementById('music')
                    aa.play();
                }
            },
        },
        created() {
            let aData = new Date().getHours();
            if (aData>7&&aData<19){
                this.bj=1;
                console.log(this.bj)
            }else {
                this.bj=2;
                console.log(this.bj)
            }

            let count = 0;
            for (let item of this.list) {
                let img = new Image()
                img.src = item;
                count++
                if (count === 40) {
                    this.animate = false
                    setTimeout(() => {
                        this.animateEnd = false
                        setTimeout(() => {
                            this.autoPlayAudio()
                            this.$router.replace('three')

                        }, 600)
                    }, 2300)
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }


    .loader {
        bottom: 2%;
        left: 2%;
        position: absolute;
        border: 7px solid;
        border-color: #00ffff #ffffff #00ccff #ffffff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: load 2s linear infinite;
    }

    .daytime{
        background: linear-gradient(#d8b9d7 50%, #ffc0cb);
    }
    .night{
        background: linear-gradient(#383838 50%, #1a1f26);

    }

    @keyframes load {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .Loading {
        color: #fff;
        position: absolute;
        bottom: 1%;
        left: 42%;
        font-size: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        display: flex;

        li:nth-child(2) {
            animation-delay: -1.2s;
        }

        li:nth-child(3) {
            animation-delay: -1s;
        }

        li:nth-child(4) {
            animation-delay: -.8s;
        }

        li:nth-child(5) {
            animation-delay: -.6s;
        }

        li:nth-child(6) {
            animation-delay: -.4s;
        }

        li {
            list-style-type: none;
            margin: 0 5px;
            border-radius: 50%;
            animation: animate 1.5s linear infinite;
        }
    }

    @keyframes animate {
        0% {
            transform: translateY(0);
        }
        60% {
            transform: translateY(0);
        }
        80% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0);
        }

    }

    .madeline-container {
        z-index: 4;
        width: 40.5vmin;
        height: 91.8vmin;
        animation: body-move 1.3s infinite alternate ease-in-out
    }

    .balloon {
        z-index: 3;
        width: 20vmin;
        height: 24vmin;
        position: absolute;
        background: #dd2602;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate3d(-114%, -200%, 0);
        animation: balloon-move 1.3s infinite alternate ease-in-out
    }

    .balloon:after {
        content: '';
        width: 2.2vmin;
        height: 1.6vmin;
        display: block;
        position: absolute;
        background-color: #dd2602;
        top: 99.2%;
        left: 44%;
        transform: rotate(5deg) skewX(-5deg);
        border-radius: 60% 60% 20% 20%
    }

    .balloon:before {
        content: '';
        width: .2vmin;
        height: 26vmin;
        display: block;
        position: absolute;
        background-color: #7f467d;
        top: 100%;
        left: 50.2%
    }

    .head {
        width: 79%;
        height: 26%;
        position: relative;
        top: 40%;
        left: 11.5%
    }

    .head:before, .head:after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        background-color: transparent;
        z-index: -10;
        border-bottom: 7vmin solid #000
    }

    .head:before {
        border-right: 6vmin solid transparent;
        top: 5%;
        left: 31.5%;
        transform: rotateZ(-8deg)
    }

    .head:after {
        border-left: 6vmin solid transparent;
        top: 2%;
        left: 42.5%;
        transform: rotateZ(-3.5deg)
    }

    .head__hair, .head__hair--fringe {
        width: 80%;
        height: 47%;
        position: absolute;
        top: 52.5%;
        left: 12%;
        border-radius: 50% 50% 60% 60% / 90% 90% 35% 35%;
        transform: rotateZ(2.5deg);
        overflow: hidden;
    }

    .head__hair {
        background-color: #d25317
    }

    .head__hair--fringe {
        z-index: 20
    }

    .head__hair--fringe:before, .head__hair--fringe:after {
        content: '';
        width: 38%;
        height: 30%;
        display: block;
        position: absolute;
        background-color: #d25317;
        border-radius: 50%;
    }

    .head__hair--fringe:before {
        top: -5%;
        left: 22%;
        transform: rotate(-14deg);
    }

    .head__hair--fringe:after {
        top: -10%;
        left: 50%;
        transform: rotate(14deg)
    }

    .head__face {
        width: 44%;
        height: 42%;
        border-radius: 30% 30% 60% 70% / 80% 80% 70% 70%;
        position: absolute;
        top: 57%;
        left: 33.5%;
        z-index: 10;
        background:
        radial-gradient(12% 8% at 58% 62%, #efdebd .5vmin, transparent .7vmin),
        radial-gradient(10% 8% at 59% 63%, rgba(0, 0, 0, 0.8) .4vmin, transparent .5vmin),
        linear-gradient(-50deg, transparent 47%, #efdebd 46.5%),
        linear-gradient(50deg, transparent 52%, #efdebd 51.5%),
        radial-gradient(2.4% 2% at 54% 72%, #efdebd 1.9vmin, transparent 2.1vmin),
        radial-gradient(2.2% 1.2% at 54% 77%, rgba(0, 0, 0, 0.8) 2vmin, transparent 2.2vmin),#efdebd
    }
    /*这里是眼睛*/
    .head__face:before, .head__face:after {
        content: '';
        width: 5%;
        height: 11%;
        display: block;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        animation: eyes-blink 7s infinite;
        will-change: transform
    }

    .head__face:before {
        top: 32%;
        left: 33%
    }

    .head__face:after {
        top: 34%;
        left: 70%
    }

    .head__hat {
        width: 84%;
        height: 36%;
        background-color: #f7e957;
        border-radius: 70% 70% 50% 50% / 70% 70% 80% 80%;
        position: absolute;
        top: 28%;
        left: 13%;
        transform: rotateZ(4deg)
    }
    /*帽子两根毛*/
    .head__hat:after, .head__hat:before {
        content: '';
        width: 24%;
        height: 30%;
        display: block;
        position: absolute;
        background:
       radial-gradient(1% 1.5% at 20% 120%, transparent 3vmin, #000 3.1vmin, #000 5vmin, transparent 5.1vmin),
       radial-gradient(2.2% 1.5% at 22% 107%, transparent 3vmin, #000 3.2vmin, #000 6vmin, transparent 6vmin)
    }

    .head__hat:before {
        top: 80%;
        left: -17%;
        transform: rotate(-45deg)
    }

    .head__hat:after {
        top: 103%;
        left: -13%;
        transform: rotate(-62deg)
    }

    .body {
        width: 66%;
        height: 34.4%;
        position: absolute;
        top: 65.6%;
        left: 23.5%;
        transform-origin: 50% 0;
        animation: dress-sway 1.2s infinite alternate ease-in-out
    }

    .body:before {
        content: '';
        width: 84%;
        height: 66%;
        display: block;
        position: absolute;
        background-color: #010152;
        background-color: rgba(1, 1, 82, 0.5);
        border-radius: 0 0 45% 55% / 0 0 18% 18%;
        border-radius: 50% / 100% 100% 0 0;
        transform: rotate(-3deg);
        top: 0;
        left: 3%;
        background:
                linear-gradient(-72.8deg, transparent 35%, #010152 35.5%, #010152 77.3%, transparent 77.7%),
                linear-gradient(74deg, transparent 42%, #010152 42.5%, #010152 78%, transparent 78.5%)
    }

    .body:after {
        content: '';
        width: 82.6%;
        height: 18%;
        display: block;
        position: absolute;
        background-color: #010152;
        border-radius: 50%;
        top: 56.7%;
        left: 5.5%;
        transform: rotate(-3deg)
    }

    .body__leg-l:after, .body__leg-r:after {
        content: '';
        width: 13%;
        height: 28%;
        display: block;
        position: absolute;
        background: radial-gradient(circle at 50% -50%, #efdebd 72%, #fff 72.5%)
    }

    .body__leg-l:before, .body__leg-r:before {
        content: '';
        width: 20%;
        height: 7%;
        display: block;
        position: absolute;
        background-color: #000
    }

    .body__leg-l:after {
        top: 69%;
        left: 12.8%;
        border-radius: 0 0 50% 50% / 0 0 5% 8%;
        transform: rotate(18deg)
    }

    .body__leg-l:before {
        top: 93%;
        left: .5%;
        border-radius: 60% 50% 40% 30% / 80% 60% 70% 30%
    }

    .body__leg-r:after {
        top: 68.2%;
        left: 72%;
        border-radius: 0 0 50% 50% / 0 0 10% 8%;
        transform: rotate(-33deg)
    }

    .body__leg-r:before {
        top: 89.5%;
        right: -1.5%;
        border-radius: 40% 60% 30% 40% / 60% 80% 30% 40%;
        transform: rotate(-10deg)
    }

    .arm__l, .arm__r {
        position: absolute;
        width: 50%;
        height: 15%
    }

    .arm__l:before, .arm__r:before {
        content: '';
        width: 75%;
        height: 25%;
        display: block;
        position: absolute
    }

    .arm__l {
        top: 66%;
        left: 4%;
        transform: rotate(46deg);
        transform-origin: 100% 0
    }

    .arm__l:before {
        top: 0;
        left: -18%;
        transform: perspective(20vmin) rotateY(135deg);
        transform-origin: 50% 0;
        background: radial-gradient(2% 3% at 84% 10%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 83% 30%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 82% 50%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 81% 70%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 80% 90%, #fff 1vmin, transparent 1.1vmin), radial-gradient(circle at 0 0, transparent 2vmin, #efdebd 2vmin, #efdebd 7.7vmin, transparent 7.8vmin), radial-gradient(circle at 0 0, transparent 2vmin, #fff 2vmin, #fff 12.5vmin, transparent 12.6vmin)
    }

    .arm__l:after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        background-color: yellow;
        background: radial-gradient(1% 2% at 87% 6%, #fff 2.6vmin, transparent 2.7vmin), radial-gradient(1% 2% at 90% 5%, #fff 2.2vmin, transparent 2.3vmin), radial-gradient(circle at 89% 16%, #fff 2.2vmin, transparent 2.3vmin), radial-gradient(5% 8% at 108% -50%, #010152 15.5vmin, transparent 15.6vmin)
    }

    .arm__r {
        transform: rotate(2deg);
        top: 65%;
        left: 53%;
        transform-origin: 0 0;
        animation: arm-move-right 1.3s infinite alternate ease-in-out
    }

    .arm__r:before {
        top: 14%;
        right: -14%;
        transform: perspective(20vmin) rotateY(35deg);
        background: radial-gradient(2% 3% at 86% 10%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 85% 30%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 84% 50%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 83% 70%, #fff 1vmin, transparent 1.1vmin), radial-gradient(2% 3% at 82% 90%, #fff 1vmin, transparent 1.1vmin), radial-gradient(circle at 0 0, #efdebd 8.2vmin, transparent 8.3vmin), radial-gradient(circle at 0 0, #fff 12.5vmin, transparent 12.6vmin)
    }

    .arm__r:after {
        content: '';
        width: 75%;
        height: 100%;
        display: block;
        position: absolute;
        clip-path: polygon(0 0, 10% 100%, 100% 15%);
        background: radial-gradient(2.5% 3% at 15% 5%, #fff 2.2vmin, transparent 2.3vmin), radial-gradient(2.5% 3% at 17% 12%, #fff 2.2vmin, transparent 2.3vmin), radial-gradient(2.5% 3% at 18% 12%, #fff 2.2vmin, transparent 2.3vmin), radial-gradient(6% 5% at 0 0, #010152 12.5vmin, transparent 12.6vmin)
    }

    @keyframes balloon-move {
        0% {
            margin-top: .5%
        }
        100% {
            margin-top: 0
        }
    }

    @keyframes body-move {
        0%, 6% {
            transform: rotate(-1deg)
        }
        94%, 100% {
            transform: rotate(1deg)
        }
    }

    @keyframes eyes-blink {
        0% {
            transform: scaleY(1)
        }
        2% {
            transform: scaleY(0.1)
        }
        4% {
            transform: scaleY(1)
        }
        6% {
            transform: scaleY(0.1)
        }
        8% {
            transform: scaleY(1)
        }
        66% {
            transform: scaleY(1)
        }
        68% {
            transform: scaleY(0.1)
        }
        70% {
            transform: scaleY(1)
        }
        100% {
            transform: scaleY(1)
        }
    }

    @keyframes dress-sway {
        0%, 5% {
            transform: rotate(-1.2deg)
        }
        95%, 100% {
            transform: rotate(8deg)
        }
    }

    @keyframes arm-move-right {
        0%, 5% {
            transform: rotate(-10deg)
        }
        95%, 100% {
            transform: rotate(-4deg)
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
