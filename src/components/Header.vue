<template>
  <div>
    <v-app-bar
      color="deep accent-4"
      dense
      
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link active-class="hover" exact  :to="{name:'About'}">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </router-link>

    <router-link active-class="hover" exact  :to="{name: 'Search'}">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </router-link>

    <router-link active-class="hover" exact  :to="{name: 'Map'}">
      <v-btn icon>
        <v-icon>mdi-dropbox</v-icon>
      </v-btn>
    </router-link>
      
    </v-app-bar>
  </div>
</template>
<script>
export default {
    name: "Header",
    props:["title"]
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.hover .v-btn--icon .v-icon{
  color: rgb(202, 96, 114);
}
</style>