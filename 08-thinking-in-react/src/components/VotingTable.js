function VotingTable(props) {
    console.log("VoteTable rendered")
    const { votingLines } = props;
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Upvotes</th>
                    <th>Downvotes</th>
                </tr>
            </thead>
            <tbody>
                {votingLines.map((line, index) => {
                    const className = line.upvotes > line.downvotes ? "table-success" : "table-danger";
                    return (
                        <tr key={index} className={className}>
                            <td>{line.item}</td>
                            <td>{line.upvotes}</td>
                            <td>{line.downvotes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default VotingTable;