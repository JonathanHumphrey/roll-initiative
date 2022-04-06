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
    iterator: 1, 
};

const getters = {
    allCombatants: (state) => state.combatants,
    currentFighter: (state) => state.combatants[state.iterator - 1]
};

const actions = {
    async appendCombatant({ commit }, newCombatant) {
        //const res = await axios.post('http://localhost:5000///combatants', newCombatant)
        console.log(state);
        commit('addCombatant', newCombatant);
    },
    /* async iterate({ commit }, iterator) {
        console.log("length", state.combatants.length)
        if (iterator === state.combatants.length) {
            
            iterator = 1;
        }
        else {
            iterator++;
        }
        console.log("current",iterator);
        commit('plusOne', iterator);
    }, */
    /* async addStatus({ commit }, obj) {
        commit('appendStatus', obj);
    } */
};

const mutations = {
    addCombatant: (state, newCombatant) => (state.combatants.unshift(newCombatant)),
    iterate(state, iterator) {
        
        
        if (iterator === state.combatants.length) {
            
            state.iterator = 1;
        }
        else {
            
            state.iterator++;
        }
    }, 
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