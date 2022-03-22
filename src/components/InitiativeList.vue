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
          <tr
            v-for="(tableRow, i) in sortedList"
            v-bind:key="i"
            v-bind:id="`${i + 1}`"
          >
            <th scope="row" id="index" value="i">{{ ++i }}</th>
            <td>{{ tableRow.name }}</td>
            <td>{{ tableRow.health }}</td>
            <td>{{ tableRow.armor }}</td>
            <td>{{ tableRow.roll }}</td>
            <td><input type="checkbox" name="Conentration" id="" /></td>
          </tr>
        </tbody>
      </table>
      <input type="button" value="next" @click="nextCombatant($event)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "InitiativeList",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["iterate"]),
    /*
    FUNCTION: nextCombatant()
      serves to keep track of the turn order, but making use of an iterator in state
      the function checks to see if the iterator matches the ID value assigned to the row, then adds a highlight class to it, then removes the class of the previous row on execution of the function
    */
    nextCombatant() {
      let prevRow;
      if (this.iterator !== 1) {
        prevRow = document.getElementsByTagName("tr")[this.iterator - 1];
      }
      if (this.iterator === 1) {
        prevRow =
          document.getElementsByTagName("tr")[this.allCombatants.length];
        prevRow.classList.remove("highlight");
      }

      let tableRow = document.getElementsByTagName("tr")[this.iterator];
      tableRow.classList.add("highlight");

      this.iterate(this.iterator);
      if (prevRow) {
        prevRow.classList.remove("highlight");
      }
    },
  },
  computed: {
    ...mapGetters(["allCombatants"]),
    ...mapState({
      iterator: (state) => state.data.iterator,
    }),
    /*
    FUNCTION: sortedList()
      This function takes all combatants in the list and sorts based on the roll, if there is a tie then it sorts based off the dex mod stat for that combatant, higher of each comes out on top
    */
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
.highlight {
  background-color: rgb(172, 243, 194);
}
h3 {
  margin: 2rem;
}
</style>