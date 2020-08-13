<template>
    <div class="container" >
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
                    this.$router.replace('/one')
                }
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
                        console.log(this.isPlay)
                        // console.log(this.music)

                    } else {
                        if (val) {
                            this.$refs.music.pause();// 这个就是暂停
                            this.isPlay = false
                            console.log(this.isPlay)
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
        background: black;
        height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative
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


</style>
