<template>
  <div class="control-wrapper">
    <div @click="showItem" class="menu-btn">
      <img v-if="isShowItem" src="@/assets/images/close.svg" />
      <img v-else src="@/assets/images/menu.svg" />
    </div>
    <div class="btn-list" ref="btnList">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowItem: false
    }
  },
  methods: {
    showItem() {
      if (!this.isShowItem) {
        this.$refs.btnList.style.width = this.$refs.btnList.children.length * 46 + 'px'
      } else {
        this.$refs.btnList.style.width = '0px'
      }
      this.isShowItem = !this.isShowItem
    }
  }
}
</script>

<style lang="scss" scoped>
.control-wrapper {
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  user-select: none;
  .menu-btn {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 40px;
    margin: 0 0 0 5px;
    background: rgba(255, 123, 123, 0.76);
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
    img {
      width: 30px;
    }
  }
  .btn-list {
    overflow: hidden;
    z-index: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 0;
    transition: width 0.6s;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: rgba(255, 123, 123, 0.76);
      border-radius: 50%;
      margin: auto 5px;
      flex-shrink: 0;
      box-shadow: 1px 1px 5px #343434;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 123, 123, 0.9);
      }
    }
  }
}
</style>
