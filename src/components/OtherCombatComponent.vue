<template>
    <section class="other-combat-component">
        <section class="column-labels">
            <div class="column-label">Total</div>
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
                spell_resistance: state => state.character.combat_stats.spell_resistance,
            }),
            ...mapGetters([
            ]),
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'
    @import '../styles/colors'

    .spell-resistance
        display: flex
        flex-flow: row nowrap
        align-items: center

    .spell-resistance-label
        @extend %stat-label
        flex-basis: 175px

    .addend
        @extend %underline_field

    .column-labels
        display: flex
        flex-flow: row nowrap
        align-items: center
        & > .column-label:first-child
            margin-left: 185px

    .column-label
        @extend %column-label

</style>