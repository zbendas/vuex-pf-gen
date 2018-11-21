const state = {
    ability_scores: {
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 14,
        wisdom: 10,
        charisma: 16
    },
    temporary_ability_adjustments: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    saves: {
        fortitude: {
            magic_modifier: 0,
            misc_modifier: 0,
            temp_modifier: 0,
        },
        reflex: {
            magic_modifier: 0,
            misc_modifier: 0,
            temp_modifier: 0,
        },
        will: {
            magic_modifier: 0,
            misc_modifier: 0,
            temp_modifier: 0,
        },
    },
    combat_stats: {
        armor_class: {
            armor_bonus: 0,
            shield_bonus: 0,
            natural_armor: 0,
            deflection_modifier: 0,
            misc_bonus: 0,
        },
        initiative_misc_modifier: 0,
        spell_resistance: 0,
    },
    inventory: {},
    character_name: "Lem",
    player_name: "You",
    alignment: "LG",
    classes: [
        {
            class_name: 'Bard',
            level: 1
        },
        {
            class_name: 'Fighter',
            level: 4
        }
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
    getClassesLevels: state => {
        let classes_string = [];
        for (let i = 0; i < state.classes.length; i++) {
            classes_string.push(`${state.classes[i].class_name} ${state.classes[i].level}`)
        }
        return classes_string.join(', ')
    },
    getTotalLevel: state => {
        return state.classes.reduce((total, current) => total += current.level);
    },
    getAbilityScore: (state, getters, rootState) => ability => {
        return state.ability_scores[ability] + rootState.races[state.race].ability_bonus[ability]
    },
    getAbilityModifier: (state, getters, rootState) => ability => {
        return Math.floor((state.ability_scores[ability] + rootState.races[state.race].ability_bonus[ability]) / 2 - 5)
    },
    getTemporaryAbilityAdjustment: state => ability => {
        return state.temporary_ability_adjustments[ability]
    },
    getTemporaryAbilityModifier: (state, getters, rootState) => ability => {
        return Math.floor((state.ability_scores[ability] + rootState.races[state.race].ability_bonus[ability] + state.temporary_ability_adjustments[ability]) / 2 - 5)
    },
    getTemporarySaveModifier: state => save => {
        return state.saves[save].temp_modifier
    },
    getFortitudeBaseSave: (state, getters, rootState, rootGetters) => {
        return state.classes.map(curr_class => rootGetters.getBaseSave(rootState.reference.class_info[curr_class.class_name.toLowerCase()].fortitude_save, curr_class.level)).reduce((total, current) => total += current);
    },
    getReflexBaseSave: (state, getters, rootState, rootGetters) => {
        return state.classes.map(curr_class => rootGetters.getBaseSave(rootState.reference.class_info[curr_class.class_name.toLowerCase()].reflex_save, curr_class.level)).reduce((total, current) => total += current)
    },
    getWillBaseSave: (state, getters, rootState, rootGetters) => {
        return state.classes.map(curr_class => rootGetters.getBaseSave(rootState.reference.class_info[curr_class.class_name.toLowerCase()].will_save, curr_class.level)).reduce((total, current) => total += current)
    },
    getFortitudeSave: (state, getters) => {
        return getters.getFortitudeBaseSave + getters.getTemporaryAbilityModifier("constitution") + Object.values(state.saves.fortitude).reduce((total, current) => total += current);
    },
    getReflexSave: (state, getters) => {
        return getters.getReflexBaseSave + getters.getTemporaryAbilityModifier("dexterity") + Object.values(state.saves.reflex).reduce((total, current) => total += current);
    },
    getWillSave: (state, getters) => {
        return getters.getWillBaseSave + getters.getTemporaryAbilityModifier("wisdom") + Object.values(state.saves.will).reduce((total, current) => total += current);
    },
    getInitiative: (state, getters) => {
        return getters.getTemporaryAbilityModifier("dexterity") + state.combat_stats.initiative_misc_modifier;
    },
    getSizeModifier: state => {
        switch (state.size) {
            case "Colossal":
                return -8;
            case "Gargantuan":
                return -4;
            case "Huge":
                return -2;
            case "Large":
                return -1;
            case "Medium":
                return 0;
            case "Small":
                return 1;
            case "Tiny":
                return 2;
            case "Diminutive":
                return 4;
            case "Fine":
                return 8;
            default:
                return 0;
        }
    },
    getArmorClass: (state, getters) => {
        return 10 + Object.values(state.combat_stats.armor_class).reduce((total, current) => total += current) + getters.getSizeModifier + getters.getTemporaryAbilityModifier("dexterity")
    },
    getTouchArmorClass: (state, getters) => {
        return getters.getArmorClass - (state.combat_stats.armor_class.armor_bonus + state.combat_stats.armor_class.shield_bonus + state.combat_stats.armor_class.natural_armor);
    },
    getFlatFootedArmorClass: (state, getters) => {
        return getters.getArmorClass - getters.getTemporaryAbilityModifier("dexterity");
    },
    getBAB: (state, getters, rootState, rootGetters) => {
        return state.classes.map(curr_class => Math.max(...rootGetters.getBABArray(rootState.reference.class_info[curr_class.class_name.toLowerCase()].bab, curr_class.level))).reduce((total, current) => total += current)
    },
    getCombatManeuverBonus: (state, getters) => {
        return getters.getTemporaryAbilityModifier("strength") - getters.getSizeModifier + getters.getBAB;
    },
    getCombatManeuverDefense: (state, getters) => {
        return 10 + getters.getTemporaryAbilityModifier("strength") + getters.getTemporaryAbilityModifier("dexterity") + getters.getBAB - getters.getSizeModifier;
    },
};

const mutations = {
    updateTemporaryAbilityAdjustment(state, payload) {
        state.temporary_ability_adjustments[payload.ability] = parseInt(payload.value);
    },
    updateTemporarySaveModifier(state, payload) {
        state.saves[payload.save].temp_modifier = parseInt(payload.value);
    },
};

export default {
    state,
    getters,
    mutations,
}