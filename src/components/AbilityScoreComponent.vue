<template>
    <section>
        <div class="ability-name" :class="ability">{{ ability.substring(0, 3).toUpperCase() }}</div>
        <div class="ability-score light-background" :class=ability>{{ getAbilityScore(ability) }}</div>
        <div class="ability-modifier light-background" :class="ability">{{ getAbilityModifier(ability) }}</div>
        <input type="number" class="temporary-adjustment" :value="getTemporaryAdjustment(ability)"
               @input="updateTemporaryAdjustment(ability, $event)"/>
        <div class="temporary-modifier light-background" :class="ability">{{ getTemporaryModifier(ability) }}</div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "AbilityScoreComponent",
        computed: {
            ...mapGetters([
                'getAbilityScore',
                'getAbilityModifier',
                'getTemporaryAdjustment',
                'getTemporaryModifier',
            ])
        },
        methods: {
            updateTemporaryAdjustment(ability, e) {
                this.$store.commit('updateTemporaryAdjustment', {value: e.target.value, ability: ability})
            }
        },
        props: {
            ability: String
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'

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

        .ability-score, .temporary-adjustment
            display: inline-block
            font: normal 1em serif
            color: black
            line-height: 21px
            border-bottom: black 2px solid
            height: 21px
            width: 50px
            margin: 2.5px 10px

        .ability-modifier, .temporary-modifier
            display: inline-block
            font: normal 1em serif
            color: black
            line-height: 21px
            border-bottom: black 2px solid
            height: 23px
            width: 50px
            margin: 2.5px 10px
</style>