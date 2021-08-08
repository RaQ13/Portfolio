export const Button = ({text, paginate}) => {
    return (
        <button onClick={() => paginate(text)} className="action--button">{text}</button>
    )
}