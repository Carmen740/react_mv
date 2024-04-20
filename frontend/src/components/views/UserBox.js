import './CSS/UserBox.css';
import { jwtDecode } from 'jwt-decode';

const UserBox = ({setModalBox, token, setToken}) => {
    function logout() {
        setToken(null)
        localStorage.removeItem('token')
        document.location.reload()
    }

   function MultipleBoxes() {
    if (token !== null) {
        const login = jwtDecode(token).login
       return(
           <div className="UserBox">
               <p className={'UserProfile'}>{login}</p>
               <button className={'auth_but'} onClick={() => logout()}>Выйти</button>
           </div>
       )
    }
       return (
           <div className="UserBox">
               <div className="auth">
                       <button className={'auth_but'} onClick={() => setModalBox('Login')}>Войти</button>
                       <button className={'auth_but'} onClick={() => setModalBox('Register')}>Регистрация</button>
               </div>
           </div>
       )
   }

    return (
        <MultipleBoxes/>
    );

}
export default UserBox;