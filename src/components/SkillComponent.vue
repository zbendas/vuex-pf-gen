<template>
    <section class="skill">
        <input title="" :title="skill.skill_name" type="checkbox" :checked="is_class_skill" disabled/>
        <div class="skill-name" :class="skill.modifier">{{ skill.skill_name }}</div>
        <div v-show="!is_group_skill" class="skill-total light-background" :class="skill.modifier">{{ skill_total }}
        </div>
        <div v-show="!is_group_skill" class="skill-addend light-background" :class="skill.modifier">{{
            getTemporaryAbilityModifier(skill.modifier) }}
        </div>
        <div v-show="!is_group_skill" class="skill-addend ranks">{{ ranks }}</div>
        <input title="" :title="`${skill.skill_name} miscellaneous modifier`" type="number" v-show="!is_group_skill"
               class="skill-addend" :value="misc_mod"
               @input="updateSkillMiscMod({value: $event.target.value, skill_name: skill.skill_name})"/>
    </section>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        name: "SkillComponent",
        props: {
            skill: {
                validator: function (value) {
                    return value.hasOwnProperty('skill_name') && value.hasOwnProperty('modifier') && value.hasOwnProperty('trained_only');
                }
            }
        },
        computed: {
            is_group_skill: function () {
                return this.skill.hasOwnProperty('group_skills');
            },
            is_class_skill: function () {
                return this.getClassSkills.includes(this.skill.skill_name.toLowerCase());
            },
            ranks: function () {
                return parseInt(this.matched_skill != null ? this.matched_skill['ranks'] : 0);
            },
            misc_mod: function () {
                return parseInt(this.matched_skill != null ? this.matched_skill['misc_mod'] : 0);
            },
            skill_total: function () {
                return this.ranks + this.getTemporaryAbilityModifier(this.skill.modifier) + this.misc_mod;
            },
            ...mapState({
                matched_skill: function (state) {
                    return state.character.skills.filter(element => {
                        return element.skill_name === this.skill.skill_name
                    })[0];
                },
            }),
            ...mapGetters([
                'getTemporaryAbilityModifier',
                'getClassSkills'
            ]),
        },
        methods: {
            ...mapMutations([
                'updateSkillMiscMod',
            ]),
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
        line-height: 15px
        height: 17px

    input.skill-addend
        @extend %underline_input
        line-height: 15px
        height: 17px

</style>