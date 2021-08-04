import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";
import { HashLink } from 'react-router-hash-link';
import {NavBar} from "./NavBar";


export const Header = () => {
    return (
        <header>
            <NavBar />
            <div className="header__start">
                <div className="header__start__container">
                    <h2>Zacznij pomagać!</h2>
                    <DecoratedHeader text={`oddaj niechciane rzeczy w zaufane ręce`}/>
                    <div className="header__start__buttons">
                        <HashLink to="/login">
                            <Button text={`Oddaj rzeczy`} />
                        </HashLink>
                        <HashLink to="/login">
                            <Button text={`Zorganizuj zbiórkę`} />
                        </HashLink>
                    </div>
                </div>
            </div>
        </header>
    )
}