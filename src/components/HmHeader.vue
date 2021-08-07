<template>
  <div class="hm-header">
    <div class="left" @click="back">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="center"><slot></slot></div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
.hm-header {
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  line-height: 50px;
  text-align: center;
  .right,
  .left {
    width: 50px;
  }
  .center {
    flex: 1;
  }
}
</style>
