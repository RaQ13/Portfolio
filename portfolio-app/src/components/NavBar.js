import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import {useState, useEffect} from "react";
import {Button} from "./Button";
import { auth } from "../firebase";

export const NavBar = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                localStorage.setItem('currentUser', user.uid);
                setUserEmail(user.email);
            } else {
                setCurrentUser(null);
                localStorage.removeItem('currentUser');
                setUserEmail(null);
            }
        });
    }, []);

    const LoggedIn = () => {
        return (
           <div className="logged__nav">
               {currentUser ? (
                   <>
                       <h1>Cześć {userEmail}!</h1>
                       <Button text={`Oddaj rzeczy`}/>
                       <HashLink onClick={handleSignOut}>
                           <Button text={`Wyloguj`}/>
                       </HashLink>
                   </>
               ) : null
               }
           </div>
        )
    }

    const handleSignOut = () => auth.signOut();

    return (
        <>
            {LoggedIn()}
            <div className="header__nav">
                <ul className="header-nav-login">
                    <HashLink to="/login">
                        <li className="header-nav-login-element">
                            <a>Zaloguj</a>
                        </li>
                    </HashLink>
                    <HashLink to="/register">
                        <li className="header-nav-login-element">
                            <a>Załóż konto</a>
                        </li>
                    </HashLink>
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
                        duration={1200}
                        delay={250}
                    >
                        <li className="header-nav-links-element">
                            <a>O nas</a>
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="whoWeHelp"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}
                        delay={250}
                    >
                        <li className="header-nav-links-element">
                            <a>Fundacja i organizacje</a>
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}
                        delay={250}
                    >
                        <li className="header-nav-links-element">
                            <a>Kontakt</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}