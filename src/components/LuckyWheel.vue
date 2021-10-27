<template>
  <div class="lucky-box">
    <LuckyWheel
      ref="LuckyWheel"
      width="300px"
      height="300px"
      :prizes="prizes"
      :default-style="defaultStyle"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallBack"
      @end="endCallBack"
    />
    <div class="lucky-btn">开始</div>
  </div>
</template>

<script>
import { LuckyWheel } from 'vue-luck-draw';

export default {
  components: { LuckyWheel },
  props: {
    prizes: Array
  },
  data() {
    return {
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
      blocks: [{ padding: '13px', background: '#d64737' }],
      buttons: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px',
          background: '#ffdea0'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    startCallBack() {
      this.$refs.LuckyWheel.play();
      setTimeout(() => {
        this.$refs.LuckyWheel.stop((Math.random() * 8) >> 0);
      }, 3000);
    },
    endCallBack(prize) {
      this.$notify({
        title: '决定了！',
        message: `今天就吃${prize.title}！`,
        position: 'top-left'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.lucky-box {
  position: relative;
  height: 100%;
  // display: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lucky-btn {
  pointer-events: none;
  width: 60px;
  height: 60px;
  color: #fff;
  background: #cd5a5a;
  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
