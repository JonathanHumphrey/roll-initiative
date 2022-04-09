<template>
  <div class="fighter-data" v-if="this.currentFighter">
    {{ this.currentFighter.name }}
  </div>
  <div v-else>
    <p>Combat Not Started</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapGetters(["currentFighter"]),
  },
};
</script>
<style scoped>
</style>
