<template>
    <section class="other-combat-component">
        <section class="initiative">
            <div class="initiative-label dexterity">INITIATIVE</div>
            <div class="initiative_addend light-background dexterity">{{ getInitiative }}</div>
            <input type="number" class="initiative_addend misc-modifier" :value="initiative_misc_modifier">
        </section>
        <section class="spell-resistance">
            <div class="spell-resistance-label no-ability">SPELL RESISTANCE</div>
            <div class="light-background no-ability addend">{{ spell_resistance }}</div>
        </section>
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
    @import '../styles/colors'

    .initiative, .spell-resistance
        display: flex
        flex-flow: row nowrap
        align-items: center

    .initiative-label
        display: inline-block
        color: $anti-flash_white
        font: 700 1em 'Noto Serif', serif
        height: 21px
        width: 95px
        padding: 2px 5px
        margin: 2.5px 0

    .initiative_addend
        @extend %underline_field

    input.initiative_addend
        @extend %underline_input
        @extend %underline_field

    .spell-resistance-label
        display: inline-block
        color: $anti-flash_white
        font: 700 1em 'Noto Serif', Serif
        height: 21px
        padding: 2px 5px
        margin: 2.5px 0

    .addend
        @extend %underline_field

</style>