export const Button = ({text, paginate}) => {

    if (typeof paginate !== "function") {
        return <button className="action--button">{text}</button>
    }

    return (
        <button onClick={() => paginate(text)} className="action--button">{text}</button>
    )
}