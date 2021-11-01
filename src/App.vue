<template>
  <div id="app">
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import homeMobile from '@/views/home-mobile.vue';
import homePC from '@/views/home-PC.vue';

export default {
  name: 'App',
  components: {
    homeMobile,
    homePC
  },
  data() {
    return {
      currentComponent: 'homeMobile'
    };
  },
  created() {
    // if (this.isPC) {
    //   this.currentComponent = 'homePC';
    // } else {
    //   this.currentComponent = 'homeMobile';
    // }
  },
  methods: {
    isPC() {
      //是否为PC端
      const userAgentInfo = navigator.userAgent;
      const Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod'
      ];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
  }
};
</script>

<style lang="scss"></style>
