import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';

export const NavBar = () => {
    return (
        <div className="header__nav">
            <ul className="header-nav-login">
                <HashLink to="/login">
                    <li className="header-nav-login-element">
                        <a>Zaloguj</a>
                    </li>
                </HashLink>
                <li className="header-nav-login-element">
                    <a>Załóż konto</a>
                </li>
            </ul>
            <ul className="header-nav-links">
                <HashLink to="/">
                    <li className="header-nav-links-element">
                        <a>Start</a>
                    </li>
                </HashLink>
                <li className="header-nav-links-element">
                    <a>O co chodzi?</a>
                </li>
                <Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <li className="header-nav-links-element">
                        <a>O nas</a>
                    </li>
                </Link>
                <li className="header-nav-links-element">
                    <a>Fundacja i organizacje</a>
                </li>
                <li className="header-nav-links-element">
                    <a>Kontakt</a>
                </li>
            </ul>
        </div>
    )
}