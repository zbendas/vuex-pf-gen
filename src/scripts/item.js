export class Item {
    constructor(name, weight, description){
        this.item_name = name;
        this.weight = weight;
        this.description = description || "";
    }
}

export class SlottedItem extends Item{
    constructor(name, weight, slot, description){
        super(name, weight, description);
        this.slot = slot;
    }
}

export class ArmorItem extends SlottedItem{
    constructor(name, weight, armor_bonus, proficiency, ac_penalty, max_dex_bonus, spell_failure, speed_30, speed_20, is_metal, description){
        super(name, weight, "armor", description);
        this.armor_bonus = armor_bonus;
        this.proficiency = proficiency;
        this.ac_penalty = ac_penalty;
        this.max_dex_bonus = max_dex_bonus;
        this.spell_failure = spell_failure;
        this.speed_30 = speed_30;
        this.speed_20 = speed_20;
        // Useful property for druids
        this.is_metal = is_metal;
    }
}

export class MagicItem extends SlottedItem{
    constructor(name, weight, slot, aura_strength, aura_type, caster_level, price, description){
        super(name, weight, slot, description);
        this.aura_strengh = aura_strength;
        this.aura_type = aura_type;
        this.caster_level = caster_level;
        this.price = price;
        this.weight = weight;
    }
}