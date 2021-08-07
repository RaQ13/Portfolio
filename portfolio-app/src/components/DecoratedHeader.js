import Decoration from "../assets/Decoration.svg";

export const DecoratedHeader = ({text}) => {
    return (
        <>
            <h2>{text}</h2>
            <img className="decoration" src={Decoration} alt="decoration" />
        </>
    )
}