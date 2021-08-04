import {NavBar} from "./NavBar";
import {DecoratedHeader} from "./DecoratedHeader";
import {Button} from "./Button";

export const Login = () => {
    return (
        <div className="login__page">
            <header className="login__header">
                <NavBar/>
            </header>
            <div className="login__container">
                <DecoratedHeader text={`Zaloguj się`}/>
                <form className="login__form">
                    <label>Email</label>
                    <input/>
                    <label>Hasło</label>
                    <input/>
                </form>
                <div className="login__buttons">
                    <Button text={`Załóż konto`}/>
                    <Button text={`Zaloguj się`}/>
                </div>
            </div>
        </div>
    )
}