import './CSS/Product.css';
import React from 'react';
import { jwtDecode } from 'jwt-decode';

function Product({ id, name,rate, token}) {

    const calc = {
        id: id,
        name: name,
        rate:rate
    }
    const monthlyRate = rate / 12 / 100;

    const uho = () => {
        const n = parseInt(document.getElementById("name").value, 10);
        const p = parseInt(document.getElementById("num").value, 10);
        const d = parseInt(document.getElementById("nu").value, 10);
//
        if (isNaN(n) || isNaN(p) || isNaN(d)) {
            alert("Заполните все поля");
            return;
        }

        const sum = n - d;
        const rooy = Math.pow((1 + monthlyRate), p * 12);
        const payment = sum * monthlyRate * rooy / (rooy - 1);
        const income = payment * 2.5;

        document.getElementById('sum').value = sum.toFixed(0);
        document.getElementById('rooy').value = rooy.toFixed(2);
        document.getElementById('payment').value = payment.toFixed(0);
        document.getElementById('income').value = income.toFixed(0);
    };
    function sendEmail() {
        const email = jwtDecode(token).email
        const data = {
            service_id: 'service_hcdmsfb',
            template_id: 'template_lbe5eon',
            user_id: 'u3Q457BUP1iTMmtuM',
            template_params: {
                costOfHouse : document.getElementById('name').value,
                loanDurationInYears : document.getElementById('num').value,
                downPayment : document.getElementById('nu').value,
                rooy : document.getElementById('rooy').value,
                sum : document.getElementById('sum').value,
                payment : document.getElementById('payment').value,
                income : document.getElementById('income').value,
                email:email
            }
        };
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((result) => alert('Email sent'))
    }

    return (
            <div className="Product">

                <h3>{calc.name}</h3>
                <p>Введите стоимость жилья</p>
                <input type="number" id="name" name="name" required /><br />

                <p>Введите срок кредитования в годах</p>
                <input type="number" id="num" name="num" required /><br />

                <p>Предоплата</p>
                <input type="number" id="nu" name="nu" /><br />

                <button onClick={uho}>Рассчитать</button>

                <p style={{borderBottom: "2px solid #1d2d39",borderRadius:"2px",marginBottom:"5px"}}>Итог расчетов</p>

                <p>Сумма кредита</p>
                <input type="number" id="sum" name="sum" required /><br />

                <p>Общая ставка</p>
                <input type="number" id="rooy" name="rooy" required /><br />

                <p>Ежемесячный платеж</p>
                <input type="number" id="payment" name="payment" required /><br />

                <p>Необходимый доход</p>
                <input type="number" id="income" name="income" /><br />

                <input type="submit" onClick={() => sendEmail()} value={'Отправить на почту'}/>
            </div>
    );
}

export default Product;