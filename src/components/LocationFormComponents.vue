<template>
    <div  class="home-location-container">
    <div class="img-box"></div>
    <div class="form-box">
        <div class="line-box">
            <div class="line line1" style="background-color: rgb(21, 143, 210);"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>
        <label for="location">どこへ行きますか？</label>
        <input id="location" class="form location" type="text" :value="$store.state.location"  @input="location">
        <div class="btn-box">
            <button  class="back">＜</button>
            <button @click="changeSet('DayStartComponents')"  class="next">＞</button>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
    name: "LocationFormComponents",
     methods: {
        ...mapMutations(["changeSet"]),
        location(e){
            this.$store.commit("changeLocation", e.target.value)
        }
    }
}
</script>






<style scoped>
.img-box{
    width: 100%;
    height: 100vh;
    background-color: rgb(75, 151, 186);
    background-image: url();
    background-size: cover;
    filter: blur(2px);
    position: absolute;

}
.title{
    position: relative;
    color: white;
    font-size: 50px;
    text-align: center;
    top: 250px;
    margin-left: 10px;
    
}
.btn{
    padding-left: 30px;
    font-size: 20px;
    text-align: left;
    margin-left: 70px;
    top: 300px;
    position: relative;
    width: 60%;
    height: 40px;
    border-radius: 15px;
    border: none;
    background-color: rgba(125, 125, 125, 0.6);
    color: white;
}
.form-box{
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: rgba(125, 125, 125, 0.8);
    border-radius: 15px;
    top: 100px;
    left: 35px;
}
.line{
    width: 25px;
    height: 5px;
    background-color: rgb(89, 95, 97);
    margin: 20%  20px;
}
.line-box{
    display: flex;
    justify-content: center;
}
label{
    position: absolute;
    color: white;
    margin:100px 0 0  50px;

}
.form{
    margin:150px 0 0  35px;
    width: 80%;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-bottom:lightgray 1px solid;
    color: white;
}

.btn-box{
    position: relative;
    display: flex;
    justify-content: space-around;
    top: -200px;
}
.back{
    font-size: 20px;
    text-align: center;
    top: 300px;
    position: relative;
    width: 50px;
    height: 40px;
    border-radius: 15px;
    border: none;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
}
.next{
    font-size: 20px;
    text-align: center;
    top: 300px;
    position: relative;
    width: 50px;
    height: 40px;
    border-radius: 15px;
    border: none;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
}

.location{
    font-size: 21.5px;
}

</style>