<template>
    <section id="page-content">
        <section id="character-info">
            <CharacterInfoSection/>
        </section>
        <section id="ability-scores">
            <AbilityScoresSection/>
        </section>
        <section id="saving-throws">
            <SavingThrowsSection/>
        </section>
        <section id="combat-stats">
            <CombatStatsSection/>
        </section>
    </section>
</template>

<script>
    import AbilityScoresSection from "./AbilityScoresSection";
    import CharacterInfoSection from "./CharacterInfoSection";
    import SavingThrowsSection from "./SavingThrowsSection";
    import CombatStatsSection from "./CombatStatsSection";

    export default {
        name: "Page",
        components: {CombatStatsSection, SavingThrowsSection, CharacterInfoSection, AbilityScoresSection}
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'

    #page-content
        background: $light
        position: relative
        top: 5%
        height: 95%
        width: 100%
        display: grid
        grid-template: "ability-scores none character-info" "saving-throws none combat-stats"/ 47.5% 5% 47.5%

    #ability-scores
        grid-area: ability-scores

    #character-info
        grid-area: character-info

    #saving-throws
        grid-area: saving-throws

    #combat-stats
        grid-area: combat-stats

</style>