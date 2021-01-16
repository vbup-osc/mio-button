<template>
  <div class="btn-wrapper">
    <a :href="url" target="_blank">{{ value }}</a>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number,
      default: ''
    },
    url: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  user-select: none;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
}

.btn-wrapper {
  font-weight: 600;
  max-width: max-content;
  word-break: break-all;
  padding: 3px 12px;
  margin: 5px;
  background: #ff9c9c;
  border-radius: 17px;
  box-shadow: 5px 5px 10px #d16767, -5px -5px 10px #ff9494;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.397);
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
}
</style>
