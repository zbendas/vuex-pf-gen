import Vue from "vue";
import Vuex from "vuex";
import character from './modules/character';
import races from './modules/races';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        character: character,
        races: races
    },
    state: {
    },
    mutations: {},
    actions: {}
});
