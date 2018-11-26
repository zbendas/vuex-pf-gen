<template>
    <section class="saving-throw">
        <div class="saving-throw-name" :class="ability">{{save.toUpperCase()}}</div>
        <div class="saving-throw-total light-background" :class="ability">{{ save_total }}</div>
        <div class="saving-throw-addend base-save">{{ save_base }}</div>
        <div class="saving-throw-addend ability-modifier light-background" :class="ability">{{
            getTemporaryAbilityModifier(ability) }}
        </div>
        <div class="saving-throw-addend magic-modifier">{{ saving_throws[save].magic_modifier }}</div>
        <div class="saving-throw-addend misc-modifier">{{ saving_throws[save].misc_modifier }}</div>
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
                switch (this.save) {
                    case "fortitude":
                        return "constitution";
                    case "reflex":
                        return "dexterity";
                    case "will":
                        return "wisdom";
                }
            },
            save_base: function () {
                switch (this.save) {
                    case "fortitude":
                        return this.getFortitudeBaseSave;
                    case "reflex":
                        return this.getReflexBaseSave;
                    case "will":
                        return this.getWillBaseSave;
                }
            },
            save_total: function () {
                switch (this.save) {
                    case "fortitude":
                        return this.getFortitudeSave;
                    case "reflex":
                        return this.getReflexSave;
                    case "will":
                        return this.getWillSave;
                }
            },
            ...mapState({
                saving_throws: state => state.character.saves,
            }),
            ...mapGetters([
                'getBaseSave',
                'getTemporaryAbilityModifier',
                'getTemporarySaveModifier',
                'getFortitudeBaseSave',
                'getReflexBaseSave',
                'getWillBaseSave',
                'getFortitudeSave',
                'getReflexSave',
                'getWillSave',
            ])
        },
        methods: {
            updateTemporarySaveModifier(save, e) {
                this.$store.commit('updateTemporarySaveModifier', {value: e.target.value, save: save})
            }
        },
        props: {
            save: String,
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
        align-items: center

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
            margin: 2.5px 5px


        .saving-throw-addend
            @extend %underline_field
            margin: 2.5px 5px

        input.saving-throw-addend
            @extend %underline_input
            @extend %underline_field

</style>