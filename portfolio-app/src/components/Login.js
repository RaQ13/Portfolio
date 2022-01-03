import {NavBar} from "./NavBar";
import {DecoratedHeader} from "./DecoratedHeader";
import {Button} from "./Button";
import {HashLink} from "react-router-hash-link";
import {auth} from "../firebase";
import React, {useState, useReducer} from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export const Login = () => {

    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState}),
        {
            email: '',
            password: '',
        },
    );
    const { email, password } = inputsContent;
    const [error, setError] = useState(false);

    const handleInputChange = (ev) => {
        console.log(ev.target)
        setInputsContent({
            [ev.target.name]: ev.target.value,
        });
    };

    const handleSignIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) =>
                alert(`Twój email lub hasło jest nieprawidłowe, sprawdź wprowadzone dane ${error}`),
            );
        setError(false);
    };

    const errorLogin = () => {
        if (error === false) {
            handleSignIn()
        }
    }

    return (
        <div className="login__page">
            <header className="login__header">
                <NavBar/>
            </header>
            <div className="login__container">
                <DecoratedHeader text={`Zaloguj się`}/>
                <form className="login__form">
                    <label>Email</label>
                    <input
                        value={email}
                        type="email"
                        name="email"
                        required
                        onChange={handleInputChange}
                    />
                    <label>Hasło</label>
                    <input
                        value={password}
                        type="password"
                        name="password"
                        required
                        onChange={handleInputChange}
                    />
                </form>
                <div className="login__buttons">
                       <HashLink onClick={() => {errorLogin();}} >
                           <Button text={`Zaloguj się`}/>
                       </HashLink>
                       <HashLink to="/register">
                           <Button text={`Załóż konto`}/>
                       </HashLink>
                </div>
            </div>
        </div>
    )
}