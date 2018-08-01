<template>
    <div class="ability-score-container">
        <div class="column-label"></div>
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
    .column-label
        display: inline-block
        width: 50px
        margin: 2.5px 10px
        padding: 2px 0
        text-align: center
        color: black
        font: normal 0.75em serif
</style>