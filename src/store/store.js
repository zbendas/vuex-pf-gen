import Vue from "vue";
import Vuex from "vuex";
import character from './modules/character';
import races from './modules/races';
import reference from './modules/reference';
import skills from './modules/skills';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        character: character,
        races: races,
        reference: reference,
        skills: skills
    },
    state: {
    },
    mutations: {},
    actions: {}
});
