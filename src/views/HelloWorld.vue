<template>
  <div class="hello">
    <div class="main">
        <img alt="Vue logo" class="avatar_logo" src="@/assets/avatar.png" />
    <div class="text-effect">
      <span v-for="item in showTitle" :key="item">{{item}}</span>
    </div>
    <div class="text-effect">
      <span v-for="item in showEnglish.split(' ')" :key="item">{{item}}</span>
    </div>
    <h1>{{ msg }}</h1>
    <p class="moto">
      学海无涯,特别是做IT这行,需要不断的学习来充实自己的技能
      <a
        href="javascript:void(0)"
        rel="noopener"
        @click="toMore"
      >戳我了解更多</a>
    </p>
    <h3>常用网站</h3>
    <ul>
      <li>
        <a
          href="https://ke.qq.com/"
          target="_blank"
          rel="noopener"
        >腾讯课堂</a>
      </li>
      <li>
        <a
          href="https://www.bilibili.com/"
          target="_blank"
          rel="noopener"
        >Bilibili</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web" target="_blank" rel="noopener">MDN</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">网易云课堂</a>
      </li>
      <li>
        <a href="https://github.com/" target="_blank" rel="noopener">Github</a>
      </li>
      <li>
        <a href="https://juejin.im/" target="_blank" rel="noopener">掘金</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">...</a>
      </li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    msg: String
  },
  data() {
    return {
      showTitle: "心若向阳,自带光芒",
      showEnglish: "WHAT MAKES U SHINE?"
    };
  },
  methods: {
    toMore() {
      this.$router.push({path:'/mine'})
    },
    toFullPage() {
      this.$router.push({path:'/fullpage'})
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height:100vh;
  text-align: center;
  background-color: #f5f7ff;
  padding: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .main{
    background-color: #fff;
    max-width:570px;
    padding: 50px 20px;
    border-radius: 10px;
    transition: all .2s linear;
    position: relative;
    &:hover{
       transform: translate3d(0, -2px, 0);
       box-shadow: 0 4px 8px #e1e1e1;
    }
  }
  .avatar_logo {
    width: 10rem;
  }
  .moto{
    margin-top:10px;
    line-height: 24px;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  .text-effect {
    color: #ffff00;
    font-family: "Cabin Sketch", cursive;
    font-size: 60px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    position: relative;
    &:first-child span {
      font-size: 20px;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
    span {
      display: inline-block;
      animation: animate 0.5s linear infinite both;
    }
  }
  .text-effect 
  .text-effect span:nth-child(1),
  .text-effect span:nth-child(4),
  .text-effect span:nth-child(7),
  .text-effect span:nth-child(10) {
    color: #4cd137;
  }
  .text-effect span:nth-child(2),
  .text-effect span:nth-child(5),
  .text-effect span:nth-child(8) {
    color: #ff0000;
  }
  h3 {
    margin: 40px 0 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}


@font-face {
  font-family: "Cabin Sketch";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Cabin Sketch Bold"), local("CabinSketch-Bold"),
    url(https://fonts.gstatic.com/s/cabinsketch/v13/QGY2z_kZZAGCONcK2A4bGOj0I_1Y5tjz.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@keyframes animate {
  0%,
  50%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(4deg) scale(0.98);
  }
  75% {
    transform: rotate(-4deg) scale(1.02);
  }
}
@media only screen and (max-width: 990px) {
  .text-effect {
    font-size: 100px;
  }
}
@media only screen and (max-width: 767px) {
  .text-effect {
    font-size: 80px;
  }
}
@media only screen and (max-width: 479px) {
  .text-effect {
    font-size: 60px;
  }
}
@media only screen and (max-width: 359px) {
  .text-effect {
    font-size: 45px;
  }
}
$screen-sm-min:768px;
$screen-md-min:992px;
$screen-lg-min:1200px;
/* 小屏幕（手机，小于等于 768px） */
@media (max-width: $screen-sm-min) { 
    .hello{
      padding:0;
      .main{
        height:100%;
        .avatar_logo{
          width: 7rem;
        }
      }

      .text-effect{
        font-size:38px;
      }

    }
 }

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: $screen-md-min) {  }

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: $screen-lg-min) {  }

</style>
