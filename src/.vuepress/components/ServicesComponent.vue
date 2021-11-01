<template>
  <div id="services-component">
     <div class="logo">
      <div class="tecnologies">
        Tecnologias
        <b-container class="bv-row">
          <b-row>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'laravel']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'node-js']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'python']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
          </b-row>
        </b-container>

        <b-container class="bv-row">
          <b-row>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'vuejs']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'react']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'docker']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
          </b-row>
        </b-container>

        <b-container class="bv-row">
          <b-row>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'aws']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'github']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
            <b-col>
              <font-awesome-icon 
              :icon="['fab', 'git']"
              size="3x"
              :style="{ color: 'black' }"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>

      <hr class="hr-divisor">
    </div>
  </div>
</template>
</template>

<script>
export default {
  name: 'services-component',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">
#services-component {
  font-family: 'ui-monospace';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  height: auto;
  max-width: none !important;
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