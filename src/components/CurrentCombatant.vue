<template>
  <div class="fighter-data" v-if="this.iterator !== -1">
    {{ this.currentFighter.name }}
    <div class="data" v-for="i in this.currentFighter.status" v-bind:key="i">
      <p>{{ i }}</p>

      <p>x</p>
    </div>
  </div>
  <div v-else>
    <p>Combat Not Started</p>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapState({
      iterator: (state) => state.data.iterator,
    }),
    ...mapGetters(["currentFighter"]),
  },
};
</script>

<style scoped>
.fighter-data {
  border: solid black;
}
.data {
  display: flex;
  border: solid black;
  flex-direction: row;
  width: 6rem;
  margin: auto;
}
p {
  margin-right: 0.25rem;
}
</style>
