import {Button} from "./Button";

export const BoxPagination = ({linesperPage, totalLines, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalLines / linesperPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Button text={number} paginate={paginate}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}