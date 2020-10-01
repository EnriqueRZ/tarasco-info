<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import MainView from './views/MainView.vue';

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'mainView': MainView,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
