//import axios from 'axios'



const state = {
    combatants: [
        {
            name: 'jim',
            health: 1,
            armor: 1,
            roll: 2,
            mod: 0
        },
        {
            name: 'jam',
            health: 1,
            armor: 1,
            roll: 1,
            mod: 0
        }
    ],
    iterator: 0, 
};

const getters = {
    allCombatants: (state) => state.combatants
};

const actions = {
    async appendCombatant({ commit }, newCombatant) {
        //const res = await axios.post('http://localhost:5000///combatants', newCombatant)
        console.log(state);
        commit('addCombatant', newCombatant);
    },
    async iterate({ commit }, iterator) {
        console.log("length", state.combatants.length)
        if (iterator === state.combatants.length) {
            console.log('here??')
            iterator == 0;
        }
        else {
            iterator++;
        }
        console.log("current",iterator);
        commit('plusOne', iterator);
    }
};

const mutations = {
    addCombatant: (state, newCombatant) => (state.combatants.unshift(newCombatant)),
    plusOne: (state, iterator) => (state.iterator = iterator)
};

export default {
    state,
    getters,
    actions,
    mutations
}