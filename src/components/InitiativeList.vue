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
            <th scope="col">Current Status Effects</th>
            <th scope="col">Add Status Effects</th>
          </tr>
        </thead>
        <tbody id="list">
          <tr
            v-for="(tableRow, i) in sortedList"
            v-bind:key="i"
            v-bind:id="`${i + 1}`"
          >
            <th scope="row" id="index" value="i">{{ ++i }}</th>
            <td id="combatantName">{{ tableRow.name }}</td>
            <td>{{ tableRow.health }}</td>
            <td>{{ tableRow.armor }}</td>
            <td>{{ tableRow.roll }}</td>
            <td><input type="checkbox" name="Conentration" id="" /></td>
            <td>{{ tableRow.status[i] }}</td>
            <td>
              <select name="status" id="status">
                <option value="Blinded">Blinded</option>
                <option value="Charmed">Charmed</option>
                <option value="Deafened">Defeaned</option>
                <option value="Frightened">Frightened</option>
                <option value="Grappled">Grappled</option>
                <option value="Incapacitated">Incapacitated</option>
                <option value="Invisible">Invisible</option>
                <option value="Paralyzed">Paralyzed</option>
                <option value="Petrified">Petrified</option>
                <option value="Poisoned">Poisoned</option>
                <option value="Prone">Prone</option>
                <option value="Restrained">Restrained</option>
                <option value="Stunned">Stunned</option>
                <option value="Unconsious">Unconsious</option>
              </select>
              <input
                type="button"
                value="Add"
                @click="addStatusEffect($event)"
              />
            </td>
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
    ...mapActions(["iterate", "addStatus"]),
    addStatusEffect(event) {
      console.log(event);
      let combatant = document.getElementById("combatantName").innerHTML;
      console.log(combatant);
      let effect = document.getElementById("status").value;
      console.log(effect);
      let obj = {
        effect: effect,
        combatant: combatant,
      };
      this.addStatus(obj);
      /* 
        need to tie the status effect to the specific combatant, not entirely sure how to do this

        needs: append the status effect onto the status array in the combatant object

        also need to render the status effects in a different way, maybe v-for through and make a new div each time it reads a value in the array with a button to delete the object in the array
      */
    },
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