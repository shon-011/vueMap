<template>
<div>
   
    <MapComponents />
    <Header title="MAP"/>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import MapComponents from "@/components/MapComponents.vue";

export default {
    components:{
        Header,
        MapComponents
    }
};
</script>