<template>
  <AddCombatants />
  <InitiativeList />
</template>

<script>
import AddCombatants from "./components/AddCombatants.vue";
import InitiativeList from "./components/InitiativeList.vue";

export default {
  name: "App",
  components: {
    AddCombatants,
    InitiativeList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
