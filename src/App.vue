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
        color: #eee
        height: 100vh
        width: 100vw

    .strength
        background: $strength

    .dexterity
        background: $dexterity

    .constitution
        background: $constitution

    .intelligence
        background: $intelligence

    .wisdom
        background: $wisdom

    .charisma
        background: $charisma

</style>
