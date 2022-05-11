//import axios from 'axios'




const state = {
    combatants: [
        {
            name: 'jim',
            health: 1,
            armor: 1,
            roll: 2,
            mod: 0,
            status: ["Blinded"]
        },
        {
            name: 'jam',
            health: 1,
            armor: 1,
            roll: 1,
            mod: 0, 
            status: ["Deafened", "Charmed"]
        },
        {
            name: 'jom',
            health: 1,
            armor: 1,
            roll: 0,
            mod: 0, 
            status: []
        }
    ],
    iterator: -1, 
};

const getters = {
    allCombatants: (state) => state.combatants,
    currentFighter(state, iterator) {
        
        console.log(state.iterator)
        if (iterator === (state.combatants.length)) {
            let index = state.combatants.length - 1;
            return state.combatants[index];
        } else {
            return state.combatants[state.iterator - 1]
        }
    }
};

const actions = {
    async appendCombatant({ commit }, newCombatant) {
        //const res = await axios.post('http://localhost:5000///combatants', newCombatant)
        console.log(state);
        commit('addCombatant', newCombatant);
    },
};

const mutations = {
    addCombatant: (state, newCombatant) => (state.combatants.unshift(newCombatant)),
    iterate(state, iterator) {
        if (iterator === state.combatants.length + 1 || iterator === -1) { 
            state.iterator = 0;
        }
        else { 
            state.iterator++;
        }
        console.log(state.combatants[iterator])
    }, 
    // TODO: check where this is needed still
    addStatus: (state, obj) => {
        console.log(obj) 
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}