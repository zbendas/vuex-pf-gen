<template>
    <section id="page-content">
        <AbilityScoresSection/>
    </section>
</template>

<script>
    import AbilityScoresSection from "./AbilityScoresSection";

    export default {
        name: "Page",
        components: {AbilityScoresSection}
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
</style>