<template>
  <div id="about-view">
    <header>
      <header-component></header-component>
    </header>
    <body>
      <about-content></about-content>
      <footer>
        <footer-component></footer-component>
      </footer>
    </body>
  </div>
</template>

<script>
import Header from '../components/HeaderComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import Footer from '../components/FooterComponent.vue';

export default {
  name: 'about-view',
  data () {
    return {
      
    }
  },
  components: {
    'header-component': Header,
    'about-content': AboutComponent,
    'footer-component': Footer,
  }
}
</script>

<style>
#about-view {
  height: 100%;
  margin: 0;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  display: inline-grid;
  flex-direction: column;
}

footer{
  margin-top: auto;
}
</style>