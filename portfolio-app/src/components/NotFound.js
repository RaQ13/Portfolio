import {DecoratedHeader} from "./DecoratedHeader";
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <section className="not__found">
            <DecoratedHeader text={`Ups! Tutaj nic nie ma`}/>
            <Link to="/">
                Wróć na stronę główną
            </Link>
        </section>
    )
}