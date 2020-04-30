<template>
  <div class="nav">
    <img src="../assets/avatar.png" alt class="header-icon" />
    <span class="header-name">潘龙宝</span>
    <ul>
        <li>
            <a href="#tech_site">技能栈</a>
            <a href="#pro_site">经历项目</a>
            <a href="#now_site">最近关注</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav_header"
};
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: 1px solid #eee;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  position: relative;
  .header-icon {
    height: 100%;
    cursor: pointer;
    transition: 1s linear;
    &:hover{
        transform: rotate(360deg);
    }
  }
  .header-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
    top: -10px;
    left: 10px;
  }

  ul{
      float:right;
      list-style: none;
      li{
          float:left;
          a{
              text-decoration: none;
              color:#333;
              padding: 0 10px;
              &:hover{
                  opacity: .6;
              }
          }
      }
  }
}
</style>