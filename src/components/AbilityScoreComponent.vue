<template>
    <section>
        <div class="ability-name" :class="ability">{{ ability.substring(0, 3).toUpperCase() }}</div>
        <div class="ability-score light-background" :class=ability>{{ getAbilityScore(ability) }}</div>
        <div class="ability-modifier light-background" :class="ability">{{ getAbilityModifier(ability) }}</div>
        <input type="number" class="temporary-ability-adjustment" :value="getTemporaryAbilityAdjustment(ability)"
               @input="updateTemporaryAbilityAdjustment({ability: ability, value: $event.target.value})"/>
        <div class="temporary-ability-modifier light-background" :class="ability">{{ getTemporaryAbilityModifier(ability) }}</div>
    </section>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "AbilityScoreComponent",
        computed: {
            ...mapGetters([
                'getAbilityScore',
                'getAbilityModifier',
                'getTemporaryAbilityAdjustment',
                'getTemporaryAbilityModifier',
            ])
        },
        methods: {
            ...mapMutations([
                'updateTemporaryAbilityAdjustment'
            ]),
        },
        props: {
            ability: String
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'
    @import '../styles/shared'

    section
        display: flex
        flex-flow: row nowrap
        justify-content: center
        align-items: flex-end

        input
            border: none
            color: black
            text-align: center

        .ability-name
            display: inline-block
            color: $anti-flash_white
            font: 700 1em 'Noto Serif', serif
            height: 21px
            width: 50px
            margin: 2.5px 10px
            padding: 2px 0

        .ability-score
            @extend %underline_field

        .temporary-ability-adjustment
            @extend %underline_input
            @extend %underline_field

        .ability-modifier, .temporary-ability-modifier
            @extend %underline_field

</style>