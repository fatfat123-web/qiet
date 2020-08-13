<template>

    <div class="container animate__animated"
         :class="animateEnd ? '' : 'animate__fadeOut'">
     <div class="gif">

        <div class='loader'></div>
        <ul class="Loading" >
            <li>加</li>
            <li>载</li>
            <li>中</li>
            <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px;margin-top: 5%"></li>
            <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px;margin-top: 5%"></li>
            <li style=" box-shadow: 2px 2px 5px #fff;width: 15px;height: 15px;margin-top: 5%"></li>
        </ul>
    </div>
    </div>
</template>

<script>


    export default {
        name: "one",
        data(){
            return{
                animateEnd: true,
                animate: true,
            }

        },
        components: {

        },
        methods:{
            autoPlayAudio() {
                this.$EventBus.$emit('isPlay', true)
                try {
                    WeixinJSBridge.invoke('WeixinJSBridgeReady', {}, function (e) {
                        let aa=   document.getElementById('music')
                        aa.play();
                    });
                } catch (e) {
                    let aa=   document.getElementById('music')
                    aa.play();
                }
            },
        },
        mounted() {
            this.animate = false
            setTimeout(() => {

                this.animateEnd = false
                setTimeout(() => {
                    this.autoPlayAudio()
                    this.$router.push('two')

                }, 400)
            }, 2600)
        },


    }
</script>

<style scoped lang="scss">
    .container {
        background-color: #1e5a7e; /* 不支持线性的时候显示 */
        background-image: linear-gradient(to bottom right, #1e5a7e , #528bb3);

        width: 100%;
        height: 100%;
        /*background-size: 100% 100%;*/
    }
    .gif{
        width: 100%;
        height: 100%;
        /*这里的Gif要换个图*/
        /*background: url(../assets/images/hty.gif) no-repeat 50% 50%;*/
        background-size: 50% auto;


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
        left: 40%;
        font-size:50%;
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

            /*background: linear-gradient(to right, #fff, #ffb8f9);*/
            margin: 0 5px;
            border-radius: 50%;
            animation: animate 1.5s linear infinite;
            /*box-shadow: 1px 1px 5px #fff;*/
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
</style>
