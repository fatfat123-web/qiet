<template>
    <div class="container">
        <div class="aa">

            <div :key="index" v-for="(item,index) in fon" ref="add" :id="'cc'+index"
             :class="['animate__animated',index<=0?'animate__backInLeft animate__faster':((index%2) === 0 ? 'animate__bounceInDown ':'animate__bounceInUp ')]">
                {{item}}
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
                time: 0,
                //新的数组
                fon: [],
                //临时数组 用来暂时拿出数据
                new: [],
            }
        },
        methods: {
             // cc(index){
             //     console.log(index)
             //     document.getElementById('cc')
             //     console.log(document.getElementById('cc'))
             // },
            jump(n, s) {
                //    允许第一动画出现s个字
                let helloArr = n.split('');
                const _this = this
                let timer = setInterval(() => {
                    if (this.time === 0) {
                        this.new = helloArr.slice(0, s)
                        let c = ''
                        for (let i = 0; i < s; i++) {
                            c += this.new[i];
                        }
                        this.fon.push(c);

                    } else {
                        //首先这里要做3个add 第一个为s字数的动画 第二个为单数 第三个为双数

                        this.new = helloArr.splice(s, 1)
                        this.fon.push(this.new[0]);
                        console.log(this.fon.length)
                        //这里只绑到的第一条没有什么屁用
                        this.$refs.add[0].classList.add('className')

                        //下面的方法好像不可行 refs必须是要静态的不能响应
                        if ((this.fon.length-1)%2===0){
                            console.log(this.fon.length)
                            console.log( this.$refs.add[(this.fon.length-1)])
                            console.log(this.$refs.add[1])
                            this.$refs.add[1].classList.add('bbb')
                            console.log()

                        }
                    }
                    // (this.fon.length-1)%2===0? this.$refs.add[1].classList.add('bbb'): this.$refs.add[4].classList.add('className')

                    this.time++

                    if (this.time === (n.length - s + 1)) {
                        clearInterval(timer)
                    }
                }, 400)


            },
            alone(n) {
                //这个是逐字出现的效果
                let helloArr = n.name.split('');

                let timer = setInterval(() => {
                    this.time++
                    if (helloArr.length !== 0) {
                        this.new = helloArr.splice(0, 1)
                        this.fon.push(this.new[0])
                    }
                    if (this.time === n.name.length) {
                        clearInterval(timer)
                    }
                }, 400)
            },

        },
        props: {
            open: {
                type: Object,
            },
        },
        watch: {
            open: {
                handler(newValue, oldValue) {
                    if (newValue.one >= newValue.name.length && newValue.one !== 0) {
                        this.alone(newValue)
                    } else if (newValue.one !== 0) {
                        this.jump(newValue.name, newValue.one)
                    }
                },
                immediate: true
            },

        },
        mounted() {
          // this.cc();

        }
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
        position: absolute;

    }

    .ninety {
        color: white;
        -webkit-writing-mode: vertical-lr;
        -ms-writing-mode: tb-lr;
        writing-mode: vertical-lr;
        text-orientation: sideways;
    }
    .className{
        font-weight:800;
        color: red !important;
    }
    .bbb{

        font-size: 0.7rem;
    }
    .aa {

        display: flex;
        position: absolute;
        top: 20%;
        left: 10%;
        font-size: 0.5rem;

        div:nth-child(1) {

        }

        div:nth-child(n+2) {

            color: white !important;
        }

        div:nth-child(even) {

            color: cyan !important;

        }

    }
</style>