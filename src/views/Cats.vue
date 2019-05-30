<template>
  <div>
    <PetTable 
      species="cats"
      :pets="cats"
    />
  </div>
</template>

<script>
/* eslint-disable */
// @ Is a helper of vue-cli that reference the src folder
// 1 - import cats from '@/data/cats' // call the file with the data.
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {
      // cats //1 - first method to load objects in the component
    }
  },
  computed: {
    ...mapState([
        'cats'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
