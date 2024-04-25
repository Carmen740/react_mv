import React from 'react';
import './CSS/Header.css';
import UserBox from './UserBox';

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
    return (
        <header>
            <nav className="menu">
                <div className="logo">
                    <h3>LO<span>GO</span></h3>
                </div>
                <Calc/>
                    <UserBox token={token} setToken={setToken} setPage={setPage} setModalBox={setModalBox} />
            </nav>
        </header>
    );
};

export default Header;