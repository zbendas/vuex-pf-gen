<template>
    <div class="saving-throws-section">
        <div class="column-label">Total</div>
        <div class="column-label">Base Save</div>
        <div class="column-label">Ability Modifier</div>
        <div class="column-label">Magic Modifier</div>
        <div class="column-label">Misc Modifier</div>
        <div class="column-label">Temporary Modifier</div>
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
    .saving-throws-section > .column-label:first-child
        margin-left: 150px
    .column-label
        @extend %column-label

</style>