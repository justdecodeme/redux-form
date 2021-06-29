const intialState = {
    name: 'some name'
}

const reducer = (state = intialState, action) => {
    if(action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: action.payload
        }
    }
    return state;
}

export default reducer;