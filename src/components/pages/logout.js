import {useHistory} from 'react-router-dom';

const LogOut = () => {
    localStorage.user = "0"
    const history = useHistory()
    history.push("/home")
    window.location.reload();
}

export default LogOut