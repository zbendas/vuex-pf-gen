const state = {
    bab: {
        // d10 or d12 Hit Die
        full: [
            [1,], [2,], [3,], [4,], [5,], [6, 1], [7, 2], [8, 3], [9, 4], [10, 5], [11, 6, 1], [12, 7, 2],
            [13, 8, 3], [14, 9, 4], [15, 10, 5], [16, 11, 6, 1], [17, 12, 7, 2], [18, 13, 8, 3],
            [19, 14, 9, 4], [20, 15, 10, 5]
        ],
        // d6 Hit Die
        three_fourths: [
            [0,], [1,], [2,], [3,], [3,], [4,], [5,], [6, 1], [6, 1], [7, 2], [8, 3], [9, 4],
            [9, 4], [10, 5], [11, 6, 1], [12, 7, 2], [12, 7, 2], [13, 8, 3], [14, 9, 4],
            [15, 10, 5]
        ],
        // d8 Hit Die
        half: [
            [0,], [1,], [1,], [2,], [2,], [3,], [3,], [4,], [4,], [5,], [5,], [6, 1], [6, 1], [7, 2],
            [7, 2], [8, 3], [8, 3], [9, 4], [9, 4], [10, 5]
        ],
    },
    saves: {
        good_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
        poor_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    }
};

const getters = {
    getBaseSave: state => (save_type, level) => {
        return state.saves[save_type][parseInt(level - 1)];
    },
    getBABString: state => (bab_progression, level) => {
        return state.bab[bab_progression][parseInt(level - 1)].join('/');
    },
    getBABArray: state => (bab_progression, level) => {
        return state.bab[bab_progression][parseInt(level - 1)];
    }

};

const mutations = {

};

export default {
    state,
    getters,
    mutations
}