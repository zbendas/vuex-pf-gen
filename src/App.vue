<template>
    <div id="app">
        <Page/>
    </div>
</template>

<script>
    import Page from './components/Page';

    export default {
        name: "app",
        components: {Page}
    };
</script>

<style lang="sass">
    @import 'styles/colors'
    @import 'styles/fonts'

    body
        padding: 0
        margin: 0
        background: $dark

    #app
        font-family: "Avenir", Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        height: 100vh
        width: 100vw

    .strength
        background: $strength
        &.light-background
            background: transparentize($strength, 0.8)
            &:hover
                background: transparentize($strength, 0.5)

    .dexterity
        background: $dexterity
        &.light-background
            background: transparentize($dexterity, 0.8)
            &:hover
                background: transparentize($dexterity, 0.5)

    .constitution
        background: $constitution
        &.light-background
            background: transparentize($constitution, 0.8)
            &:hover
                background: transparentize($constitution, 0.5)

    .intelligence
        background: $intelligence
        &.light-background
            background: transparentize($intelligence, 0.8)
            &:hover
                background: transparentize($intelligence, 0.5)

    .wisdom
        background: $wisdom
        &.light-background
            background: transparentize($wisdom, 0.8)
            &:hover
                background: transparentize($wisdom, 0.5)

    .charisma
        background: $charisma
        &.light-background
            background: transparentize($charisma, 0.8)
            &:hover
                background: transparentize($charisma, 0.5)

    .no-ability
        background: $no-ability
        &.light-background
            background: transparentize($no-ability, 0.8)
            &:hover
                background: transparentize($no-ability, 0.5)

</style>
