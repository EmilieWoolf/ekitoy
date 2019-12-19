const initState = {
    toys: [],
    filteredToys: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_TOYS':
            const { toys } = state;
            return {...state, toys: [...action.payload]};
        default:
            return state;
    }
};

export default reducer;