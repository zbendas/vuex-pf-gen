<template>
    <section class="armor-class-component">
        AC {{ getArmorClass }}
        Touch AC {{ getTouchArmorClass }}
        Flat-Footed AC {{ getFlatFootedArmorClass }}
    </section>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "ArmorClassComponent",
        computed: {
            ...mapState([]),
            ...mapGetters([
                'getArmorClass',
                'getTouchArmorClass',
                'getFlatFootedArmorClass',
            ])
        },
    }
</script>

<style scoped lang="sass">
    @import '../styles/shared'

</style>