<template>
    <section class="speed">
        <section class="column-labels">
            <div class="column-label">Base</div>
            <div class="column-label">W/ Armor</div>
            <div class="column-label">Fly</div>
            <div class="column-label">Swim</div>
            <div class="column-label">Climb</div>
            <div class="column-label">Burrow</div>
        </section>
        <section class="speed-categories">
            <div class="speed-label no-ability">Speed</div>
            <div class="category">{{ getBaseSpeed }}</div>
            <div class="category">{{ getArmoredSpeed }}</div>
            <div class="category">{{ getFlySpeed }}</div>
            <div class="category">{{ getSwimSpeed }}</div>
            <div class="category">{{ getClimbSpeed }}</div>
            <div class="category">{{ getBurrowSpeed }}</div>
        </section>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "SpeedComponent",
        computed: {
            ...mapGetters([
                'getBaseSpeed',
                'getArmoredSpeed',
                'getSwimSpeed',
                'getClimbSpeed',
                'getFlySpeed',
                'getBurrowSpeed',
            ])
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

    .column-labels
        display: flex
        flex-flow: row nowrap
        align-items: center
        & > .column-label:first-child
            margin-left: 70px

    .column-label
        @extend %column-label

    .speed-categories
        display: flex
        flex-flow: row nowrap
        align-items: center

    .speed-label
        @extend %stat-label
        flex-basis: 60px

    .category
        @extend %underline_field
        .no-margin-right
            margin-right: 0
        .no-margin-left
            margin-left: 0

</style>