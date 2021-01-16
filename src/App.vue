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
    <Header />
    <Live />
    <Player />
    <div class="container-fluid main-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>


<script>
import Select from './components/Select'
import Header from './view/Header'
import Live from './view/Live'
import Player from './view/Player'
import Footer from './view/Footer'

export default {
  components: {
    Select,
    Live,
    Player,
    Header,
    Footer
  },
  methods: {
    changeLang(v) {
      this.$i18n.locale = v
      localStorage.setItem('lang', v)
      this.$refs.Select.showItem()
    }
  },
  created() {
    console.log('Produced by Voice Button United Studio')
    this.$i18n.locale = localStorage.getItem('lang') || this.$i18n.locale
  }
}
</script>

<style lang="scss">
body {
  background: rgb(78, 78, 78);
  margin: 0;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}

a {
  color: #337ab7;
  text-decoration: none;
}
</style>
