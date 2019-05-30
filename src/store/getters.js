/* eslint-disable indent */
/* eslint-disable no-tabs */
/* Modify state to how componets see then, but actually doesnt change the state itself, good to create methods to take information(filtering) from them */
/* es-lint disable */
export default {
	animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    },
    getAllCats: (state) => {
        return state.pets.filter((pet) => {
            return pet.species === 'cat'
        })
    }

}
