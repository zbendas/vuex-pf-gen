<template>
    <div class="ability-score-section">
        <div class="column-label">Ability Score</div>
        <div class="column-label">Ability Modifier</div>
        <div class="column-label">Temporary Adjustment</div>
        <div class="column-label">Temporary Modifier</div>
        <AbilityScoreComponent ability="strength"/>
        <AbilityScoreComponent ability="dexterity"/>
        <AbilityScoreComponent ability="constitution"/>
        <AbilityScoreComponent ability="intelligence"/>
        <AbilityScoreComponent ability="wisdom"/>
        <AbilityScoreComponent ability="charisma"/>
    </div>
</template>

<script>
    import AbilityScoreComponent from "./AbilityScoreComponent";

    export default {
        name: "AbilityScoresSection",
        components: {AbilityScoreComponent}
    }
</script>

<style lang="sass" scoped>
    @import '../styles/shared'

    .ability-score-section > .column-label:first-child
        margin-left: 80px
    .column-label
        @extend %column-label

</style>