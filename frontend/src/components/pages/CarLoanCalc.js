import './CSS/CarLoan.css';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import Product from '../views/Product';


const CarLoanCalc = ({token, setModalBox,setMessage}) => {
    const [carLoan, setProducts] = useState([])

    useEffect(() => {
        const api = 'http://localhost:1231/car-loan'

        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                setProducts(result.data)
            })
    }, [])
    function AddCalc() {
        const login = jwtDecode(token).login;
        if (login === 'Potato') {
            return (<>
                    <button className="addProduct" onClick={() => setModalBox('AddCalcBoxCL')}>Добавить калькулятор</button>
                </>
            );
        }

    }

    return (
        <div className="container">
            <AddCalc/>


            <div className="Calculators">
                {carLoan.map((item) => <Product key={item._id} id={item._id}name={item.name} rate={item.rate}  setMessage={setMessage} setModalBox={setModalBox} token={token} />)}
            </div>
        </div>
    );
};

export default CarLoanCalc;
