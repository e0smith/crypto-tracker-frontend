export const addPortfolio = (portfolioObj) => {
    return{
        type: "ADD_PORTFOLIO",
        payload: portfolioObj
    }
}

export const createPortfolio = (portfolio) => {    
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${localStorage.user}/portfolios`, {
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
        fetch(`http://localhost:3000/users/${localStorage.user}/portfolios`)
            .then(resp => resp.json())
            .then(portfolio => {
                dispatch({
                    type: "GET_PORTFOLIO",
                    payload: portfolio
                })
            })
        }
}

// export const editPortfolio = (data) => {
//     // debugger;
//     return (dispatch) => {
//       fetch(`http://localhost:3000/users/${localStorage.user}/portfolios/${data.id}`, {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         method: "PATCH",
//         body: JSON.stringify(data),
//       })
//         .then((response) => response.json())
//         .then((portfolio) => {
//             dispatch({ type: "EDIT_PORTFOLIO", payload: portfolio });
//           }
//         );
//     };
//   };

export const deletePortfolio = (Id) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_PORTFOLIO", payload: Id });
        fetch(`http://localhost:3000/users/${localStorage.user}/portfolios/${Id}`, {
        method: "DELETE",
        });
    };
};