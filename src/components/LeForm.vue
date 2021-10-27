<template>
  <div class="le-form">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>编辑菜单列表</span>
      </div>
      <div>
        <div class="menu-container">
          <el-tag
            v-for="dish in menuList"
            :key="dish"
            closable
            :disable-transitions="false"
            @close="handleClose(dish)"
          >
            {{ dish }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
          >
            添加
          </el-button>
        </div>
        <!-- <div class="form-container">
          <el-form ref="le-form" :model="form" label-width="80px">
            <el-form-item label="添加菜品">
              <el-input v-model="form.model">
                <el-button slot="append">添加</el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </div> -->
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    menu: Array
  },
  data() {
    return {
      form: {},
      menuList: null,
      inputVisible: false,
      inputValue: ''
    };
  },
  created() {
    this.menuList = this.menu;
  },
  methods: {
    handleClose(dish) {
      this.menuList.splice(this.menuList.indexOf(dish), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      const { inputValue } = this;
      if (inputValue) {
        this.menuList.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.le-form {
  padding: 10px;
  height: 100%;
  ::v-deep .el-card__body {
    padding: 10px;
  }
  .menu-container {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 200px;
  }
  .el-tag {
    margin: 5px;
  }
  .button-new-tag {
    margin: 5px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin: 5px;
    vertical-align: bottom;
  }
}
</style>
