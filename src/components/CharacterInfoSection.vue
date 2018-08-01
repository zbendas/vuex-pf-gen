<template>
    <div class="character-info-section">
        <label> Character Name <input name="character_name" :value="character_name" disabled>
        </label>
        <label> Alignment <input name="alignment" :value="alignment" disabled>
        </label>
        <label> Classes <input name="character_level" :value="getClassesLevels" disabled>
        </label>
        <label> Race <input name="race" :value="race" disabled>
        </label>
        <label> Size <input name="size" :value="size" disabled>
        </label>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "CharacterInfoSection",
        computed: {
            ...mapGetters([
                'getClassesLevels'
            ]),
            ...mapState({
                character_name: state => state.character.character_name,
                alignment: state => state.character.alignment,
                race: state => state.character.race,
                size: state => state.character.size,
            })
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'

    .character-info-section
        position: relative
        top: 1.5em

    input
        display: inline-block
        position: relative
        top: -3em
        width: 10em
        border: none
        border-bottom: black 2px solid
        &[disabled]
            background: $anti-flash_white

    label
        display: inline-block
        font: normal 0.75em 'Noto Sans', sans-serif
        width: 10em
        padding: 1.5em
        text-align: left


</style>