const initialState = {
    portfolio: [],
    // user: localStorage.user,
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
        
        // case "GET_USER":
        //     return {
        //         ...state,
        //         user: state.user
        //     }
        // case "SET_USER":
        //     // debugger
        //     return {
        //         user: state.user = ""
        //     }
            default:
                return state
    }
}

export default portfolioReducer;