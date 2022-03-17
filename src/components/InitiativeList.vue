<template>
  <div class="container">
    <div class="fighters">
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Health</th>
            <th scope="col">Armor</th>
            <th scope="col">Roll</th>
            <th scope="col">Concentration</th>
          </tr>
        </thead>
        <tbody id="list">
          <tr v-for="(item, i) in sortedList" v-bind:key="i">
            <th scope="row" id="index" value="i">{{ ++i }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.health }}</td>
            <td>{{ item.armor }}</td>
            <td>{{ item.roll }}</td>
            <td><input type="checkbox" name="Conentration" id="" /></td>
          </tr>
        </tbody>
      </table>
      <input type="button" value="next" @click="nextCombatant($event)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "InitiativeList",
  data() {
    return {
      list: document.getElementById("list"),
    };
  },
  methods: {
    nextCombatant(event) {
      console.log(event);
      // Need to figure out how to highlight the row of the next combatant in line, maybe make use of state?????
    },
  },
  computed: {
    ...mapGetters(["allCombatants"]),
    sortedList: function () {
      return this.allCombatants.slice().sort(function (a, b) {
        if (a.roll === b.roll) {
          return b.mod - a.mod;
        }
        return b.roll - a.roll;
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  border: solid black;
}
.fighters {
  display: inherit;
  flex-direction: row;
}
h3 {
  margin: 2rem;
}
</style>