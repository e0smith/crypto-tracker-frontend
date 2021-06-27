export const getCryptos = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/cryptos")
            .then(resp => resp.json())
            .then(cryptos => {
                dispatch({
                    type: "GET_CRYPTOS",
                    payload: cryptos
                })
            })
        }
}