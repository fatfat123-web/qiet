<template>
    <div class="container">
    <div class="rect-wrap">

        <div class="right slide">4</div>
        <div class="front slide">5</div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "newAbbr"
    }
</script>

<style scoped lang="scss">

    .container {
        width: 100%;
        height: 100vh;
        margin: 0;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        z-index: 1;
        background: #aaaaaa;
    }

    .rect-wrap {
        position:relative;
        perspective:2000px;
    }
    .right {
        width:200px;
        height:200px;
        left: 300px;
        transform: rotateY(-90deg);
        transform-origin: left;
        background: #ff00a5;
    }
    .front {
        left: 100px;

        transform: translateZ(200px);
        background: black;
        width:200px;
        height:200px;
    }
    .slide {
        top: 200px;
        position:absolute;
        line-height:200px;
        text-align:center;
        color:#fff;
        font-size:30px;
        font-weight:bold;
    }
</style>