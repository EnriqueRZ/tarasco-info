<template>
  <div id="main-view">
    <router-view></router-view>
    <header>
      <header-component></header-component>
    </header>
    <body>
      <main-content></main-content>
    </body>
    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
import Header from '../components/HeaderComponent.vue';
import MainContent from '../components/MainContent.vue';
import Footer from '../components/FooterComponent.vue';

export default {
  name: 'main-view',
  data () {
    return {
      
    }
  },
  components: {
    'header-component': Header,
    'main-content': MainContent,
    'footer-component': Footer,
  }
}
</script>

<style>
#main-view {
  height: 100%;
  margin: 0;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  margin-top: 50px;
  padding-bottom: 6rem;
  min-height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

footer {
  margin-top: -50px;
  position: fixed;
  bottom:0;
  width: 100%;
  z-index: 1;
}
/*
footer {
  position: fixed;
  bottom: 0;
  left: 0;
}*/

</style>
