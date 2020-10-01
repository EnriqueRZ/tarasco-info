<template>
  <div id="about-component">
    <div class="logo">
      <div class="description">
        DESARROLLADORES DE SOFTWARE CREANDO HERRAMIENTAS 
        PARA EL FUTURO PRÓXIMO DE LA TECNOLOGÍA
        <br>
        <font-awesome-icon 
        :icon="['fas', 'code']"
        size="3x"
        :style="{ color: 'black' }"
        /> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-component',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">
#about-component {
  font-family: 'ui-monospace';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  height: auto;
}

.logo {
  font-size: 20px;
  width: 100%;
  padding-left: 10%;;
  padding-right: 10%;

  color: black;
}

.description {
  font-size: 3vw;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  padding-top: 5%;
  padding-left: 5%;;
  padding-right: 5%;
  padding-bottom: 5%;
}

.tecnologies {
  font-size: 3vw;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  padding-top: 5%;
  padding-left: 5%;;
  padding-right: 5%;
  padding-bottom: 5%;
}

.logo-img {
  padding-top: 5%;
  padding-left: 5%;;
  padding-right: 5%;
}

.hr-divisor {
  border: 1px rgb(151, 151, 151) solid;
}

.bv-row {
  padding-top: 30px;
}

.col {
  position: inherit !important;
}

@media only screen and (max-width: 600px) {
  .logo-img {
    padding-top: 5%;
    padding-left: 0%;;
    padding-right: 0%;
  }

  .description {
    font-size: 4.5vw;
    width: 100%;
    text-transform: uppercase;
    padding-top: 5%;
    padding-left: 0%;;
    padding-right: 0%;
  }
}
</style>