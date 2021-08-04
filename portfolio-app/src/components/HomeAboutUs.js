import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";
import {DecoratedHeader} from "./DecoratedHeader";

export const HomeAboutUs = () => {
    return (
        <div className="about__us_container" id="aboutUs">
            <div className="about__us__description">
                <DecoratedHeader text={`O nas`}/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img className="about__us__signature" src={Signature} alt="signature" />
            </div>
            <div className="about__us__image">
                <img src={People} alt="people"/>
            </div>
        </div>
    )
}