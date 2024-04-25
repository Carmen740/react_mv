import './CSS/Login.css'
const Login = ({setModalBox, setToken, setMessage}) => {
    const Log = () => {
    const login = document.getElementById('log').value;
    const password = document.getElementById('pass').value;
    const data = {
        login:login,
        password:password
    }
        let message
const Error = document.getElementById('Error')
        if (!login || password.length === 0) {
            Error.innerHTML = "Неверный логин или пароль"
            return
        }
        const api = 'http://localhost:1200/login'
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((result) => result.json())
            .then((result) => {
                message = result.message
                if (result.token !== undefined) {
                    localStorage.setItem('token', result.token)
                    setToken(result.token)
                }
            })

    setTimeout(() => {
        setMessage(message)
        setModalBox('MessageBox')
    }, 100)
    }

    return(
        <div className="login">
            <h2>Авторизация</h2>
            <div className="form">
                <label htmlFor="log">Логин:</label><input id="log" type="text" name="login" placeholder="Логин"/>
                <label htmlFor="pass">Пароль:</label><input  id="pass" type="password" name="password" placeholder="Пароль"/>
                <input className={'sub'} onClick={() => Log()} type="submit" value="Войти"/>
                <p id={'Error'}></p>
            </div>
        </div>
    )
}
export default Login;