<template>
  <div class="home-mobile">
    <div class="header">
      {{ title }}
    </div>
    <div class="weheel-box">
      <LuckyWheel width="300px" height="300px" :prizes="prizes"></LuckyWheel>
    </div>
    <div class="form-box">
      <LeForm :menu="menu"></LeForm>
    </div>
  </div>
</template>

<script>
import LuckyWheel from '@/components/LuckyWheel.vue';
import LeForm from '@/components/LeForm.vue';

export default {
  components: {
    LuckyWheel,
    LeForm
  },
  data() {
    return {
      title: '今！天！吃！啥！',
      menu: ['黄焖鸡', '干锅', '冒菜', '肯德基', '北京烤鸭', '砂锅'],
      prizes: []
    };
  },
  watch: {
    menu: {
      immediate: false,
      handler(val) {
        localStorage.setItem('MenuList', JSON.stringify(val));
        this.prizes = this.treating(val);
      }
    }
  },
  created() {
    const menu = localStorage.getItem('MenuList');
    if (menu) {
      this.menu = JSON.parse(menu);
    }
    this.prizes = this.treating(this.menu);
  },
  methods: {
    treating(arr) {
      const prizes = [];
      arr.forEach((item, index) => {
        prizes.push({
          title: item,
          background: index % 2 ? '#f9e3bb' : '#f8d384',
          fonts: [{ text: item, top: '25%' }]
        });
      });
      return prizes;
    }
  }
};
</script>

<style lang="scss">
.home-mobile {
  height: 100%;
  .header {
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .weheel-box {
    // display: none;
    padding: 20px 0;
  }
  .form-box {
    height: calc(100vh - 385px);
  }
}
</style>
