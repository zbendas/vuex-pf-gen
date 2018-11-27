<template>
    <div class="combat-stats-section">
        <SpeedComponent />
        <InitiativeComponent />
        <CombatManeuverBonusComponent />
        <ArmorClassComponent />
        <OtherCombatComponent />
    </div>
</template>

<script>
    import ArmorClassComponent from "./ArmorClassComponent";
    import OtherCombatComponent from "./OtherCombatComponent";
    import CombatManeuverBonusComponent from "./CombatManeuverBonusComponent";
    import InitiativeComponent from "./InitiativeComponent";
    import SpeedComponent from "./SpeedComponent";

    export default {
        name: "CombatStatsSection",
        components: {
            SpeedComponent,
            InitiativeComponent, ArmorClassComponent, OtherCombatComponent, CombatManeuverBonusComponent,}
    }
</script>

<style scoped lang="sass">

</style>