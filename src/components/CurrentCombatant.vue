<template>
  <div class="fighter-data" v-if="this.iterator !== -1">
    {{ this.currentFighter.name }}
    <div class="data" v-for="i in this.currentFighter.status" v-bind:key="i">
      {{ i }}
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
}
.data {
  display: flex;
  flex-direction: column;
}
</style>
