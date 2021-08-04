import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

export const HomeAboutUs = () => {
    return (
        <div className="about__us_container">
            <div className="about__us__description">
                <h2>O nas</h2>
                <img className="about__us__decoration" src={Decoration} alt="decoration" />
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