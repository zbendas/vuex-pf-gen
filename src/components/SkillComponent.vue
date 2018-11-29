<template>
    <section class="skill">
        <input type="checkbox" :title="skill.name" title="" disabled/>
        <div class="skill-name" :class="skill.modifier">{{ skill.name }}</div>
        <div v-show="!is_group_skill" class="skill-total light-background" :class="skill.modifier">TOTAL</div>
        <div v-show="!is_group_skill" class="skill-addend light-background" :class="skill.modifier">MOD</div>
        <div v-show="!is_group_skill" class="skill-addend ranks">RANKS</div>
        <div v-show="!is_group_skill" class="skill-addend">MISC</div>
    </section>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "SkillComponent",
        props: {
            skill: Object
        },
        computed: {
            is_group_skill: function() {
                return this.skill.hasOwnProperty('group_skills');
            },
            ...mapState({
            }),
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

    .skill
        margin: 2px 10px
        display: flex
        flex-flow: row nowrap
        align-items: center
        width: 50%

    input[type=checkbox]
        margin: auto 10px
        flex-basis: 2%

    .skill-name
        @extend %stat-label
        flex-basis: 20%
        height: 17px
        font-size: 0.75em
        padding: 2px 5px

    .skill-total, .skill-addend
        @extend %underline_field
        height: 17px

</style>