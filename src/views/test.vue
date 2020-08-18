<template>
    <div class="container">
        <div class="shell">
        <div :key="index" v-for="(item,index) in fon"  ref="add"
          :style="[(index<=0&&kg===true)?{color:(aa)}:((index%2) === 0 ?{color:(bb)}:{color:(cc)})]"
          :class="['animate__animated',(index<=0&&kg===true)?one:((index%2) === 0 ? two:three)]">
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
                kg:false,
                one:'',
                two:'',
                three:'',
                aa:'',
                bb:'',
                cc:'',
                g:0,
                cd:0,
            }
        },
        methods: {
            jump(n, s) {
                let helloArr = n.split('');
                let timer = setInterval(() => {
                    if (this.time === 0&&s!==0&&n.length>s) {
                        this.kg=true
                        this.new = helloArr.slice(0, s)
                        this.g=1
                        let c = ''
                        for (let i = 0; i < s; i++) {
                            c += this.new[i];
                        }
                        this.fon.push(c);
                    } else {
                        if (this.kg===true){
                            this.cd=s
                            this.new = helloArr.splice(s, 1)
                            this.fon.push(this.new[0]);
                        }else {
                            this.cd=0
                            this.new = helloArr.splice(0, 1)
                            this.fon.push(this.new[0])
                        }
                    }
                    this.time++
                    if (this.time === (n.length - this.cd + this.g)) {
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
                    this.one=newValue.oneClass
                    this.two=newValue.twoClass
                    this.three=newValue.threeClass
                    this.gap=newValue.gap
                    this.aa=newValue.aa
                    this.bb=newValue.bb
                    this.cc=newValue.cc
                    if (newValue.one >= 0) {
                    this.jump(newValue.name, newValue.one)
                    }
                },
                immediate: true
            },
        },
    }
</script>

<style scoped lang="scss">
    .container {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: absolute;
    }
    .className{
        font-weight:800;
    }
    .shell {
        display: flex;
        width: 6rem;
    }

</style>