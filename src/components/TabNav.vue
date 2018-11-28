<template>
    <div id="tab-nav">
        <Tab v-for="tab in tabs" :class="{active: tab.active}" :tab_name="tab.name"/>
    </div>
</template>

<script>
    import Tab from "./Tab";
    export default {
        name: "TabNav",
        components: {Tab},
        props: {
            tabs: {
                validator: function (array) {
                    for (let item of array) {
                        if (!item.hasOwnProperty("name") || !item.hasOwnProperty("active") || !item.hasOwnProperty('view')) return false;
                    }
                    return true;
                }
            }
        },
    }
</script>

<style scoped lang="sass">
    #tab-nav
        height: 5vh
        width: 100vw
        display: flex
        flex-flow: row nowrap
        justify-content: flex-start
        align-items: flex-end

</style>