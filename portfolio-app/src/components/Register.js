import {NavBar} from "./NavBar";
import {DecoratedHeader} from "./DecoratedHeader";
import {Button} from "./Button";
import { HashLink } from 'react-router-hash-link';
import React, {useState, useReducer} from "react";
import { auth } from "../firebase";

export const Register = () => {

    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState}),
        {
            email: '',
            password: '',
            passwordCheck: '',
        },
    );
    const { email, password, passwordCheck } = inputsContent;
    const [error, setError] = useState(false);

    const handleInputChange = (ev) => {
        console.log(ev.target)
        setInputsContent({
            [ev.target.name]: ev.target.value,
        });
    };

    console.log(inputsContent);


    const ValidateRegisterData = (ev) => {
        ev.preventDefault()

        const EmailCheck = email.indexOf("@");

        if (EmailCheck === -1) {
            setError(true);
        }
        if (password.length < 6) {
            setError(true);
        }
        if (passwordCheck !== password) {
            setError(true);
        }
        else {
            setError(false);
        }
    }

    const ErrorMessage = () => {
        if (error === true) {
            return <p>Email musi być prawidłowy i hasło musi mieć minimum 6 znaków!</p>
        }
    }


    const handleSignUp = (ev) => {
        ev.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => alert(`Email jest już zajęty, lub jest niepoprawny. ${error}`));
    };

    return (
        <div className="login__page">
            <header className="login__header">
                <NavBar/>
            </header>
            <div className="login__container">
                <DecoratedHeader text={`Załóż konto`}/>
                <form className="login__form">
                    <label>Email</label>
                    <input value={email}
                           type="email"
                           name="email"
                           required
                           onChange={handleInputChange}/>
                    <label>Hasło</label>
                    <input value={password}
                           type="password"
                           name="password"
                           required
                           onChange={handleInputChange}/>
                    <label>Powtórz hasło</label>
                    <input value={passwordCheck}
                           type="password"
                           name="passwordCheck"
                           required
                           onChange={handleInputChange}/>
                </form>
                {ErrorMessage()}
                <div className="login__buttons">
                    <HashLink to="/login">
                        <Button text={`Zaloguj się`}/>
                    </HashLink>
                    <HashLink onClick={(ev) => {ValidateRegisterData(ev); handleSignUp(ev)}}>
                        <Button text={`Załóż konto`}/>
                    </HashLink>
                </div>
            </div>
        </div>
    )
}