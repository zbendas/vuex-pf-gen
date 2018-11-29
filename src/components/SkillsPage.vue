<template>
    <section id="page-content">
        <section class="column-labels">
            <div class="column-label"></div>
            <div class="column-label">Skill Name</div>
            <div class="column-label">Total Bonus</div>
            <div class="column-label">Ability Modifier</div>
            <div class="column-label">Skill Ranks</div>
            <div class="column-label">Misc Modifier</div>
        </section>
        <SkillComponent v-for="(skill, index) in skills" :skill="skill" :key="index" />
    </section>
</template>

<script>
    import {mapState} from 'vuex';

    import SkillComponent from "./SkillComponent";

    export default {
        name: "SkillsPage",
        components: {SkillComponent},
        computed: {
            ...mapState({
                skills: state => state.reference.skills,
            })
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'
    @import '../styles/shared'

    #page-content
        background: $light
        height: 100%
        width: 100%
        padding-top: 20px
        display: flex
        flex-flow: column nowrap
        justify-content: flex-start
        align-items: flex-start

    .column-labels
        display: flex
        flex-flow: row nowrap
        align-items: center
        width: 50%
        .column-label
            @extend %column-label
            &:first-child
                margin: 0 10px 0 20px
                flex-basis: 2%
            &:nth-child(2)
                flex-basis: 20%
                margin-right: 0

</style>