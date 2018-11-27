<template>
    <section class="initiative">
        <section class="column-labels">
            <div class="column-label">Total</div>
            <div class="column-label">Misc Modifier</div>
        </section>
        <section class="initiative-addends">
            <div class="initiative-label dexterity">INITIATIVE</div>
            <div class="initiative_total light-background dexterity">{{ getInitiative }}</div>
            <input type="number" class="addend misc-modifier" :value="initiative_misc_modifier"
                @input="updateInitiativeMiscModifier($event.target.value)">
        </section>
    </section>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        name: "InitiativeComponent",
        computed: {
            ...mapState({
                initiative_misc_modifier: state => state.character.combat_stats.initiative_misc_modifier,
            }),
            ...mapGetters([
                'getInitiative'
            ]),
        },
        methods: {
            ...mapMutations([
                'updateInitiativeMiscModifier'
            ])
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'
    @import '../styles/colors'

    .initiative
        margin-bottom: 20px

    .initiative-addends
        display: flex
        flex-flow: row nowrap
        align-items: center

    .initiative-label
        @extend %stat-label
        flex-basis: 110px

    .initiative_total
        @extend %underline_field

    input.addend
        @extend %underline_input
        @extend %underline_field

    .column-labels
        display: flex
        flex-flow: row nowrap
        align-items: center
        & > .column-label:first-child
            margin-left: 120px
        .column-label
            @extend %column-label

</style>