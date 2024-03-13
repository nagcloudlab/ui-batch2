import { useState, useRef } from "react";

export function ReviewForm(props) {
    const { onNewReview } = props;
    const [isOpened, setIsOpened] = useState(false);

    const authorRef = useRef();
    const starsRef = useRef();
    const bodyRef = useRef();


    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');

        const review = {
            author: authorRef.current.value,
            stars: starsRef.current.value,
            body: bodyRef.current.value,
        }

        if (onNewReview) {
            onNewReview(review);
        }

        setIsOpened(false);
    }

    const renderReviewForm = () => {
        if (!isOpened) {
            return (
                <button className="mt-2 btn btn-info"
                    onClick={e => setIsOpened(true)}>
                    <i className="fa fa-plus"></i>
                </button>
            );
        }
        else
            return (
                <div className="mt-2 card card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" ref={authorRef} />
                        </div>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" ref={starsRef}>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" ref={bodyRef} />
                        </div>
                        <div className="mt-1">
                            <button className="btn btn-secondary" type="button"
                                onClick={e => setIsOpened(false)}>cancel</button>
                            <button className="btn btn-primary">submit</button>
                        </div>
                    </form>
                </div>
            );
    }
    return (
        <div>
            {renderReviewForm()}
        </div>
    )
}