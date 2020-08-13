<template>
  <div style="max-width:640px; margin:0 auto; height:100%; position:relative;">
    <div class="swiper-container" id="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide aa"></div>
        <div class="swiper-slide bb"></div>
        <div class="swiper-slide cc"></div>
        <div class="swiper-slide dd"></div>
        <div class="swiper-slide aa"></div>
      </div>
    </div>
    <div class="thumb-list">
      <div class="swiper-container thumb" id="thumb1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="@/assets/test/1.jpg"  ></div>
          <div class="swiper-slide"><img src="@/assets/test/mina.jpg"  ></div>
        </div>
      </div>
      <div class="swiper-container thumb" id="thumb2">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="@/assets/test/2.jpg"  ></div>
          <div class="swiper-slide"><img src="@/assets/test/minb.jpg"  ></div>
        </div>
      </div>
      <div class="swiper-container thumb" id="thumb3">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="@/assets/test/3.jpg"  ></div>
          <div class="swiper-slide"><img src="@/assets/test/minc.jpg"  ></div>
        </div>
      </div>
      <div class="swiper-container thumb" id="thumb4">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="@/assets/test/4.jpg"  ></div>
          <div class="swiper-slide"><img src="@/assets/test/mind.jpg"  ></div>
        </div>
      </div>
      <div class="swiper-container thumb" id="thumb5">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="@/assets/test/1.jpg"  ></div>
          <div class="swiper-slide"><img src="@/assets/test/mina.jpg"  ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'test',
    mounted() {
      let bannerSwiper = new Swiper('#banner', {
        mousewheel: true,
        effect: 'coverflow',
        speed: 400,
        watchSlidesProgress: true,
        on: {
          touchMove: function() {
            for (let i = 0; i < this.slides.length; i++) {
              let slideProgress = this.slides[i].progress
              if (Math.abs(slideProgress) < 1) {
                thumbSwiper[i].setTranslate(thumbSwiper[i].width * (Math.abs(slideProgress) - 1))
              }
            }
          },
          transitionStart: function() {
            let activeIndex = this.activeIndex
            for (let i = 0; i < thumbSwiper.length; i++) {
              if (i === activeIndex) {
                thumbSwiper[i].slideTo(1);
              } else {
                thumbSwiper[i].slideTo(0);
              }
            }
          },
        }
      });
      let thumbSwiper = new Swiper('.thumb', {
        watchSlidesProgress: true,

        effect: 'cube',
        touchRatio: 0,
        cubeEffect: {
          shadow: false,
        },
        on: {
          tap: function() {
            bannerSwiper.slideTo(this.$el.index(),1,false);
          },
        },
      });
      thumbSwiper[0].slideTo(1, 0)
    }
  };
</script>

<style scoped>
  @import '../assets/css/swiper.min.css';
  * {
    margin: 0;
    padding: 0;
  }
  html, body, #banner, #banner .swiper-slide {
    height: 100%;
  }
  body {
    background: #000;
    overflow: hidden;
  }
  #banner .swiper-slide {
    overflow: hidden;
  }
  #banner .swiper-slide img {
    width: 100%;
  }
  .aa{ background: url(../assets/test/maxa.jpg) no-repeat;
    background-size: 100% 100%;}
  .bb{ background: url(../assets/test/maxb.jpg) no-repeat;
    background-size: 100% 100%;}
  .cc{ background: url(../assets/test/maxc.jpg) no-repeat;
    background-size: 100% 100%;}
  .dd{ background: url(../assets/test/maxd.jpg) no-repeat;
    background-size: 100% 100%;}
  .thumb-list {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 5%;
  }
  .thumb {
    width: 10%;
    margin-left: 4%;
    float: left;
  }
  .thumb .swiper-slide img {
    width: 100%;
    display: block;
  }
</style>
