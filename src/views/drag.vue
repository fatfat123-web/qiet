<template>

    <div class="drag">
        <div class="drag_box" style="z-index: 3" v-drag>啊啊啊</div>

        <div class="drbg_box" style="z-index: 4" v-drag>呃呃呃</div>
    </div>



</template>

<script>
    export default {
        name: "drag",
        data() {
            return {

            };
        },
        //注册局部组件指令
        directives: {
            drag(el) {
                let drbgBox = el; //获取当前元素
                drbgBox.ontouchstart = e => {
                    //算出鼠标相对元素的位置
                    let disX = e.touches[0].clientX - drbgBox.offsetLeft;
                    let disY = e.touches[0].clientY- drbgBox.offsetTop;
                    document.ontouchmove = e => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.touches[0].clientX - disX;
                        let top = e.touches[0].clientY - disY;
                        //移动当前元素
                        drbgBox.style.left = left + "px";
                        drbgBox.style.top = top + "px";
                    };
                    document.ontouchend = e => {
                        //鼠标弹起来的时候不再移动
                        document.touchmove = null;
                        //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                        document.ontouchend = null;
                    };
                };


                let dragBox = el; //获取当前元素
                dragBox.ontouchstart = e => {
                    //算出鼠标相对元素的位置

                    let disX = e.touches[0].clientX- dragBox.offsetLeft;
                    let disY = e.touches[0].clientY- dragBox.offsetTop;

                    document.ontouchmove = e => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.touches[0].clientX - disX;
                        let top = e.touches[0].clientY- disY;
                        //移动当前元素
                        dragBox.style.left = left + "px";
                        dragBox.style.top = top + "px";
                    };
                    document.ontouchend = e => {
                        //鼠标弹起来的时候不再移动
                        document.touchmove = null;
                        //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                        document.ontouchend = null;
                    };
                };
            },

            // drbg(el) {
            //     let drbgBox = el; //获取当前元素
            //     drbgBox.onmousedown = e => {
            //         //算出鼠标相对元素的位置
            //         let disX = e.clientX - drbgBox.offsetLeft;
            //         let disY = e.clientY - drbgBox.offsetTop;
            //         document.onmousemove = e => {
            //             //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            //             let left = e.clientX - disX;
            //             let top = e.clientY - disY;
            //             //移动当前元素
            //             drbgBox.style.left = left + "px";
            //             drbgBox.style.top = top + "px";
            //         };
            //         document.onmouseup = e => {
            //             //鼠标弹起来的时候不再移动
            //             document.onmousemove = null;
            //             //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
            //             document.onmouseup = null;
            //         };
            //     };
            // },
        }
    }
</script>

<style scoped>
    .drag {
        width: 100%;
        height: 100vh;
        background-color:#aaaaaa;
    }
    .drag_box {
        width: 150px;
        height: 90px;
        border: 1px solid #666;
        background-color: #ccc;
        /* 使用定位，脱离文档流 */
        position: absolute;
        top: 100px;
        left: 100px;
        /* 鼠标移入变成拖拽手势 */
        cursor: move;

    }
    .drbg {
        width: 100%;
        height: 500px;
        background-color: #fff;
    }
    .drbg_box {
        width: 150px;
        height: 90px;
        border: 1px solid #d25317;
        background-color: rosybrown;
        /* 使用定位，脱离文档流 */
        position: absolute;
        top: 150px;
        left: 150px;
        /* 鼠标移入变成拖拽手势 */
        cursor: move;
    }
</style>