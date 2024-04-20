import './CSS/Register.css'

function Register({ setModalBox, setMessage }) {

//register
    function Reg() {
        const email = document.getElementById('email').value
        const login = document.getElementById('log').value
        const password = document.getElementById('pass').value
        const validEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        const validLogin = login.match(/.+$/i)



        const data = {
            email: email,
            login: login,
            password: password,
            role: "user"
        }
let message
        if (!validEmail || !validLogin || password.length === 0) {
            document.getElementById('Error').innerText = "Введите данные"
            document.getElementById('Error').style.background = 'crimson'
            return
        }


        const api = 'http://localhost:1231/register'

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
    return(
        <div className="register">
            <h2>Регистрация</h2>
            <div className={'form'}>
                <label htmlFor="log">Логин:</label><input type="text" name={'login'} placeholder={'Логин'} id={'log'}/>
                <label htmlFor="email">Почта:</label><input type="email" name={'email'} placeholder={'Почта'} id={'email'}/>
                <label htmlFor="pass">Пароль:</label><input type="password" name={'password'} placeholder={'Пароль'} id={'pass'}/>
            <input type="submit" onClick={() => Reg()} value={'Зарегистрироваться'}/>
            <p id={'Error'}></p>
        </div>
</div>
)
}

export default Register;