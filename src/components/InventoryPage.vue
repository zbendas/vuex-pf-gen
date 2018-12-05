<template>
    <section id="page-content">
        <InventorySelect :items="unequipped" select_id="unequipped-items"/>
    </section>
</template>

<script>
    import {mapState} from 'vuex';

    import InventorySelect from "./InventorySelect";
    export default {
        name: "InventoryPage",
        components: {InventorySelect},
        computed: {
            ...mapState({
                equipped: state => state.character.inventory.equipped,
                unequipped: state => state.character.inventory.unequipped,
            })
        },
    }
</script>

<style scoped lang="sass">
    @import '../styles/colors'

    #page-content
        background: $anti-flash_white
        min-height: 100%
        width: 100%
        display: grid

</style>