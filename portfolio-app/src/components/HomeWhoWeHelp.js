import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";
import {Box} from "./BoxFundation";
import React, { useState } from "react";

export const HomeWhoWeHelp = () => {

    const [organization, setOrganization] = useState({
        Name1: `Organizacja "Lorem Ipsum1"`,
        Description1: `Quis varius quam quisque id diam vel quam elementum pulvinar`,
        Example1: `Egestas, sed, tempus`,
        Name2: `Organizacja "Lorem Ipsum2"`,
        Description2: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        Example2: `Ut, aliquam, purus, sit, amet`,
        Name3: `Organizacja "Lorem Ipsum3"`,
        Description3: `Scelerisque in dictum non consectetur a erat nam..`,
        Example3: `Mi, quis, hendrerit, dolor`
    })

    const [fundation, SetFundation] = useState({
        Name1: `Fundacja "Dbam o Zdrowie"`,
        Description1: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        Example1: `ubrania, jedzenie, sprzęd AGD, meble, zabawki`,
        Name2: `Fundacja "Dla dzieci"`,
        Description2: `Cel i misja: Pomoc dzieciom z ubogich rodzin..`,
        Example2: `ubrania, meble, zabawki`,
        Name3: `Fundacja "Bez domu"`,
        Description3: `Cel i misja: Pomoc dla osób nie posiadajacych zamieszkania..`,
        Example3: `ubrania, jedzenie, ciepłe koce`,
    })

    const [collection, setCollection] = useState({
        Name1: `Zbiórka “Lorem Ipsum 1”`,
        Description1: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
        Example1: `Egestas, tempus`,
        Name2: `Zbiórka “Lorem Ipsum 2”`,
        Description2: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        Example2: `Ut, aliquam, sit, amet`,
        Name3: `Zbiórka “Lorem Ipsum 3”`,
        Description3: `Scelerisque in dictum non consectetur a erat nam.`,
        Example3: `Mi, quis, dolor`,
    })

    const [activeBox, setActiveBox] = useState(false);
    const hidden = activeBox ? "" : "hidden";

    const ChandleOrganizationBox = (ev) => {

        if (ev.target.innerText === "FUNDACJOM") {
            setActiveBox(fundation);
        }
        if (ev.target.innerText === "ORGANIZACJOM POZARZĄDOWYM") {
            setActiveBox(organization);
        }
        if (ev.target.innerText === "LOKALNYM ZBIÓRKOM") {
            setActiveBox(collection);
        }
    }


    return (
        <div onClick={(ev) => ChandleOrganizationBox(ev)} className="who__we__help__container" id="whoWeHelp">
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
                <div className={`box__paragraph ${hidden}`}>
                    <Box  organization1Name={activeBox.Name1}
                          organization1Description={activeBox.Description1}
                          organization1Examples={activeBox.Example1}
                          organization2Name={activeBox.Name2}
                          organization2Description={activeBox.Description2}
                          organization2Examples={activeBox.Example2}
                          organization3Name={activeBox.Name3}
                          organization3Description={activeBox.Description3}
                          organization3Examples={activeBox.Example3}/>
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