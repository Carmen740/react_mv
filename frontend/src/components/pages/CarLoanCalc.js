import './CSS/CarLoan.css';
import { useEffect, useState } from 'react';
import Product from '../views/Product';


const CarLoanCalc = ({token, setModalBox,setMessage}) => {
    const [carLoan, setProducts] = useState([])

    useEffect(() => {
        getAllCalc()
    }, [])
    const getAllCalc = () => {
        const api = 'http://localhost:1200/car-loan'
        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                setProducts(result.data)
            })
    }

    return (
        <div className="container">
            <div className="Calculators">
                {carLoan.map((item) => <Product key={item._id} id={item._id}name={item.name} rate={item.rate}  setMessage={setMessage} setModalBox={setModalBox} token={token} />)}
            </div>
        </div>
    );
};

export default CarLoanCalc;
