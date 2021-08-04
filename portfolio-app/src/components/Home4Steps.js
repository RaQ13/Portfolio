import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";
import {Link} from "react-router-dom";

export const Home4Steps = () => {
    return (
        <>
            <div className="four__steps__container">
                <DecoratedHeader text={`Wystarczą 4 proste kroki`}/>
                <div className="four__steps__columns">
                    <div className="four__steps__column">
                        <img className="four--steps--icon" src={Icon1} alt="icon1" />
                        <span>Wybierz rzeczy</span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="four__steps__column">
                        <img className="four--steps--icon" src={Icon2} alt="icon2" />
                        <span>Spakuj je</span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="four__steps__column">
                        <img className="four--steps--icon" src={Icon3} alt="icon3" />
                        <span>Zdecyduj komu <br></br> chcesz pomóc</span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="four__steps__column">
                        <img className="four--steps--icon" src={Icon4} alt="icon4" />
                        <span>Zamów kuriera</span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <Link to="/login">
                    <Button text={`Oddaj_rzeczy`}></Button>
                </Link>
            </div>
        </>
    )
}