import {Header} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {Home4Steps} from "./Home4Steps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp";
import {Login} from "./Login";

export const Home = () => {
    return (
        <>
            <div className="container header__container">
                <Header />
                <HomeThreeColumns />
                <Home4Steps />
                <HomeAboutUs />
                <HomeWhoWeHelp />
            </div>
        </>
    )
}