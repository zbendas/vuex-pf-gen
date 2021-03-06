import { Inventory } from "../../scripts/inventory";
import { Item, SlottedItem, ArmorItem, MagicItem} from "../../scripts/item";

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
        cmb_misc_mod: 0,
        cmd_misc_mod: 0,
    },
    skills: [
        {skill_name: "Acrobatics", ranks: 8, misc_mod: 0},
        {skill_name: "Appraise", ranks: 0, misc_mod: 0},
        {skill_name: "Bluff", ranks: 8, misc_mod: 0},
        {skill_name: "Climb", ranks: 1, misc_mod: 0},
        {skill_name: "Diplomacy", ranks: 8, misc_mod: 0},
        {skill_name: "Disable Device", ranks: 0, misc_mod: 0},
        {skill_name: "Disguise Self", ranks: 0, misc_mod: 0},
        {skill_name: "Escape Artist", ranks: 0, misc_mod: 0},
        {skill_name: "Fly", ranks: 0, misc_mod: 0},
        {skill_name: "Handle Animal", ranks: 0, misc_mod: 0},
        {skill_name: "Heal", ranks: 0, misc_mod: 0},
        {skill_name: "Intimidate", ranks: 0, misc_mod: 0},
        {skill_name: "Linguistics", ranks: 0, misc_mod: 0},
        {skill_name: "Perception", ranks: 2, misc_mod: 0},
        {skill_name: "Ride", ranks: 0, misc_mod: 0},
        {skill_name: "Sense Motive", ranks: 4, misc_mod: 0},
        {skill_name: "Sleight of Hand", ranks: 0, misc_mod: 0},
        {skill_name: "Spellcraft", ranks: 0, misc_mod: 0},
        {skill_name: "Stealth", ranks: 10, misc_mod: 0},
        {skill_name: "Survival", ranks: 0, misc_mod: 0},
        {skill_name: "Swim", ranks: 0, misc_mod: 0},
        {skill_name: "Use Magic Device", ranks: 0, misc_mod: 0},
        {skill_name: "Craft", specialization: "alchemy", ranks: 1, misc_mod: 0},
        {skill_name: "Craft", specialization: "armor", ranks: 2, misc_mod: 0},
        {skill_name: "Perform", specialization: "wind", ranks: 1, misc_mod: 0},
        {skill_name: "Knowledge", specialization: "arcana", ranks: 1, misc_mod: 0},
        {skill_name: "Knowledge", specialization: "nobility", ranks: 1, misc_mod: 0},
    ],
    inventory: {
        equipped: new Inventory([{
            slot: 'neck',
            item: new MagicItem("Hand of the Mage", 2, "neck", "faint", "transmutation", 2, 900, "This mummified elf hand hangs by a golden chain around a character's neck. It allows the wearer to utilize the spell \"Mage Hand\" at will.")
        }]),
        unequipped: [
            {
                item_name: "Torch",
                quantity: 1
            },
            {
                item_name: "Rope",
                quantity: 1
            },
            {
                item_name: "Chalk",
                quantity: 1
            },
            {
                item_name: "Parchment",
                quantity: 1
            },
            new Item("Collapsible bathtub", 20)
        ],
    },
    character_name: "Lem",
    player_name: "You",
    alignment: "LG",
    classes: [
        {
            class_name: 'Bard',
            level: 10
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
        return state.ability_scores[ability] + rootState.races[state.race.toLowerCase()].ability_bonus[ability]
    },
    getAbilityModifier: (state, getters, rootState) => ability => {
        return Math.floor((state.ability_scores[ability] + rootState.races[state.race.toLowerCase()].ability_bonus[ability]) / 2 - 5)
    },
    getTemporaryAbilityAdjustment: state => ability => {
        return state.temporary_ability_adjustments[ability]
    },
    getTemporaryAbilityModifier: (state, getters, rootState) => ability => {
        return Math.floor((state.ability_scores[ability] + rootState.races[state.race.toLowerCase()].ability_bonus[ability] + state.temporary_ability_adjustments[ability]) / 2 - 5)
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
    getConsolidatedBABArray: (state, getters, rootState, rootGetters) => {
        let all_bab_arrays = state.classes.map(curr_class => rootGetters.getBABArray(rootState.reference.class_info[curr_class.class_name.toLowerCase()].bab, curr_class.level)).sort((a, b) => {
            return a.length - b.length
        });
        let max_length = all_bab_arrays[all_bab_arrays.length - 1].length;
        // Equalize the length of each BAB array
        for (let array of all_bab_arrays) {
            while (array.length < max_length) {
                array.push(0);
            }
        }
        // Initialize array at necessary length, then fill it with zeroes
        let consolidated_bab_array = new Array(max_length);
        consolidated_bab_array.fill(0);
        for (let i = 0; i < max_length; i++) {
            for (let j = 0; j < all_bab_arrays.length; j++) {
                consolidated_bab_array[i] += all_bab_arrays[j][i];
            }
        }
        return consolidated_bab_array;
    },
    getCombatManeuverBonus: (state, getters) => {
        return getters.getTemporaryAbilityModifier("strength") - getters.getSizeModifier + getters.getBAB + state.combat_stats.cmb_misc_mod;
    },
    getCombatManeuverDefense: (state, getters) => {
        return 10 + getters.getTemporaryAbilityModifier("strength") + getters.getTemporaryAbilityModifier("dexterity") + getters.getBAB - getters.getSizeModifier + state.combat_stats.cmd_misc_mod;
    },
    getBaseSpeed: (state, getters, rootState) => {
        return rootState.reference.races[state.race.toLowerCase()].speed;
    },
    getArmoredSpeed: () => {
        // TODO Figure out how this will work.
        console.warn('Armor speed calculation not yet implemented.');
    },
    getSwimSpeed: (state, getters, rootState) => {
        return rootState.reference.races[state.race.toLowerCase()].hasOwnProperty('swim_speed') ? rootState.reference.races[state.race.toLowerCase()].swim_speed : 'N/A';
    },
    getClimbSpeed: (state, getters, rootState) => {
        return rootState.reference.races[state.race.toLowerCase()].hasOwnProperty('climb_speed') ? rootState.reference.races[state.race.toLowerCase()].climb_speed : 'N/A';
    },
    getBurrowSpeed: (state, getters, rootState) => {
        return rootState.reference.races[state.race.toLowerCase()].hasOwnProperty('burrow_speed') ? rootState.reference.races[state.race.toLowerCase()].burrow_speed : 'N/A';
    },
    getFlySpeed: (state, getters, rootState) => {
        return rootState.reference.races[state.race.toLowerCase()].hasOwnProperty('fly_speed') ? rootState.reference.races[state.race.toLowerCase()].fly_speed : 'N/A';
    },
    getFlyManeuverability: (state, getters, rootState) => {
        return rootState.reference.races[state.race.toLowerCase()].hasOwnProperty('fly_maneuverability') ? rootState.reference.races[state.race.toLowerCase()].fly_maneuverability : 'Average';
    },
    getClassSkills: (state, getters, rootState) => {
        // Get array of all class names for this character
        // Get all the class skills from the reference files, based on the class names
        // Flatten out the array from 2- to 1-dimensional
        // Filter to make the array contain only unique values
        // Make lowercase
        return state.classes.map(curr_class => curr_class.class_name).map(class_name => rootState.reference.class_info[class_name.toLowerCase()].class_skills).reduce((flatten, arr) => [...flatten, ...arr]).filter((value, index, self) => {
            return self.indexOf(value) === index
        }).map(mixed_case => mixed_case.toLowerCase());
    },
};

const mutations = {
    updateTemporaryAbilityAdjustment(state, payload) {
        state.temporary_ability_adjustments[payload.ability] = parseInt(payload.value);
    },
    updateTemporarySaveModifier(state, payload) {
        state.saves[payload.save].temp_modifier = parseInt(payload.value);
    },
    updateCMBMiscMod(state, value) {
        state.combat_stats.cmb_misc_mod = parseInt(value);
    },
    updateCMDMiscMod(state, value) {
        state.combat_stats.cmd_misc_mod = parseInt(value);
    },
    updateInitiativeMiscModifier(state, value) {
        state.combat_stats.initiative_misc_modifier = parseInt(value);
    },
    updateSkillMiscMod(state, payload) {
        state.skills.filter(element => {
            return element.skill_name === payload.skill_name
        })[0].misc_mod = parseInt(payload.value);
    },
    updateGroupSkillMiscMod(state, payload) {
        state.skills.filter(element => {
            return element.skill_name === payload.skill_name
        }).filter(element => {
            return element.specialization === payload.specialization
        })[0].misc_mod = parseInt(payload.value);
    },
};

export default {
    state,
    getters,
    mutations,
}