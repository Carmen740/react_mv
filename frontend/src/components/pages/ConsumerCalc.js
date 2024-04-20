import React, { useEffect, useState } from 'react';
import './CSS/Consumer.css'
import { jwtDecode } from 'jwt-decode';
import Product from '../views/Product';
const ConsumerCalc = ({token,setModalBox,setMessage}) => {
    const [calculators, setProducts] = useState([])

    useEffect(() => {
        const api = 'http://localhost:1231/consumer'

        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                console.debug(result.data)
                setProducts(result.data)
            })
    }, [])
    function AddProduct() {
        const login = jwtDecode(token).login;
        if (login === 'Potato') {
            return (<>
                    <div className={'adminPanel'}>
                        <button className="addProduct" onClick={() => setModalBox('AddCalcBoxCS')}>Добавить калькулятор</button>
                    </div>
                </>
            );
        }

    }


    return (
        <div className="container">
            <AddProduct/>
            <div className="Calculators">
                {calculators.map((item) => <Product key={item._id} id={item._id}name={item.name} rate={item.rate}  setMessage={setMessage} setModalBox={setModalBox} token={token} />)}
            </div>
        </div>
    );
};
export default ConsumerCalc;