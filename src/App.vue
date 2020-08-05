<template>
  <v-app class="app">
    
  <router-view />
  </v-app>
</template>

<script>


export default {
  name: "App",

  components: {

  },

  data: () => ({
    //
  })
};
</script>
<style >
.app{
  width: 100%;
  height: 100vh;
}
</style>