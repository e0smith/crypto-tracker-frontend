const initialState = {
    cryptos: [],
    loading: false
}
const cryptosReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_CRYPTOS":
            return {
                ...state,
                cryptos: [...state.cryptos, action.payload]
            }
        case "GET_CRYPTOS":
            return {
                ...state,
                cryptos: [...state.cryptos, ...action.payload]
            }
        default:
            return state
    }
}

export default cryptosReducer;