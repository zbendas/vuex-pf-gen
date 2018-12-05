<template>
    <select multiple :id="select_id" :size="8 || items.length">
        <option v-for="(item, key) in items" :key="key" :value="item">{{ item.name }}</option>
    </select>
</template>

<script>
    export default {
        name: "InventorySelect",
        props: {
            select_id: String,
            items: Array,
        }
    }
</script>

<style scoped lang="sass">
    select
        height: 200px
        width: 200px
</style>