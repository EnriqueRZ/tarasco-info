<template>
  <div id="services-view">
    <header>
      <header-component></header-component>
    </header>
    <body>
      <services-component></services-component>
      <footer>
        <footer-component></footer-component>
      </footer>
    </body>
  </div>
</template>

<script>
import Header from '../components/HeaderComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import Footer from '../components/FooterComponent.vue';

export default {
  name: 'services-view',
  data () {
    return {
      
    }
  },
  components: {
    'header-component': Header,
    'services-component': ServicesComponent,
    'footer-component': Footer,
  }
}
</script>

<style>
#services-view {
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