<template>
  <div class="about">
    <h1>This is an about page</h1>


  </div>
</template>
<script>
import axios from "axios";

export default {
  mounted() {
    console.log('aaa');
    axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=jlglButOWZ4NJmK7A2sYT74hHoljdd0U")
    .then(res => {
      console.log(res);
    })
  }
}
</script>>