<template>
  <div id="footer-component">
    <div class="iconsSocialMedia">
      <button class="socialMediaBtn">
        <font-awesome-icon 
        :icon="['fab', 'twitter']"
        size="2x"
        :style="{ color: 'black' }"
        />
      </button>

      <button class="socialMediaBtn">
        <font-awesome-icon 
        :icon="['fab', 'facebook']"
        size="2x"
        :style="{ color: 'black' }"
        />
      </button>
      <button class="socialMediaBtn">
        <font-awesome-icon 
        :icon="['fab', 'youtube']"
        size="2x"
        :style="{ color: 'black' }"
        />
      </button>
    </div>
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
#footer-component {
  font-family: 'ui-monospace';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #580075;

  //position:absolute;
  bottom:0;
  width:100%;
  height:80px; 
}

.iconsSocialMedia {
  align-content: center;
  padding-top: 30px;
  padding-left: 25%;
  padding-right: 25%;
  width: 100%;
}

.socialMediaBtn {
  background-color: #580075;
  border: none;
  outline: none;
  margin-right: 4%;
}

</style>