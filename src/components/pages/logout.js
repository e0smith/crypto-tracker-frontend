import {useHistory} from 'react-router-dom';

const LogOut = () => {
    localStorage.user = "0"
    const history = useHistory()
    history.push("/home")
    window.location.reload();
}

export default LogOut

// import { useDispatch } from 'react-redux';
// import {useHistory} from 'react-router-dom';

// function LogOut(){
//     const dispatch = useDispatch()
//     dispatch({type: "SET_USER", payload: null })
//     const history = useHistory()
//     history.replace("/home")
// }

// export default LogOut