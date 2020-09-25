<template>
  <div id="header-component">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <b-link to="/"> 
          <img src="../assets/logo.png" alt="">
        </b-link>
      </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-brand> 
              <b-link to="/acercade"> 
                Acerca de 
              </b-link>
            </b-navbar-brand>
            <b-navbar-brand>
              <b-link to="/servicios"> 
                Servicios 
              </b-link>
            </b-navbar-brand>
            <b-navbar-brand>
              <b-link to="/contacto"> 
                Contacto 
              </b-link>
            </b-navbar-brand>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
        show: true,
    }
  }
}
</script>

<style lang="scss">
#header-component {
  font-family: 'ui-monospace';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 50px;
  background-color: #f7f7f7;
  display: flex;
}

.navbar {
  overflow: hidden;
  background-color: rgb(243, 243, 243) !important;
  position: fixed;
  top: 0; 
  width: 100%; 
}

.navbar a {
  float: right;
  display: block;
  color: rgb(20, 20, 20);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background: #ddd;
  color: black;
}

.nav-title-tarasco {
  font-family: 'ui-monospace';
  font-size: 50px;
  text-align: left;
  color: black;
}

.nav-title-labs {
  font-family: 'ui-monospace';
  font-size: 50px;
  text-align: left;
  color: rgb(168, 0, 0);
}

.nav-name {
  width: 50%;
  height: 50px;
  margin-left: 5%;
  text-align: left;
}

.nav-labs {
  width: 50%;
  margin-left: 5%;
  text-align: right;
}

</style>