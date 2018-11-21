<template>
    <section class="other-combat-component">
        Initiative: {{ getInitiative }}
        Spell Resistance: {{ spell_resistance }}
    </section>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "OtherCombatComponent",
        computed: {
            ...mapState({
                initiative_misc_modifier: state => state.character.combat_stats.initiative_misc_modifier,
                spell_resistance: state => state.character.combat_stats.spell_resistance,
            }),
            ...mapGetters([
                'getInitiative'
            ]),
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

</style>