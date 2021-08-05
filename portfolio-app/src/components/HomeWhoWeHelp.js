import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";
import {Box} from "./BoxFundation";
import React, { useState } from "react";

export const HomeWhoWeHelp = () => {

    const [organization, setOrganization] = useState({
        organization1Name: `Organizacja "Lorem Ipsum1"`,
        organization1Description: `Quis varius quam quisque id diam vel quam elementum pulvinar`,
        organization1Example: `Egestas, sed, tempus`
    })

    const [fundation, SetFundation] = useState({
        fundation1Name: `Fundacja "Dbam o Zdrowie"`,
        fundation1Description: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        fundation1Example: `ubrania, jedzenie, sprzęd AGD, meble, zabawki`,
        fundation2Name: `Fundacja "Dla dzieci"`,
        fundation2Description: `Cel i misja: Pomoc dzieciom z ubogich rodzin..`,
        fundation2Example: `ubrania, meble, zabawki`,
        fundation3Name: `Fundacja "Bez domu"`,
        fundation3Description: `Cel i misja: Pomoc dla osób nie posiadajacych zamieszkania..`,
        fundation3Example: `ubrania, jedzenie, ciepłe koce`,
    })

    const ChandleOrganizationBox = (ev) => {
        console.log(ev.target);
        if (ev.target.innerText === "FUNDACJOM") {
            console.log("fun");
        }
        if (ev.target.innerText === "ORGANIZACJOM POZARZĄDOWYM") {
            console.log("org");
        }
        if (ev.target.innerText === "LOKALNYM ZBIÓRKOM") {
            console.log("lok");
        }
    }


    return (
        <div onClick={(ev) => ChandleOrganizationBox(ev)} className="who__we__help__container" id="whoWeHelp">
            <DecoratedHeader text={`Komu pomagamy?`}/>
            <div className="who__we__help__buttons">
                <Button text={`Fundacjom`} />
                <Button text={`Organizacjom_pozarządowym`} />
                <Button text={`Lokalnym_zbiórkom`} />
            </div>
            <p>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                komu pomagają i czego potrzebują.
            </p>
            <div className="who__we__help__box">
                <div className="box__paragraph">
                    <Box  organization1Name={fundation.fundation1Name}
                          organization1Description={fundation.fundation1Description}
                          organization1Examples={fundation.fundation1Example}
                          organization2Name={fundation.fundation2Name}
                          organization2Description={fundation.fundation2Description}
                          organization2Examples={fundation.fundation2Example}
                          organization3Name={fundation.fundation3Name}
                          organization3Description={fundation.fundation3Description}
                          organization3Examples={fundation.fundation3Example}/>
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