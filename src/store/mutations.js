export default {
    appendPet: (state, { specy, pet }) => {
        state[specy].push(pet)
    }
}