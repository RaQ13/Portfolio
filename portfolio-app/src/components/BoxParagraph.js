export const BoxParagraph = (props) => {
    return (
        <div className="paragraph">
            <div className="paragraph__description">
                <p>{props.organizationName}</p>
                <span>
                    {props.organizationDescription}
                </span>
            </div>
            <p className="paragraph__example">
                {props.organizationExamples}
            </p>
        </div>
    )
}