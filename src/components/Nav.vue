<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">大转盘</el-menu-item>
      <el-menu-item index="2">九宫格</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      activeIndex: null
    };
  },
  created() {
    this.activeIndex = this.active;
  },
  methods: {
    handleSelect(key) {
      this.$emit('handleSelect', key);
    }
  }
};
</script>

<style></style>
