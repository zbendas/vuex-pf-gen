<template>
    <section class="armor-class-component">
        <section class="armor-class">
            <div class="ac-label dexterity">ARMOR CLASS</div>
            <div class="ac-total light-background dexterity">{{ getArmorClass }}</div>
        </section>
        <section class="touch-ac">
            <div class="touch-ac-label dexterity">TOUCH</div>
            <div class="touch-ac-total light-background dexterity">{{ getTouchArmorClass }}</div>
        </section>
        <section class="flat-footed-ac">
            <div class="flat-footed-ac-label no-ability">FLAT-FOOTED</div>
            <div class="flat-footed-ac-total light-background no-ability">{{ getFlatFootedArmorClass }}</div>
        </section>
    </section>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "ArmorClassComponent",
        computed: {
            ...mapState([]),
            ...mapGetters([
                'getArmorClass',
                'getTouchArmorClass',
                'getFlatFootedArmorClass',
            ])
        },
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

    .armor-class, .touch-ac, .flat-footed-ac
        display: flex
        flex-flow: row nowrap
        align-items: center

    .ac-label, .touch-ac-label, .flat-footed-ac-label
        @extend %stat-label
        padding: 2px 5px

    .ac-total, .touch-ac-total, .flat-footed-ac-total
        @extend %underline_field

</style>