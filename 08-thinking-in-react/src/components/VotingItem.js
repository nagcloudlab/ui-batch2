
import styles from './VotingItem.module.css';

/**
 * 
 * @author rohit
 * 
 */


function VotingItem(props) {
    console.log("VotingItem rendered")
    const { item = "Unknown", onVote } = props;
    return (
        <div className="m-2 card card-body">
            <div className={`display-6 ${styles.bg}`}>{item}</div>
            <hr />
            <div>
                <button onClick={e => onVote({ item, type: "up" })} className="btn btn-primary">
                    <i className="fa fa-thumbs-up"></i>
                </button>
                <button onClick={e => onVote({ item, type: "down" })} className="btn btn-danger">
                    <i className="fa fa-thumbs-down"></i>
                </button>
            </div>
        </div>
    )

}
export default VotingItem;
