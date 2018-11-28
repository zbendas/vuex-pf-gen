<template>
    <div class="tab" :class="{active: is_active}" @click="goToTab()">{{ tab_name }}</div>
</template>

<script>
    export default {
        name: "Tab",
        props: {
            tab_name: String,
            is_active: Boolean,
            view: String
        },
        methods: {
            goToTab: function() {
                console.log(`Clicked ${this.tab_name}`);
                // TODO This doesn't quite work.
                this.$router.push({ name: this.$props.view });
            }
        }
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'

    .tab
        background: lighten($dark, 30%)
        border-top-left-radius: 10px
        border-top-right-radius: 10px
        margin: 0 2px
        padding: 2px 10px
        height: 25px
        line-height: 25px
        min-width: 75px
        color: $anti-flash_white
        text-transform: uppercase
        font: 500 1em 'Noto Serif', serif
        &.active
            background: $light
            color: $dark
        &:hover
            cursor: pointer


</style>