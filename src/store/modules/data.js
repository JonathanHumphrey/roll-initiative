//import axios from 'axios'

const state = {
    combatants: []
};

const getters = {
    
};

const actions = {
    async appendCombatant({ commit }, newCombatant) {
        //const res = await axios.post('http://localhost:5000///combatants', newCombatant)
        console.log(newCombatant);
        commit('addCombatant', newCombatant);
    }
};

const mutations = {
    addCombatant: (state, newCombatant) => (state.combatants.unshift(newCombatant))
};

export default {
    state,
    getters,
    actions,
    mutations
}