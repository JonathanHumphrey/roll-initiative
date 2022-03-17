<template>
  <div class="container">
    <form @submit="onSubmit">
      <div class="input-fields">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Health:
          <input type="number" />
        </label>
        <label>
          Armor Class:
          <input type="number" />
        </label>
        <label>
          Initiative Roll:
          <input type="number" />
        </label>
        <label>
          Dex Mod:
          <input type="number" />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddCombatants",
  data() {
    return {
      id: 0,
      name: "",
      health: 0,
      armor: 0,
      mod: 0,
    };
  },
  methods: {
    ...mapActions(["appendCombatant"]),
    onSubmit(e) {
      e.preventDefault();
      console.log(e.target[0].value);

      let newCombatant = {
        id: 1,
        name: e.target[0].value,
        health: e.target[1].value,
        armor: e.target[2].value,
        roll: e.target[3].value,
        mod: e.target[4].value,
      };
      this.appendCombatant(newCombatant);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  border: solid black;
  width: 20rem;
}
.input-fields {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
}
label {
  text-align: left;
}
button {
  width: 5rem;
  height: 3rem;
}
</style>