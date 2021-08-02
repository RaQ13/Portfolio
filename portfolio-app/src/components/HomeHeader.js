import Decoration from "../assets/Decoration.svg";

export const Header = () => {
    return (
        <header>
            <div className="header__nav">
                <ul className="header-nav-login">
                    <li className="header-nav-login-element">
                        <a>Zaloguj</a>
                    </li>
                    <li className="header-nav-login-element">
                        <a>Załóż konto</a>
                    </li>
                </ul>
                <ul className="header-nav-links">
                    <li className="header-nav-links-element">
                        <a>Start</a>
                    </li>
                    <li className="header-nav-links-element">
                        <a>O co chodzi?</a>
                    </li>
                    <li className="header-nav-links-element">
                        <a>O nas</a>
                    </li>
                    <li className="header-nav-links-element">
                        <a>Fundacja i organizacje</a>
                    </li>
                    <li className="header-nav-links-element">
                        <a>Kontakt</a>
                    </li>
                </ul>
            </div>
            <div className="header__start">
                <div className="header__start__container">
                    <h1>
                        Zacznij pomagać!
                        <br></br>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <img className="decoration" src={Decoration} alt="decoration" />
                    <div className="header__start__buttons">
                        <button>Oddaj <br></br>rzeczy</button>
                        <button>Zorganizuj Zbiórkę</button>
                    </div>
                </div>
            </div>
        </header>
    )
}