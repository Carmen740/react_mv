import React from 'react';
import './CSS/Header.css';
import UserBox from './UserBox';
import {jwtDecode} from 'jwt-decode'
import login from './Login';

const Header = ({setPage, setModalBox, token, setToken}) => {
    function Calc () {
        if(token !== null) {
            return(
            <>
            <button onClick={() => setPage('Home')} className={'menu__link'}>Главная</button>
            <button onClick={() => setPage('ConsumerCalc')} className="menu__link">Потребительский калькулятор</button>
            <button onClick={() => setPage('MortgageCalc')} className="menu__link">Калькулятор ипотеки</button>
            <button onClick={() => setPage('CarLoanCalc')} className="menu__link">Калькулятор автокредита</button>
            </>)
        }
    }
    function AdminPanel () {
    const role = jwtDecode(token).role
     if (role === 'admin') {
            return(
                <>
                    <button onClick={() => setPage('AdminPanel')} className={'menu__link'}>Панель админа</button>
                </>
            )
        }
    }

    return (
        <header>
            <nav className="menu">
                <div className="logo">
                    <h3>LO<span>GO</span></h3>
                </div>
                <Calc/>
                <AdminPanel />
                <div className="auth">
                    <UserBox token={token} setToken={setToken} setModalBox={setModalBox} />
                </div>
            </nav>
        </header>
    );
};

export default Header;