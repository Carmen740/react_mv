import React, {useState} from 'react';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/views/Login';
import Register from './components/views/Register';
import ModalBox from './components/pages/ModalBox';
import MessageBox from './components/pages/MessageBox';
import MortgageCalc from './components/pages/MortgageCalc';
import  CarLoanCalc  from './components/pages/CarLoanCalc';
import ConsumerCalc from './components/pages/ConsumerCalc';
import  AddCalcBoxM from './components/pages/AddCalc/AddCalcBoxM';
import  AddCalcBoxCL from './components/pages/AddCalc/AddCalcBoxCL';
import  AddCalcBoxCS from './components/pages/AddCalc/AddCalcBoxCS';


function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [page, setPage] = useState('Home')
    const [message, setMessage] = useState('')
    const [modalBox, setModalBox] = useState('none')
    const modalBoxes = {
        none:null,
        Login: <ModalBox setModalBox={setModalBox}><Login setModalBox={setModalBox} setToken={setToken} setMessage={setMessage} /></ModalBox>,
        Register: <ModalBox setModalBox={setModalBox}><Register setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>,
        MessageBox: <ModalBox setModalBox={setModalBox}><MessageBox setModalBox={setModalBox} message={message} /></ModalBox>,
        AddCalcBoxM: <ModalBox setModalBox={setModalBox}><AddCalcBoxM setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>,
        AddCalcBoxCL: <ModalBox setModalBox={setModalBox}><AddCalcBoxCL setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>,
        AddCalcBoxCS: <ModalBox setModalBox={setModalBox}><AddCalcBoxCS setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>
    }
    const pages = {
    Home: <Home token={token} />,
        MortgageCalc: <MortgageCalc  setMessage={setMessage} setModalBox={setModalBox} token={token} />,
        CarLoanCalc: <CarLoanCalc  setMessage={setMessage} setModalBox={setModalBox} token={token} />,
        ConsumerCalc: <ConsumerCalc  setMessage={setMessage} setModalBox={setModalBox} token={token} />,
    }
    return (
        <div className={'app-wrapper'}>
            <Header setPage={setPage}  setMessage={setMessage} setModalBox={setModalBox} token={token} setToken={setToken} />
            {pages[page]}
            {modalBoxes[modalBox]}
            <Footer/>
        </div>);
}

export default App;
