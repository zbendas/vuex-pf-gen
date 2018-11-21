<template>
    <div class="saving-throws-section">
        <section class="saving-throw-labels">
            <div class="column-label">Total</div>
            <div class="column-label">Base Save</div>
            <div class="column-label">Ability Modifier</div>
            <div class="column-label">Magic Modifier</div>
            <div class="column-label">Misc Modifier</div>
            <div class="column-label">Temporary Modifier</div>
        </section>
        <SavingThrowComponent save="fortitude" save_type="poor_save"/>
        <SavingThrowComponent save="reflex" save_type="good_save"/>
        <SavingThrowComponent save="will" save_type="good_save"/>
    </div>
</template>

<script>
    import SavingThrowComponent from "./SavingThrowComponent";
    export default {
        name: "SavingThrowsSection",
        components: {SavingThrowComponent}
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'
    .saving-throw-labels
        display: flex
        flex-flow: row nowrap
        justify-content: flex-end

    .column-label
        @extend %column-label

</style>