<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-header>
          <Nav :active="activeIndex" @handleSelect="handleSelect"></Nav>
        </el-header>
        <el-main>
          <keep-alive>
            <component
              v-bind:is="currentComponent"
              :prizes="prizes"
            ></component>
          </keep-alive>
        </el-main>
      </el-container>
      <el-aside width="500px">
        <LeForm :menu="menu"></LeForm>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import LuckyWheel from '@/components/LuckyWheel.vue';
import LeForm from '@/components/LeForm.vue';
import LuckyGrid from '@/components/LuckyGrid.vue';
// test
export default {
  name: 'App',
  components: {
    Nav,
    LuckyWheel,
    LuckyGrid,
    LeForm
  },
  data() {
    return {
      currentComponent: 'LuckyWheel',
      activeIndex: '1',
      menu: ['黄焖鸡', '干锅', '冒菜', '炒菜', '北京烤鸭', '砂锅'],
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
    handleSelect(key) {
      if (key == '1') {
        this.currentComponent = 'LuckyWheel';
      } else {
        this.currentComponent = 'LuckyGrid';
      }
    },
    treating(arr) {
      const prizes = [];
      if (this.currentComponent === 'LuckyWheel') {
        arr.forEach((item, index) => {
          prizes.push({
            title: item,
            background: index % 2 ? '#f9e3bb' : '#f8d384',
            fonts: [{ text: item, top: '25%' }]
          });
        });
      } else {
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
        axis.forEach((item, index) => {
          prizes.push({
            x: item[0],
            y: item[1],
            title: arr[index],
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
      }
      return prizes;
    }
  }
};
</script>

<style lang="scss"></style>
