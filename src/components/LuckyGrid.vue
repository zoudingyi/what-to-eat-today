<template>
  <div class="lucky-box">
    敬请期待...
    <!-- <LuckyGrid
      ref="LuckDraw"
      width="310px"
      height="330px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :default-style="defaultStyle"
      :active-style="activeStyle"
      @start="startCallBack"
      @end="endCallBack"
    /> -->
  </div>
</template>

<script>
// import { LuckyGrid } from 'vue-luck-draw';

export default {
  // components: { LuckyGrid },
  props: {
    prizes: Array
  },
  data() {
    return {
      blocks: [
        { padding: '1px', background: '#e2cea3', borderRadius: '13px' },
        { padding: '5px 0px', background: '#f3ecdc', borderRadius: '13px' },
        { padding: '1px', background: '#e2cea3', borderRadius: '8px' },
        { padding: '15px 10px', background: '#fffcf5', borderRadius: '8px' }
      ],
      buttons: [
        {
          x: 1,
          y: 1,
          fonts: [{ text: '开始', top: '40%', fontSize: '16px' }]
        }
      ],
      defaultStyle: {
        background: '#ffefd6',
        borderRadius: '5px',
        fontColor: '#755c28',
        fontSize: '10px',
        lineHeight: '12px'
      },
      activeStyle: {
        background: '#de7247',
        fontColor: '#ffefd6'
      }
    };
  },
  mounted() {
    // this.getPrizesList();
  },
  methods: {
    getPrizesList() {
      const prizes = [];
      let axis = [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
        [1, 2],
        [0, 2],
        [0, 1]
      ];
      let data = [
        '电热烘干毛巾架',
        '10元满减红包',
        '2积分',
        '胖喵焖烧罐',
        '5元满减红包',
        '多层置物架',
        '3元直减红包',
        '全场满99减10'
      ];
      axis.forEach((item, index) => {
        prizes.push({
          x: item[0],
          y: item[1],
          title: data[index],
          imgs: [
            {
              width: '100%',
              height: '100%',
              // src: require(`./img/yx/default-${index}.png`),
              // activeSrc: require(`./img/yx/active-${index}.png`)
              src: '',
              activeSrc: ''
            }
          ]
        });
      });
      this.prizes = prizes;
    },
    startCallBack() {
      this.$refs.LuckDraw.play();
      setTimeout(() => {
        this.$refs.LuckDraw.stop((Math.random() * 8) >> 0);
      }, 2000);
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
</style>
