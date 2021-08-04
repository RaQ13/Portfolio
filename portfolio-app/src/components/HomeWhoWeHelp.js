import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";

export const HomeWhoWeHelp = () => {
    return (
        <div className="who__we__help__container">
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
        </div>
    )
}