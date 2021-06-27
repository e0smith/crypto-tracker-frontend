const initialState = {
    portfolio: [],
    loading: false
}
const portfolioReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_PORTFOLIO":
            return {
                ...state,
                portfolio: [...state.portfolio, action.payload]
            }
        case "GET_PORTFOLIO":
            return {
                ...state,
                portfolio: [...state.portfolio, ...action.payload]
            }
        default:
            return state
    }
}

export default portfolioReducer;