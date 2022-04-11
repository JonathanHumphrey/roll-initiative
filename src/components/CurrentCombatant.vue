<template>
  <div class="fighter-data" v-if="this.iterator !== -1">
    {{ this.currentFighter.name }}
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
</style>
