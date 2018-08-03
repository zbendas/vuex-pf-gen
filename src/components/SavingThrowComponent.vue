<template>
    <section>
        <div class="saving-throw-name" :class="ability">{{save.toUpperCase()}}</div>
        <div class="saving-throw-total light-background" :class="ability">{{ save_total }}</div>
        <div class="saving-throw-addend base-save">{{ getBaseSave(save_type, 1)}}</div>
        <div class="saving-throw-addend ability-modifier light-background" :class="ability">{{
            getAbilityModifier(ability) }}
        </div>
        <div class="saving-throw-addend magic-modifier">{{ magic_modifier }}</div>
        <div class="saving-throw-addend misc-modifier">{{ misc_modifier }}</div>
        <input type="number" class="saving-throw-addend temporary-modifier"
               @input="updateTemporarySaveModifier(save, $event)" :value="getTemporarySaveModifier(save)"/>
    </section>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "SavingThrowComponent",
        computed: {
            ability: function () {
                if (this.save === "fortitude") {
                    return "constitution";
                }
                if (this.save === "reflex") {
                    return "dexterity";
                }
                if (this.save === "will") {
                    return "wisdom";
                }
            },
            magic_modifier: function () {
                return 0;
            },
            misc_modifier: function () {
                return 0;
            },
            save_total: function () {
                return (this.getBaseSave(this.save_type, 1) + this.getAbilityModifier(this.ability) + this.magic_modifier + this.misc_modifier + this.getTemporarySaveModifier(this.save))
            },
            ...mapState([]),
            ...mapGetters([
                'getBaseSave',
                'getAbilityModifier',
                'getTemporarySaveModifier',
            ])
        },
        methods: {
            updateTemporarySaveModifier(save, e) {
                this.$store.commit('updateTemporarySaveModifier', {value: e.target.value, save: save})
            }
        },
        props: {
            save: String,
            save_type: String
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'
    @import '../styles/shared'

    section
        display: flex
        flex-flow: row nowrap
        justify-content: center
        align-items: flex-end

        .saving-throw-name
            display: inline-block
            color: $anti-flash_white
            font: 700 1em 'Noto Serif', serif
            height: 21px
            width: 120px
            padding: 2px 0
            margin: 2.5px 10px

        .saving-throw-total
            @extend %underline_field

        .saving-throw-addend
            @extend %underline_field

        input
            @extend %underline_input
            .saving-throw-addend
                @extend %underline_field

</style>