<template>
  <div>
    <PetTable 
      species="dogs"
      :pets="dogs"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable,
  },
  data() {
    return {
      //   dogs
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
};
</script>

<style lang="scss" scoped>
</style>
