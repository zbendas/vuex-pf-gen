const state = {
    ability_scores: {
        strength: 8,
        dexterity: 14,
        constitution: 14,
        intelligence: 14,
        wisdom: 10,
        charisma: 18
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
    character_level: 1,
    race: "Halfling",
    size: "Small",
    deity: "",
    homeland: "",
    gender: "Male",
    age: 25,
    height: "",
    weight: "",
    hair: "",
    eyes: ""
};

const getters = {
    getAbilityScore: state => ability => {
        return state.ability_scores[ability]
    },
    getAbilityModifier: state => ability => {
        return Math.floor(state.ability_scores[ability] / 2 - 5)
    },
    getTemporaryAdjustment: state => ability => {
        return state.temporary_adjustments[ability]
    },
    getTemporaryModifier: state => ability => {
        return Math.floor((state.ability_scores[ability] + state.temporary_adjustments[ability]) / 2 - 5)
    }
};

const mutations = {
    setTemporaryAdjustment(state, payload) {
        state.temporary_adjustments[payload.ability] = parseInt(payload.value);
    },
};

export default {
    state,
    getters,
    mutations,
}