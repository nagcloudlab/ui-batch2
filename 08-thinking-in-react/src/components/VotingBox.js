
import React, { useState } from 'react';
import VotingItem from './VotingItem';
import VotingTable from './VotingTable';

import styles from './VotingBox.module.css';

/**
 * 
 * @author badri
 * 
 */
function VotingBox(props) {
    console.log("VotingBox rendered")
    const [votingLines, setVotingLines] = useState([
        { item: "Foo", upvotes: 10, downvotes: 2 },
        { item: "Bar", upvotes: 5, downvotes: 3 },
        { item: "baz", upvotes: 7, downvotes: 1 },
    ])
    const handleVote = (vote) => {
        let { item, type } = vote;
        let newVotingLines = votingLines.map(line => {
            if (line.item === item) {
                if (type === "up") {
                    line.upvotes++;
                } else {
                    line.downvotes++;
                }
            }
            return line;
        })
        setVotingLines(newVotingLines); // trigger re-render
    }

    return (
        <div className="card">
            <div className="card-header">
                Voting Box
            </div>
            <div className={`card-body ${styles.bg}`}>
                <div className="d-flex flex-wrap">
                    {votingLines.map((line, index) => (
                        <VotingItem
                            key={index}
                            item={line.item}
                            onVote={handleVote}
                        />
                    ))}
                </div>
                <hr />
                <VotingTable votingLines={votingLines} />
            </div>
        </div>
    )
}

export default VotingBox;