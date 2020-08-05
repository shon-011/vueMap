<template>
<div>
    <Header title="SEARCH"/>
    <!-- <LocationFormComponents /> -->
    <!-- <DayStartComponents /> -->
    <!-- <DayEndComponents /> -->
    <keep-alive>
        <component :is="$store.state.daySet"></component>
    </keep-alive>

     
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import LocationFormComponents from "@/components/LocationFormComponents.vue";
import DayStartComponents from "@/components/DayStartComponents.vue";
import DayEndComponents from "@/components/DayEndComponents.vue";


export default {
    components:{
        Header,
        LocationFormComponents,
        DayStartComponents,
        DayEndComponents
    },
};
</script>