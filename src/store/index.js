import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    daySet: 'LocationFormComponents',
    location: '',
    dayStart: '',
    dayEnd: '',
  },
  mutations: {
    changeSet(state, setComponents) {
      state.daySet = setComponents
      console.log(state.location);
    },
    changeLocation(state,newlocation){
      state.location = newlocation
      console.log(newlocation)
    },
    changeStart(state, newStart){
      state.dayStart = newStart
      console.log(newStart);
    },
    changeEnd(state, newEnd){
      state.dayEnd = newEnd
      console.log(newEnd);
    }
  },
  actions: {},
  modules: {}
});
