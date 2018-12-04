<template>
    <section class="skill">
        <section class="singleton-skill">
            <input :title="skill.skill_name" type="checkbox" :checked="is_class_skill" disabled/>
            <input :title="skill.skill_name" type="checkbox" :checked="skill.trained_only" disabled/>
            <div class="skill-name" :class="skill.modifier">{{ skill.skill_name }}</div>
            <div v-show="!is_group_skill" class="skill-total light-background" :class="skill.modifier">{{ skill_total }}
            </div>
            <div v-show="!is_group_skill" class="skill-addend light-background" :class="skill.modifier">{{
                getTemporaryAbilityModifier(skill.modifier) }}
            </div>
            <div v-show="!is_group_skill" class="skill-addend ranks">{{ ranks }}</div>
            <input v-show="!is_group_skill" :title="`${skill.skill_name} miscellaneous modifier`" type="number"
                   class="skill-addend" :value="misc_mod"
                   @input="updateSkillMiscMod({value: $event.target.value, skill_name: skill.skill_name})"/>
            <button v-show="is_group_skill" class="skill-expander" :disabled="!has_specialization" @click="is_expanded = !is_expanded">{{ is_expanded ?
                "-" : "+"}}
            </button>
        </section>
        <section v-show="is_group_skill && is_expanded" class="group-skill">
            <section v-for="(group_skill, key) in matched_skill" :key="key" class="specialization">
                <div class="skill-name" :class="skill.modifier">{{ group_skill.specialization }}</div>
                <div class="skill-total light-background" :class="skill.modifier">{{ specialization_skill_total(group_skill.ranks, group_skill.misc_mod) }}</div>
                <div class="skill-addend light-background" :class="skill.modifier">{{ getTemporaryAbilityModifier(skill.modifier) }}</div>
                <div class="skill-addend ranks">{{ group_skill.ranks }}</div>
                <input :title="`${skill.skill_name} (${group_skill.specialization}) misc modifier`"
                       type="number" class="skill-addend" :value="group_skill.misc_mod"
                       @input="updateGroupSkillMiscMod({value: $event.target.value, skill_name: skill.skill_name, specialization: group_skill.specialization})"
                />
            </section>
        </section>
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
        data: function () {
            return {
                is_expanded: false
            }
        },
        computed: {
            is_group_skill: function () {
                return this.skill.hasOwnProperty('group_skills');
            },
            has_specialization: function () {
                return this.is_group_skill && this.matched_skill.length > 0
            },
            is_class_skill: function () {
                return this.getClassSkills.includes(this.skill.skill_name.toLowerCase());
            },
            ranks: function () {
                return this.is_group_skill ? null : parseInt(this.matched_skill != null ? this.matched_skill['ranks'] : 0);
            },
            misc_mod: function () {
                return this.is_group_skill ? null : parseInt(this.matched_skill != null ? this.matched_skill['misc_mod'] : 0);
            },
            skill_total: function () {
                return this.is_group_skill ? null : this.ranks + (this.is_class_skill && this.ranks > 0 ? 4 : 0) + this.getTemporaryAbilityModifier(this.skill.modifier) + this.misc_mod;
            },
            ...mapState({
                matched_skill: function (state) {
                    let matched_skill = state.character.skills.filter(element => {
                        return element.skill_name === this.skill.skill_name
                    });
                    return this.is_group_skill ? matched_skill : matched_skill[0];
                },
            }),
            ...mapGetters([
                'getTemporaryAbilityModifier',
                'getClassSkills'
            ]),
        },
        methods: {
            specialization_skill_total: function (ranks, misc_mod) {
                return ranks + (this.is_class_skill && ranks > 0 ? 4 : 0) + this.getTemporaryAbilityModifier(this.skill.modifier) + misc_mod;
            },
            ...mapMutations([
                'updateSkillMiscMod',
                'updateGroupSkillMiscMod',
            ]),
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

    .skill
        width: 50%

    .singleton-skill
        margin: 2px 10px
        display: flex
        flex-flow: row nowrap
        align-items: center
        width: 100%
        .skill-name
            @extend %stat-label
            flex-basis: 20%
            height: 17px
            font-size: 0.75em
            padding: 2px 5px

    .group-skill
        display: flex
        flex-flow: column nowrap

    .specialization
        display: flex
        background: linear-gradient(to right, $anti-flash_white 0%, $anti-flash_white 9%, darken($anti-flash_white, 10%) 9%, darken($anti-flash_white, 10%) 60%, $anti-flash_white 60%, $anti-flash_white 100%)
        .skill-name
            @extend %stat-label
            margin-left: 14.25%
            flex-basis: 15%
            height: 17px
            font-size: 0.75em
            padding: 2px 5px

    input[type=checkbox]
        margin: auto 10px
        flex-basis: 2%

    .skill-total, .skill-addend
        @extend %underline_field
        line-height: 15px
        height: 17px

    input.skill-addend
        @extend %underline_input
        line-height: 15px
        height: 17px

    input.trained-only
        @extend %underline_field
        border: none
        width: auto
        text-transform: uppercase

    .skill-expander
        background: $anti-flash_white
        border: 2px solid $dark
        margin: 0 10px
        width: 50px
        height: 21px
        font-weight: bold
        font-size: 1em
        text-align: center
        &:hover
            background: darken($anti-flash_white, 10%)
            cursor: pointer
        &:focus
            outline: none
        &[disabled]
            border-color: gray
            background: lightgray
            cursor: not-allowed

</style>