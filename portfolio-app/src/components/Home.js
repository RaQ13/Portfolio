import {Header} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";

export const Home = () => {
    return (
        <>
            <div className="container header__container">
                <Header></Header>
                <HomeThreeColumns></HomeThreeColumns>
            </div>
        </>
    )
}