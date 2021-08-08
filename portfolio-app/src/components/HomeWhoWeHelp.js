import {Button} from "./Button";
import {DecoratedHeader} from "./DecoratedHeader";
import React, { useState, useEffect } from "react";
import {BoxParagraph} from "./BoxParagraph";
import axios from "axios";
import {BoxPagination} from "./BoxPagination";

export const HomeWhoWeHelp = () => {

    const API = "http://localhost:3000";

    const [boxData, setBoxData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [linesPerPage, setLinesPerPage] = useState(3);

    useEffect(() => {
        const fetchBoxData = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setBoxData(res.data);
            setLoading(false)
        }
        fetchBoxData();
    },[]);

    console.log(boxData);
    const indexOfLastLine = currentPage * linesPerPage;
    const indexOfFirstLine = indexOfLastLine - linesPerPage;
    const currentLines = boxData.slice(indexOfFirstLine, indexOfLastLine);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


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
                    <BoxParagraph data={currentLines} loading={loading} />
                </div>
            </div>
            <div className="box__buttons">
                <BoxPagination linesperPage={linesPerPage} totalLines={boxData.length} paginate={paginate}/>
            </div>
        </div>
    )
}