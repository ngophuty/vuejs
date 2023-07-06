const state = () => ({
    count: 0
})

const mutations = {
    increment(state) {
        state.count++
    }
}

const getters = {
    getCount(state) {
        console.log(state.count)
        return state.count
    }
}

const actions = {}

export default {namespace: true, state, mutations, getters, actions}