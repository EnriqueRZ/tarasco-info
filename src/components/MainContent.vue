<template>
  <div id="main-content">
     <div class="logo">
      <b-img 
        :src="require('../assets/logoMain.png')"
        fluid 
        alt="Responsive image"
        class="logo-img"
        >
      </b-img>

      <div class="description">
        Artesanos del software desarrollando soluciones a tu medidad desde territorios 
        del antiguo Imperio Tarasco. 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-content',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">
#main-content {
  font-family: 'ui-monospace';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  height: 300px;
}

.logo {
  font-size: 20px;
  width: 100%;
  padding-left: 10%;;
  padding-right: 10%;

  color: black;
}

.description {
  width: 100%;
  text-transform: uppercase;
  padding-top: 5%;
  padding-left: 20%;;
  padding-right: 20%;
}

.logo-img {
  width: 100%;
  padding-top: 5%;
  padding-left: 15%;;
  padding-right: 15%;
}
</style>