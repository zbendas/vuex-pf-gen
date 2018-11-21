<template>
    <section class="combat-maneuver-bonus-component">

    </section>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "CombatManeuverBonusComponent",
        computed: {
            ...mapState({}),
            ...mapGetters([]),
        },
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

</style>