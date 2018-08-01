const state = {
    Halfling: {
        ability_bonus: {
            strength: -2,
            dexterity: 2,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 2
        },
        size: "Small",
        creature_type: "humanoid (halfling)",
        speed: 20,
        languages: ["Common", "Halfling"],
        optional_languages: ["Dwarven", "Elven", "Gnome", "Goblin"],
        defense_traits: [
            {
                name: "Fearless",
                description: "Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck."
            },
            {
                name: "Halfling Luck",
                description: "Halflings receive a +1 racial bonus on all saving throws."
            }
        ],
        feat_skill_traits: [
            {
                name: "Sure-Footed",
                description: "Halflings receive a +2 racial bonus on Acrobatics and Climb checks."
            }
        ],
        offense_traits: [
            {
                name: "Weapon Familiarity",
                description: "Halflings are proficient with slings and treat any weapon with the word \"halfling\" in its name as a martial weapon."
            }
        ],
        senses_traits: [
            {
                name: "Keen Senses",
                description: "Halflings receive a +2 racial bonus on Perception checks."
            }
        ]
    }
};

export default {
    state,
}