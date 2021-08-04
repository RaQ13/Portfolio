export const Button = (props) => {
    const brokenText = props.text.split("_");
    return (
        <button className="action--button">{brokenText[0]}<br></br>{brokenText[1]}</button>
    )
}