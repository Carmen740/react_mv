import './CSS/UserBox.css';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

const UserBox = ({setModalBox, token, setToken,setPage}) => {
    function logout() {
        setToken(null)
        localStorage.removeItem('token')
        document.location.reload()
    }

   function MultipleBoxes() {
       function Admin () {
           const role = jwtDecode(token).role
           if ( role === 'admin' ) {
               return(
                   <>
                       <button onClick={() => setPage('AdminPanel')} className={'menu__link'}>Панель админа</button>
                   </>
               )
           }
       }
    if (token !== null) {
        const login = jwtDecode(token).login
       return(
           <>
               <Admin/>
           <div className="UserBox">
               <p className={'UserProfile'}>{login}</p>
               <button className={'auth_but'} onClick={() => logout()}>Выйти</button>
           </div>
               </>
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