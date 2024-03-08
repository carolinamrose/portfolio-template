import headerImg from "../../assets/portfolio.svg"

const Header = () => {
    return (
        <header className="header__container">
            <img src={headerImg} alt="Portfólio" />
            <nav className="header__menu">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Stack</a></li>
                <li><a href="#">Projetos</a></li>
            </nav>
            <button className="header__button">Button</button>
        </header>
    )
}

export default Header;
