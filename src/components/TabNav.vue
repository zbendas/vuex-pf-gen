<template>
    <div id="tab-nav">
        <Tab v-for="(tab, index) in tabs" :key="index" :class="{active: tab.active}" :tab_name="tab.name" :view="tab.view" @change-tab="changeTab"/>
    </div>
</template>

<script>
    import Tab from "./Tab";

    export default {
        name: "TabNav",
        components: {Tab},
        props: {
            initial_tabs: {
                validator: function (array) {
                    for (let item of array) {
                        if (!item.hasOwnProperty("name") || !item.hasOwnProperty("active") || !item.hasOwnProperty('view')) return false;
                    }
                    return true;
                }
            }
        },
        data: function (){
            return {
                tabs: this.initial_tabs
            }
        },
        methods: {
            changeTab: function (tab_name) {
                for (let tab of this.tabs){
                    tab.active = tab.name === tab_name;
                }
            },
        }
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