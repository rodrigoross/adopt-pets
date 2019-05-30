<template>
    <div>
        <h1>Cats for adoption</h1>
        <b-table striped hover :items="cats">
            <!-- /Dinamic template that stores href -->
            <template slot="name" slot-scope="data">
                <router-link :to="`/pets/${data.index}`">
                    {{ data.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
// @ Is a helper of vue-cli that reference the src folder
import cats from '@/data/cats'
    export default {
        data() {
            return {
                cats
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>