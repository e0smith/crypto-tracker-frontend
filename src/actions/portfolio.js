export const addPortfolio = (portfolioObj) => {
    return{
        type: "ADD_PORTFOLIO",
        payload: portfolioObj
    }
}

export const createPortfolio = (portfolio) => {    
    return (dispatch) => {
        fetch("https://localhost:3000/portfolios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({portfolio}),
        })
            .then(resp => resp.json())
            .then(portfolio => {
                dispatch(addPortfolio(portfolio))
            })
    }
}