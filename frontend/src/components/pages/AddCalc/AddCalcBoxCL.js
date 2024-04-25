
import React from 'react';
import './AddCalc.css'

function AddCalcBoxCL  ({ setModalBox, setMessage }) {

    function AddProduct() {
        const name = document.getElementById('nam').value
        const rate = document.getElementById('rate').value


        let message

        const data = {
            name:name,
            rate:rate
        }

        // console.debug(data)

        const api = 'http://localhost:1200/addCalc/car-loan'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((result) => message = result.message)

        setTimeout(() => {
            setMessage(message)
            setModalBox('MessageBox')
        }, 100)
    }

    return (
        <div className="AddCalcBox">
            <h1>Добавление калькулятора</h1>
            <input id='nam' placeholder='Имя калькулятора' type='text'/>
            <input id='rate' placeholder='Годовая ставка' type='number' step='0.01'/>
            <button id='send' onClick={() => AddProduct()}>Добавить</button>
        </div>
    );
}

export default AddCalcBoxCL;