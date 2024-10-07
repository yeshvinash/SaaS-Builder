<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<template>
  <div id="app">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<style></style>
