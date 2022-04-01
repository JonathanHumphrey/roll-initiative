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
            status: []
        }
    ],
    iterator: 1, 
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
            
            iterator = 1;
        }
        else {
            iterator++;
        }
        console.log("current",iterator);
        commit('plusOne', iterator);
    },
    async addStatus({ commit }, obj) {
        commit('appendStatus', obj);
    }
};

const mutations = {
    addCombatant: (state, newCombatant) => (state.combatants.unshift(newCombatant)),
    plusOne: (state, iterator) => (state.iterator = iterator),
    appendStatus: (state, obj) => {
        let arr;
        
        for (let item in state.combatants) {
            console.log(state.combatants[item]);
            if (state.combatants[item].name === obj.combatant) {
                arr = state.combatants[item].status;
            }
        }
        for (let effect in arr) {
            console.log(arr[effect]);
            
            if (arr[effect] == obj.status) {
                alert(`'target already ${obj.status}'`)
            } else {
                console.log('??')
                
            }
        }
        arr.push(obj.effect)
        console.log(arr);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}