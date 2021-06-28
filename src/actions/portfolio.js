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
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(portfolio),
        })
            .then((response) => response.json())
            .then((portfolio) => {
                dispatch({ type: "CREATE_PORTFOLIO", payload: portfolio})
            })
    }
}

export const getPortfolio = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/portfolios")
            .then(resp => resp.json())
            .then(portfolio => {
                dispatch({
                    type: "GET_PORTFOLIO",
                    payload: portfolio
                })
            })
        }
}

export const editPortfolio = (data) => {
    // debugger;
    return (dispatch) => {
      fetch(`http://localhost:3000/portfolios/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((portfolio) => {
            dispatch({ type: "EDIT_PORTFOLIO", payload: portfolio });
          }
        );
    };
  };