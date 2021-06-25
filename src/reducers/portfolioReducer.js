const initialState = {
    cryptos: [],
    loading: false
}
const portfolioReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_PORTFOLIO":
            return {
                ...state,
                cryptos: [...state.cryptos, action.payload]
            }
        case "GET_PORTFOLIO":
            return {
                ...state,
                cryptos: [...state.cryptos, ...action.payload]
            }
        default:
            return state
    }
}

export default portfolioReducer;