<template>
  <div id="contact-view">
    <header>
      <header-component></header-component>
    </header>
    <body>
      <contact-component></contact-component>
      <footer>
        <footer-component></footer-component>
      </footer>
    </body>
  </div>
</template>

<script>
import Header from '../components/HeaderComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import Footer from '../components/FooterComponent.vue';

export default {
  name: 'contact-view',
  data () {
    return {
      
    }
  },
  components: {
    'header-component': Header,
    'contact-component': ContactComponent,
    'footer-component': Footer,
  }
}
</script>

<style>
#contact-view {
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