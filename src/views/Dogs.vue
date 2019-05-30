<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table stripd hover :items="dogs">
      <!-- /Dinamic template that stores href -->
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  data() {
    return {
      //   dogs
    };
  },
  computed: {
    ...mapState(["dogs"])
  }
};
</script>

<style lang="scss" scoped>
</style>
