<template>
    <section class="combat-maneuver-component">
        <section class="column-labels">
            <div class="column-label">Total</div>
            <div class="column-label">Base 10</div>
            <div class="column-label">Base Attack Bonus</div>
            <div class="column-label">Strength Modifier</div>
            <div class="column-label">Dexterity Modifier</div>
            <div class="column-label">Size Modifier</div>
            <div class="column-label">Misc Modifiers</div>
        </section>
        <section class="cmb-addends">
            <div class="cmb-label strength">CMB</div>
            <div class="cmb-total light-background strength">{{ getCombatManeuverBonus }}</div>
            <div class="addend empty"></div>
            <div class="addend">{{ getBAB }}</div>
            <div class="addend light-background strength">{{ getTemporaryAbilityModifier("strength") }}</div>
            <div class="addend empty"></div>
            <div class="addend">{{ -1 * getSizeModifier }}</div>
            <input type="number" class="addend" :value="cmb_misc_mod"
                   @input="updateCMBMiscMod($event.target.value)"/>
        </section>
        <section class="cmd-addends">
            <div class="cmd-label">CMD</div>
            <div class="cmd-total">{{ getCombatManeuverDefense }}</div>
            <div class="addend">10</div>
            <div class="addend">{{ getBAB }}</div>
            <div class="addend light-background strength">{{ getTemporaryAbilityModifier("strength")}}</div>
            <div class="addend light-background dexterity">{{ getTemporaryAbilityModifier("dexterity")}}</div>
            <div class="addend">{{ -1 * getSizeModifier }}</div>
            <input type="number" class="addend" :value="cmd_misc_mod"
                   @input="updateCMDMiscMod($event.target.value)"/>
        </section>
        <section class="bab">
            <div class="bab-label no-ability">Base Attack</div>
            <div class="addend long light-background no-ability">{{ getConsolidatedBABArray.join(' / ') }}</div>
        </section>
    </section>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        name: "CombatManeuverBonusComponent",
        computed: {
            ...mapState({
                cmb_misc_mod: state => state.character.combat_stats.cmb_misc_mod,
                cmd_misc_mod: state => state.character.combat_stats.cmd_misc_mod,

            }),
            ...mapGetters([
                'getCombatManeuverBonus',
                'getBAB',
                'getTemporaryAbilityModifier',
                'getSizeModifier',
                'getCombatManeuverDefense',
                'getConsolidatedBABArray',
            ]),
        },
        methods: {
            ...mapMutations([
                'updateCMBMiscMod',
                'updateCMDMiscMod',
            ])
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

    .combat-maneuver-component:last-child
        margin-bottom: 20px

    .column-labels, .cmb-addends, .cmd-addends
        display: flex
        flex-flow: row nowrap
        align-items: center

    .cmd-addends
        margin-bottom: 20px

    .column-labels > .column-label:first-child
        margin-left: 55px

    .cmb-label, .cmd-label
        @extend %stat-label
        flex-basis: 45px

    .cmd-label
        +two-color($strength, $dexterity)

    .column-label
        @extend %column-label

    .cmb-total, .cmd-total, .addend
        @extend %underline_field

    .cmd-total
        +light-two-color($strength, $dexterity)

    .bab
        display: flex
        flex-flow: row nowrap
        align-items: center

    .bab-label
        @extend %stat-label
        flex-basis: 130px

    .addend
        &.empty
            border: none
        &.long
            min-width: 100px

    input.addend
        @extend %underline_input


</style>