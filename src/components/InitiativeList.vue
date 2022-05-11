<template>
  <div class="container">
    <div class="fighters">
      <table>
        <thead>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Health</th>
          <th scope="col">Armor</th>
          <th scope="col">Roll</th>
          <th scope="col">Concentration</th>
        </thead>
        <tbody id="list">
          <tr
            v-for="(tableRow, i) in sortedList"
            v-bind:key="i"
            v-bind:id="`${i + 1}`"
            @click="popOutWindow(tableRow)"
          >
            <th scope="row" id="index" value="i">{{ ++i }}</th>
            <td id="combatantName">{{ tableRow.name }}</td>
            <td>{{ tableRow.health }}</td>
            <td>{{ tableRow.armor }}</td>
            <td>{{ tableRow.roll }}</td>
            <td><input type="checkbox" name="Conentration" id="" /></td>
          </tr>
        </tbody>
      </table>
      <input type="button" value="next" @click="nextCombatant($event)" />
    </div>
    <select name="status" id="status">
      <option type="text" value="Blinded">Blinded</option>
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
    <input type="button" value="Add" @click="addStatusEffect()" />
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "InitiativeList",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["iterate", "addStatus"]),

    /*
      Prototyping using a modal to add or remove status effects, since they are usually imposed on a PC outside of their turn in initiative order

      Ways to do this: 
        - Remove this function from this component and put it into its own
        - keep it here and tie it into the state of the program

        Both of these options imply a slight refactoring of the code that I have not yet planned out on paper... so im gonna get to work on that
    */
    popOutWindow(tableRow) {
      console.log(tableRow.name);
    },
    addStatusEffect() {
      console.log(this.currentFighter);

      let effect = document.getElementById("status").value;
      this.currentFighter.status.unshift(effect);
      let obj = {
        effect: effect,
        combatant: this.currentFighter,
      };
      this.addStatus(obj);
    },
    /*
    FUNCTION: nextCombatant()
      serves to keep track of the turn order, but making use of an iterator in state
      the function checks to see if the iterator matches the ID value assigned to the row, then adds a highlight class to it, then removes the class of the previous row on execution of the function
    */
    nextCombatant() {
      let prevRow;

      if (this.iterator === -1 || this.iterator >= this.allCombatants.length) {
        console.log("poop");
        this.iterate(this.iterator);
      }
      if (this.iterator === 0) {
        let tableRow = document.getElementsByTagName("tr")[this.iterator];
        tableRow.classList.add("highlight");
        prevRow =
          document.getElementsByTagName("tr")[this.combatants.length - 1];
      } else if (this.iterator !== 0) {
        prevRow = document.getElementsByTagName("tr")[this.iterator - 1];
        let tableRow = document.getElementsByTagName("tr")[this.iterator];
        tableRow.classList.add("highlight");
      }
      this.iterate(this.iterator);
      if (prevRow) {
        prevRow.classList.remove("highlight");
      }
    },
  },
  computed: {
    ...mapGetters(["allCombatants", "currentFighter"]),
    ...mapState({
      iterator: (state) => state.data.iterator,
      combatants: (state) => state.data.combatants,
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