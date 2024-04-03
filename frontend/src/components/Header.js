import './CSS/Header.css';


const Header = () => {
    return(
        <header>
        <nav className={'menu'}>
            <ul className={"menu_list"}>
                <li>Главная</li>
                <li>Кредитный калькулятор</li>
                <li>Калькулятор ипотеки</li>
                <li>Калькулятор займов</li>
                <li>Калькулятор вкладов</li>
            </ul>
        </nav>
        </header>
    );
}

export default Header