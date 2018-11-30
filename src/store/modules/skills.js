class Skill {
    constructor(name, modifier, trained_only = false) {
        this.skill_name = name;
        this.modifier = modifier;
        this.trained_only = trained_only;
    }
}

class MultiSkill extends Skill {
    constructor(group_name, modifier, trained_only = false) {
        super(group_name, modifier, trained_only);
        this.group_skills = [];
    }

    // Should be equivalent to Python __iter__ and iter() to delegate iteration to array
    [Symbol.iterator]() {
        return this.group_skills[Symbol.iterator]();
    }

    add_skill(subskill_name) {
        this.group_skills.push(`${this.skill_name} (${subskill_name})`);
        return this;
    }

    add_skills(...args) {
        for (let arg of args) {
            this.add_skill(arg);
        }
        return this;
    }
}


const state = {
    acrobatics: new Skill("Acrobatics", "dexterity"),
    appraise: new Skill("Appraise", "intelligence"),
    bluff: new Skill("Bluff", "charisma"),
    climb: new Skill("Climb", "strength"),
    craft: new MultiSkill("Craft", "intelligence"),
    diplomacy: new Skill("Diplomacy", "charisma"),
    disable_device: new Skill("Disable Device", "dexterity", true),
    disguise: new Skill("Disguise", "charisma"),
    escape_artist: new Skill("Escape Artist", "dexterity"),
    fly: new Skill("Fly", "dexterity"),
    handle_animal: new Skill("Handle Animal", "charisma", true),
    heal: new Skill("Heal", "wisdom"),
    intimidate: new Skill("Intimidate", "charisma"),
    knowledge: new MultiSkill("Knowledge", "intelligence", true),
    linguistics: new Skill("Linguistics", "intelligence", true),
    perception: new Skill("Perception", "wisdom"),
    perform: new MultiSkill("Perform", "charisma"),
    profession: new MultiSkill("Profession", "wisdom", true),
    ride: new Skill("Ride", "dexterity"),
    sense_motive: new Skill("Sense Motive", "wisdom"),
    sleight_of_hand: new Skill("Sleight of Hand", "dexterity", true),
    spellcraft: new Skill("Spellcraft", "intelligence", true),
    stealth: new Skill("Stealth", "dexterity"),
    survival: new Skill("Survival", "wisdom"),
    swim: new Skill("Swim", "strength"),
    use_magic_device: new Skill("Use Magic Device", "charisma", true),
};

state.craft.add_skills("alchemy", "armor", "baskets", "books", "bows", "calligraphy", "carpentry", "cloth", "clothing",
    "glass", "jewelry", "leather", "locks", "paintings", "pottery", "sculptures", "ships", "shoes", "stonemasonry", "traps", "weapons");
state.knowledge.add_skills("arcana", "dungeoneering", "engineering", "geography", "history", "local", "nature", "nobility",
    "planes", "religion");
state.perform.add_skills("act", "comedy", "dance", "keyboard instruments", "oratory", "percussion instruments",
    "string instruments", "wind instruments", "sing");
state.profession.add_skills("architect", "baker", "barrister", "brewer", "butcher", "clerk", "cook", "courtesan",
    "driver", "engineer", "farmer", "fisherman", "gambler", "gardener", "herbalist", "innkeeper", "librarian",
    "merchant", "midwife", "miller", "miner", "porter", "sailor", "scribe", "shepherd", "stable master", "soldier",
    "tanner", "trapper", "woodcutter");

export default {
    state,
};