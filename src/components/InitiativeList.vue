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
            v-for="(item, i) in sortedList"
            v-bind:key="i"
            v-bind:id="`${i + 1}`"
          >
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
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "InitiativeList",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["iterate"]),
    nextCombatant() {
      let thing = document.getElementsByTagName("table");
      console.log(thing);
      let item = document.getElementsByTagName("tr")[this.iterator];
      console.log(this.iterator, item.id);

      if (item.id == this.iterator) {
        console.log(item);
        item.classList.add("highlight");
      } else if (item.id !== this.iterator) {
        console.log(item);
        //item.classList.remove("highlight");
      }
      for (let i in thing) {
        console.log(thing[i].id);
        if (thing[i].id !== this.iterator) {
          item.classList.remove("highlight");
        }
      }

      this.iterate(this.iterator);

      /*
        okay, need to make something iterate every time the button is clicked, then it needs to highlight the correct row corresponding to the iterator, then it unhighlights while it is not being selected
      */
    },
  },
  computed: {
    ...mapGetters(["allCombatants"]),
    ...mapState({
      iterator: (state) => state.data.iterator,
    }),
    /*
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
  background-color: green;
}
h3 {
  margin: 2rem;
}
</style>