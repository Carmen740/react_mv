import './CSS/MortgageCalc.css';
import { useEffect, useState } from 'react';
import Product from '../views/Product';


const MortgageCalc = ({setModalBox,token,setMessage}) => {
    const [calculators, setProducts] = useState([])

    useEffect(() => {
        const api = 'http://localhost:1231/mortgage'

        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                console.debug(result.data)
                setProducts(result.data)
            })
    }, [])




    return (

            <div className="Calculators">
                {calculators.map((item) => <Product key={item._id} id={item._id}name={item.name} rate={item.rate}  setMessage={setMessage} setModalBox={setModalBox} token={token} />)}
            </div>
    );
};


export default MortgageCalc;
