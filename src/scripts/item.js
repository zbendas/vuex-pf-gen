export class Item {
    constructor(name, weight, description){
        this.item_name = name;
        this.weight = weight;
        this.description = description || "";
    }
}

export class SlottedItem extends Item{
    constructor(name, weight, slot){
        super(name, weight);
        this.slot = slot;
    }
}

export class ArmorItem extends SlottedItem{
    constructor(name, armor_bonus, proficiency, ac_penalty, max_dex_bonus, spell_failure, speed_30, speed_20, weight, is_metal){
        super(name, "armor");
        this.armor_bonus = armor_bonus;
        this.proficiency = proficiency;
        this.ac_penalty = ac_penalty;
        this.max_dex_bonus = max_dex_bonus;
        this.spell_failure = spell_failure;
        this.speed_30 = speed_30;
        this.speed_20 = speed_20;
        this.weight = weight;
        // Useful property for druids
        this.is_metal = is_metal;
    }
}

export class MagicItem extends SlottedItem{
    constructor(name, slot, aura_strength, aura_type, caster_level, price, weight){
        super(name, slot);
        this.aura_strengh = aura_strength;
        this.aura_type = aura_type;
        this.caster_level = caster_level;
        this.price = price;
        this.weight = weight;
    }
}