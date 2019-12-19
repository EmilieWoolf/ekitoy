const initState = {
    toys: [
        {id: 1, name: 'Barbie Raiponce'},
        {id: 2, name: 'Poupée Lara Croft'},
        {id: 3, name: 'Lego Harry Potter'}
    ],
    filteredToys: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_TOYS':
            const { toys } = state;
            return state;
        default:
            return state;
    }
}; 

export default reducer;