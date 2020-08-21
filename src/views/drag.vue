<template>
<div class="drag">
    <div class="one" id="one" ref="one" :style="one" style="z-index: 3" v-drag="(that)">我</div>
    <div class="two" id="two" ref="two" :style="two" style="z-index: 4" v-drag="(that)">是</div>
    <div class="three" id="three" ref="three" :style="three" style="z-index: 5" v-drag="(that)">猪</div>


    <img src="../assets/images/1.jpg" height="150" width="150"/>
    <img src="../assets/images/2.jpg" height="150" width="150"/>
    <img src="../assets/images/3.jpg" height="150" width="150"/>

    <button @click.stop="hot">获取</button>

</div>

</template>

<script>
    export default {
        name: 'drag',
        data() {
            return {
                one: {top: '21.7%', left: '48%'},
                two: {top: '57.4%', left: '10%'},
                three: {top: '40.4%', left: '20%'},
                that: this,
            }
        },
        computed:{
        },
        directives: {
            drag(el,that) {
                let one = el; //获取当前元素

                one.ontouchstart = e => {
                    //算出鼠标相对元素的位置
                    console.log(that.value.$options.data().one)
                    let disX = e.touches[0].clientX - one.offsetLeft;
                    let disY = e.touches[0].clientY- one.offsetTop;
                    document.ontouchmove = e => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.touches[0].clientX - disX;
                        let top = e.touches[0].clientY - disY;
                        //移动当前元素
                        one.style.left = left + "px";
                        one.style.top = top + "px";
                        // console.log(document.getElementById('one').style.top)
                        let oneTop=document.getElementById('one').style.top
                        console.log(that.value.$refs.one.style.left)
                        console.log(top)
                        if (oneTop>300){
                            console.log(1234)

                        }

                    };
                    document.ontouchend = e => {
                        //鼠标弹起来的时候不再移动
                        document.ontouchmove = null;
                        //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                        document.ontouchend = null;
                    };
                };

            },

        },
        methods:{
            hot(){
                console.log(this.$refs.one.style.left)
            }
        }
    }
</script>

<style scoped lang="scss">
    .drag {
        width: 80%;
        height: 80%;
        background-color:#aaaaaa;
        text-align: center;

        img{
           margin: 20px;
           width: 20%;
            height: auto;
        }
    }
    .one {
        width: 80px;
        height: 80px;
        border: 1px solid #666;
        background-color: #ccc;
        position: absolute;
        /*top: 220px;*/
        /*left: 70px;*/


    }
    .two {
        width: 120px;
        height: 60px;
        border: 1px solid #d25317;
        background-color: rosybrown;
        position: absolute;
        /*top: 290px;*/
        /*left: 0px;*/

    }

    .three{
        width: 80px;
        height: 80px;
        border: 1px solid #d25317;
        background-color: greenyellow;
        position: absolute;
        /*top: 300px;*/
        /*left: 120px;*/
        border-radius:80px

    }


</style>