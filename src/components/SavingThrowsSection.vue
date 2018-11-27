<template>
    <section class="saving-throws">
        <section class="saving-throw-labels">
            <div class="column-label">Total</div>
            <div class="column-label">Base Save</div>
            <div class="column-label">Ability Modifier</div>
            <div class="column-label">Magic Modifier</div>
            <div class="column-label">Misc Modifier</div>
            <div class="column-label">Temporary Modifier</div>
        </section>
        <SavingThrowComponent save="fortitude"/>
        <SavingThrowComponent save="reflex"/>
        <SavingThrowComponent save="will"/>
    </section>
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
        justify-content: center
        align-items: center
        & > .column-label:first-child
            margin-left: 145px

    .column-label
        @extend %column-label
        margin: 2.5px 5px

</style>