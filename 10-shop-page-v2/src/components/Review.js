
const renderStars = (stars) => {
    let starsArray = [];
    for (let i = 0; i < stars; i++) {
        starsArray.push(<i key={i} className="fa fa-star" style={{ color: "tomato" }}></i>);
    }
    return starsArray;
}

export default function Review(props) {
    const { review: r } = props;
    return (
        <>
            <strong>{r.author}</strong>
            <div>stars: {renderStars(r.stars)}</div>
            <div>{r.body}</div>
        </>
    )
}