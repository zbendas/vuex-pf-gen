<template>
    <section class="armor-class-component">
        <section class="column-labels">
            <div class="column-label">Total</div>
            <div class="column-label">Base 10</div>
            <div class="column-label">Armor Bonus</div>
            <div class="column-label">Shield Bonus</div>
            <div class="column-label">Dexterity Modifier</div>
            <div class="column-label">Size Modifier</div>
            <div class="column-label">Natural Armor</div>
            <div class="column-label">Deflection Modifier</div>
            <div class="column-label">Misc Modifier</div>
        </section>
        <section class="armor-class">
            <div class="ac-label">Armor Class</div>
            <div class="ac-total">{{ getArmorClass }}</div>
            <div class="addend">10</div>
            <div class="addend light-background no-ability">{{ armor_bonus }}</div>
            <div class="addend light-background no-ability">{{ shield_bonus }}</div>
            <div class="addend light-background dexterity">{{ getTemporaryAbilityModifier("dexterity") }}</div>
            <div class="addend">{{ getSizeModifier }}</div>
            <div class="addend">{{ natural_armor }}</div>
            <div class="addend">{{ deflection_modifier }}</div>
            <div class="addend">{{ misc_armor_modifier }}</div>
        </section>
        <section class="touch-ac">
            <div class="touch-ac-label dexterity">Touch</div>
            <div class="touch-ac-total light-background dexterity">{{ getTouchArmorClass }}</div>
            <div class="addend">10</div>
            <div class="addend empty"></div>
            <div class="addend empty"></div>
            <div class="addend light-background dexterity">{{ getTemporaryAbilityModifier("dexterity") }}</div>
            <div class="addend">{{ getSizeModifier }}</div>
            <div class="addend empty"></div>
            <div class="addend">{{ deflection_modifier }}</div>
            <div class="addend">{{ misc_armor_modifier }}</div>
        </section>
        <section class="flat-footed-ac">
            <div class="flat-footed-ac-label no-ability">Flat-Footed</div>
            <div class="flat-footed-ac-total light-background no-ability">{{ getFlatFootedArmorClass }}</div>
            <div class="addend">10</div>
            <div class="addend light-background no-ability">{{ armor_bonus }}</div>
            <div class="addend light-background no-ability">{{ shield_bonus }}</div>
            <div class="addend empty"></div>
            <div class="addend">{{ getSizeModifier }}</div>
            <div class="addend">{{ natural_armor }}</div>
            <div class="addend">{{ deflection_modifier }}</div>
            <div class="addend">{{ misc_armor_modifier }}</div>
        </section>
    </section>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "ArmorClassComponent",
        computed: {
            ...mapState({
                armor_bonus: state => state.character.combat_stats.armor_class.armor_bonus,
                shield_bonus: state => state.character.combat_stats.armor_class.shield_bonus,
                natural_armor: state => state.character.combat_stats.armor_class.natural_armor,
                deflection_modifier: state => state.character.combat_stats.armor_class.deflection_modifier,
                misc_armor_modifier: state => state.character.combat_stats.armor_class.misc_bonus
            }),
            ...mapGetters([
                'getArmorClass',
                'getTouchArmorClass',
                'getFlatFootedArmorClass',
                'getTemporaryAbilityModifier',
                'getSizeModifier',
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

    .flat-footed-ac
        margin-bottom: 20px

    .ac-label, .touch-ac-label, .flat-footed-ac-label
        @extend %stat-label
        padding: 2px 5px
        flex-basis: 150px

    .ac-label
        +two-color($no-ability, $dexterity)

    .ac-total, .touch-ac-total, .flat-footed-ac-total
        @extend %underline_field


    .ac-total
        +light-two-color($no-ability, $dexterity)

    .column-labels
        display: flex
        flex-flow: row nowrap
        align-items: center
        & > .column-label:first-child
            margin-left: 170px

    .column-label
        @extend %column-label

    .addend
        @extend %underline_field

    .addend.empty
        border: none

</style>