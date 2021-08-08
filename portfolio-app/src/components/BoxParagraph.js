export const BoxParagraph = ({data, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="paragraph">
            {data.map(function (line){
                return <li key={line.id}>
                    <div className="paragraph__description">
                        <p>
                            {line.title}
                        </p>
                        <span>
                            {line.body}
                        </span>
                    </div>
                    <div className="paragraph__example">
                        {line.userId}
                    </div>
                </li>
            })}
        </ul>
    )
}