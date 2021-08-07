export const BoxParagraph = ({data, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>
    } else

    return (
        <ul className="paragraph">
            {data[0].map(function (line){
                console.log(line.id);
                console.log(line.Name);
                return <li key={line.id}>
                    <div className="paragraph__description">
                        <p>
                            {line.Name}
                        </p>
                        <span>
                            {line.Description}
                        </span>
                    </div>
                    <div className="paragraph__example">
                        {line.Example}
                    </div>
                </li>
            })}
        </ul>
    )
}