import {DecoratedHeader} from "./DecoratedHeader";
import {Button} from "./Button";
import {useState, useEffect} from "react";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";


export const HomeContact = () => {

    const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({});

    const FetchForm = (ev) => {
        ev.preventDefault();
        ValidateContactFormData(ev);
        SetUserData();
        FetchFormData();
    }

    const ValidateContactFormData = () => {
        const userNameCheck = userName.split(" ");
        const emailCheck = userEmail.indexOf("@");

        const ValidateAsync = async() => {
            if (userNameCheck.length > 1) {
                setError(true);
            }
            if (emailCheck === -1) {
                setError(true);
            }
            if (userMessage.length < 120) {
                setError(true);
            }
            else setError(false);
        }
        ValidateAsync();
    }

    const SetUserData = () => {
        setUserData({
            name: userName,
            email: userEmail,
            message: userMessage
        })
    }

    const FetchFormData = () => {
            fetch(`${API}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }).then(res => res.json()).then(res => console.log(res))
                .catch(error => {
                    console.log(error);
                })
    }

    const ErrorName = () => {
        if (error === true) {
            return <p className="error--message">Imię jest nieprawidłowe!</p>
        }
    }

    const ErrorEmail = () => {
        if (error === true) {
            return <p className="error--message">Email jest nieprawidłowy!</p>
        }
    }

    const ErrorTextArea = () => {
        if (error === true) {
            return <p className="error--message">Wiadomośc musi mieć conajmniej 120 znaków!</p>
        }
    }

    const inputStyleError = error ? "error" : " ";

    return (
        <div className="footer" id="contact">
            <div className="footer__form__box">
                <DecoratedHeader text="Skontaktuj się z nami"/>
                <form className="footer__form"
                      onSubmit={(ev) => FetchForm(ev)}>
                    <div className="footer__form__inputs">
                        <div className="input__name">
                            <label >Wpisz swoje imię</label>
                            <input value={userName}
                                   className={`${inputStyleError}`}
                                   onChange={(ev) => setUserName(ev.target.value)}
                                   placeholder="Krzysztof"/>
                            {ErrorName()}
                        </div>
                        <div className="input__email">
                            <label>Wpisz swój email</label>
                            <input value={userEmail}
                                   className={`${inputStyleError}`}
                                   onChange={(ev) => setUserEmail(ev.target.value)}
                                   placeholder="abc@xyz.pl" type="email"/>
                            {ErrorEmail()}
                        </div>
                    </div>
                    <div className="footer__form__message">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea value={userMessage}
                                  className={`${inputStyleError}`}
                                  onChange={(ev) => setUserMessage(ev.target.value)}
                                  rows="4"
                                  placeholder="Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        {ErrorTextArea()}
                    </div>
                    <div className="footer__button__container">
                        <Button text="Wyślij" submit={ValidateContactFormData}/>
                    </div>
                </form>
            </div>
            <div className="footer__media">
                <img src={Facebook} alt="facebook"/>
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
    )
}