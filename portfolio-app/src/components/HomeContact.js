import {DecoratedHeader} from "./DecoratedHeader";
import {Button} from "./Button";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

export const HomeContact = () => {
    return (
        <div className="footer" id="contact">
            <div className="footer__form__box">
                <DecoratedHeader text="Skontaktuj się z nami"/>
                <form className="footer__form">
                    <div className="footer__form__inputs">
                        <div className="input__name">
                            <label>Wpisz swoje imię</label>
                            <input placeholder="Krzysztof"/>
                        </div>
                        <div className="input__email">
                            <label>Wpisz swój email</label>
                            <input placeholder="abc@xyz.pl" type="email"/>
                        </div>
                    </div>
                    <div className="footer__form__message">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea rows="4" placeholder="Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <Button text="Wyślij"/>
                </form>
            </div>
            <div className="footer__media">
                <img src={Facebook} alt="facebook"/>
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
    )
}