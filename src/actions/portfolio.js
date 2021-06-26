export const addPortfolio = (portfolioObj) => {
    return{
        type: "ADD_PORTFOLIO",
        payload: portfolioObj
    }
}

export const createPortfolio = (portfolio) => {    
    return (dispatch) => {
        fetch("http://localhost:3000/portfolios", {
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

export const getPortfolio = () => {
    return (dispatch) => {
          dispatch({type: "LOADING"})
      
          fetch("http://localhost:3000/portfolios")
                .then(resp => resp.json())
                .then(portfolios =>{
                    dispatch({
                        type: "GET_PORTFOLIOS",
                        payload: portfolios
                    })
                } )
              }

}