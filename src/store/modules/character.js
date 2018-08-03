const state = {
    ability_scores: {
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 14,
        wisdom: 10,
        charisma: 16
    },
    temporary_adjustments: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    character_name: "Lem",
    player_name: "You",
    alignment: "LG",
    classes: [
        {
            class_name: 'Bard',
            level: 1
        },
    ],
    race: "Halfling",
    size: "Small",
    deity: "",
    homeland: "",
    gender: "Male",
    age: 25,
    height: "3 ft.",
    weight: "",
    hair: "",
    eyes: ""
};

const getters = {
    getAbilityScore: (state, getters, rootState) => ability => {
        return state.ability_scores[ability] + rootState.races[state.race].ability_bonus[ability]
    },
    getAbilityModifier: (state, getters, rootState) => ability => {
        return Math.floor((state.ability_scores[ability] + rootState.races[state.race].ability_bonus[ability]) / 2 - 5)
    },
    getClassesLevels: state => {
        let classes_string = [];
        for (let i = 0; i < state.classes.length; i++) {
            classes_string.push(`${state.classes[i].class_name} ${state.classes[i].level}`)
        }
        return classes_string.join(', ')
    },
    getTemporaryAdjustment: state => ability => {
        return state.temporary_adjustments[ability]
    },
    getTemporaryModifier: (state, getters, rootState) => ability => {
        return Math.floor((state.ability_scores[ability] + rootState.races[state.race].ability_bonus[ability] + state.temporary_adjustments[ability]) / 2 - 5)
    },
};

const mutations = {
    updateTemporaryAdjustment(state, payload) {
        state.temporary_adjustments[payload.ability] = parseInt(payload.value);
    },
};

export default {
    state,
    getters,
    mutations,
}