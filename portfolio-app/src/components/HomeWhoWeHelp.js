import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";
import React, { useState, useEffect } from "react";
import {BoxParagraph} from "./BoxParagraph";

export const HomeWhoWeHelp = () => {

    const API = "http://localhost:3000";

    const [boxData, setBoxData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentBox, setCurrentBox] = useState(1);
    const [linesPerPage, setLinesPerPage] = useState(3);

    useEffect(() => {
        const fetchBoxData = async () => {
            setLoading(true);
            fetch(`${API}/data`).then(res => res.json()).then(data => setBoxData(data))
                .catch(error => {
                    console.log(error);
                })
            setLoading(false);
        }
        fetchBoxData();
    },[]);

    console.log(boxData);

    return (
        <div className="who__we__help__container" id="whoWeHelp">
            <DecoratedHeader text={`Komu pomagamy?`}/>
            <div className="who__we__help__buttons">
                <Button text={`Fundacjom`} />
                <Button text={`Organizacjom pozarządowym`} />
                <Button text={`Lokalnym zbiórkom`} />
            </div>
            <p>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                komu pomagają i czego potrzebują.
            </p>
            <div className="who__we__help__box">
                <div className={`box__paragraph `}>
                    <BoxParagraph data={boxData} loading={loading} />
                </div>
            </div>
            <div className="box__buttons">
                <Button text={`1`}/>
                <Button text={`2`}/>
                <Button text={`3`}/>
            </div>
        </div>
    )
}