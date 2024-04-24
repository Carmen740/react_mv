import React, { useEffect, useState } from 'react';
import './CSS/Consumer.css'
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




    return (
        <div className="container">
            <div className="Calculators">
                {calculators.map((item) => <Product key={item._id} id={item._id} name={item.name} rate={item.rate}  setMessage={setMessage} setModalBox={setModalBox} token={token} />)}
            </div>
        </div>
    );
};
export default ConsumerCalc;