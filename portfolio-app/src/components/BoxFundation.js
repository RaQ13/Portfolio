import {BoxParagraph} from "./BoxParagraph";

export const Box = (props) => {
    return(
        <>
            <BoxParagraph organizationName={props.organization1Name}
                          organizationDescription={props.organization1Description}
                          organizationExamples={props.organization1Examples}/>
            <BoxParagraph organizationName={props.organization2Name}
                          organizationDescription={props.organization2Description}
                          organizationExamples={props.organization2Examples}/>
            <BoxParagraph organizationName={props.organization3Name}
                          organizationDescription={props.organization3Description}
                          organizationExamples={props.organization3Examples}/>
        </>
    )
}