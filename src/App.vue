<template>
  <div id="app">
    <Select ref="Select" class="select">
      <template #icon>
        <img src="resources/lang.svg" />
      </template>
      <div>
        <img
          src="resources/China.jpg"
          width="100%"
          @click="changeLang('zh-CN')"
        />
      </div>
      <div>
        <img
          src="resources/Japan.png"
          width="100%"
          @click="changeLang('ja-JP')"
        />
      </div>
      <div>
        <img
          src="resources/England.jpg"
          width="100%"
          @click="changeLang('en-US')"
        />
      </div>
    </Select>
    <div class="container-fluid main-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";

.select {
  position: fixed;
  right: 15px;
  top: 15px;
}

.main-content {
  /*内容部分*/
  min-height: 100vh;
  background-color: #4e4e4e;
}
.btn-buttom {
  border: 0px;
  padding: 1px 10px;
}
.btn-buttom-info {
  color: #fff;
  font-size: 12px;
  background-color: rgb(0, 214, 0);
  border-radius: 5px;
}
.btn-buttom-info:hover {
  color: #fff;
  font-size: 12px;
  background-color: rgb(4, 163, 4);
  border-radius: 5px;
}
.btn-buttom-info:focus {
  color: #fff;
  font-size: 12px;
  background-color: rgb(4, 163, 4);
  border-radius: 5px;
}
.navbar {
  box-shadow: 7px 7px 14px #3a3a3a, -7px -7px 14px #626262;
  background-color: rgba(34, 34, 34, 0.5); /*顶栏部分*/
  margin: 15px;
}
.navbar-fixed-top {
  border-width: 0 0 0px; /*顶栏边缘*/
  border-radius: 30px;
}
.navbar-toggle {
  border: 0px solid transparent; /*右侧按钮边框*/
  margin: 8px 33%;
  padding: 9px 0px;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: rgba(0, 0, 0, 0); /*右侧按钮选定背景色*/
}
.navbar-collapse {
  border-top: 0px solid transparent; /*右侧二级菜单顶部边框*/
}
.navbar-default .navbar-toggle .icon-bar {
  background: #999999; /*右侧按钮颜色*/
}
.dropdown-menu {
  width: 63px;
  min-width: min-content;
}
.navbar-default .navbar-nav > li > a {
  color: #999999; /*右侧语言状态显示文字颜色*/
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: rgba(0, 0, 0, 0.3); /*语言栏背景颜色*/
  color: #999999; /*语言栏显示字体*/
}
.dropdown-menu > li > a {
  color: #cccccc; /*语言栏文字颜色（长）*/
}
.dropdown-menu > li {
  color: #cccccc; /*语言栏文字颜色（长）*/
  width: 76px;
}
.dropdown-toggle {
  border-radius: 30px; /*语言栏形状（长）*/
  margin-top: 3px;
}
.navbar-default {
  text-align: center;
  margin-left: auto;
  max-height: max-content;
  max-width: max-content;
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: unset;
}
.dropdown-menu {
  border-radius: 18px;
  border-top-right-radius: 18px;
  background-color: rgba(0, 0, 0, 0.3); /*语言栏背景颜色（长）*/
  margin-top: 3px;
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 3px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.navbar-default .navbar-brand {
  color: #ffba75; /*标题显示颜色*/
}
.navbar-default .navbar-brand:hover {
  color: #ffd0a1; /*标题显示选定颜色*/
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-color: rgba(0, 0, 0, 0.3); /*语言选择栏选定背景色（大）*/
}
.navbar-default .navbar-nav > li > a:hover {
  color: #ffffff; /*语言选择栏状态显示文字选定颜色（大）*/
}
.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {
  color: #ffffff; /*语言选择栏选择项文字颜色（大）*/
}
.footer {
  width: 100%;
  height: 100%;
  min-height: 60px;
  background-color: #222222;
}
.footer-content {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #c2c2c2;
  font-weight: 600;
}
.text-right {
  text-align: right;
}
</style>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Select from './components/Select'
import Footer from './view/Footer'

@Component({
  components: {
    Select,
    Footer
  }
})
class App extends Vue {
  get currentLang() {
    return this.$i18n.locale;
  }
  created() {
    // eslint-disable-next-line 
    console.log("Produced by Voice Button United Studio");
    this.$i18n.locale = localStorage.getItem("lang") || this.$i18n.locale;
  }
  changeLang(v) {
    this.$i18n.locale = v
    localStorage.setItem("lang", v)
    this.$refs.Select.showItem()
  }
}

export default App;
</script>

