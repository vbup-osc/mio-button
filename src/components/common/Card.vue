<template>
  <div class="card-wrapper">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-text">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  max-width: max-content;
  margin: 12px 5px;
  padding: 14px 17px;
  border-radius: 30px;
  overflow: hidden;
  transition: box-shadow 0.25s;
  box-shadow: 7px 7px 14px #3a3a3a, -7px -7px 14px #626262;
  color: #fff;
  background: rgb(255, 125, 125);

  &:hover {
    box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .card-header {
    font-size: 20px;
    font-weight: 600;
  }

  .card-text {
    padding: 10px 0;
  }
}
</style>
