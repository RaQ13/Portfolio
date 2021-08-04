import Decoration from "../assets/Decoration.svg";

export const DecoratedHeader = (props) => {
    return (
        <>
            <h2>{props.text}</h2>
            <img className="decoration" src={Decoration} alt="decoration" />
        </>
    )
}