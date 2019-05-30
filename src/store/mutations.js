/* eslint-disable indent */
/* eslint-disable no-tabs */
/* Mutations exist to update state */
/* es-lint disable */
export default {
	appendPet: (state, { species, pet }) => {
		state[species].push(pet)
  }
}
