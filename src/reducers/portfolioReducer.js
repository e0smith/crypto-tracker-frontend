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
        case "DELETE_PORTFOLIO":
            return state.portfolio.filter(portfolio => portfolio.id !== action.payload)
        default:
            return state
    }
}

export default portfolioReducer;