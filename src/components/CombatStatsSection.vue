<template>
    <div class="combat-stats-section">
        <ArmorClassComponent />
        <OtherCombatComponent />
        <CombatManeuverBonusComponent />
        <CombatManeuverDefenseComponent />
    </div>
</template>

<script>
    import ArmorClassComponent from "./ArmorClassComponent";
    import OtherCombatComponent from "./OtherCombatComponent";
    import CombatManeuverBonusComponent from "./CombatManeuverBonusComponent";
    import CombatManeuverDefenseComponent from "./CombatManeuverDefenseComponent";

    export default {
        name: "CombatStatsSection",
        components: {ArmorClassComponent, OtherCombatComponent, CombatManeuverBonusComponent, CombatManeuverDefenseComponent}
    }
</script>

<style scoped lang="sass">

</style>