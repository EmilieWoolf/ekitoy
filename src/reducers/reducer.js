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
        default:
            return state;
    }
}; 

export default reducer;