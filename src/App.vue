<template>
  <Header />
  <router-view></router-view>

  <!-- <HelloWorld /> -->
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    HelloWorld,
    Header,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
