<template>
  <div>
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="cats">
      <!-- /Dinamic template that stores href -->
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
/* eslint-disable */
// @ Is a helper of vue-cli that reference the src folder
// 1 - import cats from '@/data/cats' // call the file with the data.
import { mapState } from 'vuex'

export default {
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
