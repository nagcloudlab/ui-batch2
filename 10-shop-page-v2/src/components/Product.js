import React, { useState } from 'react';
import Review from './Review';
import { ReviewForm } from './ReviewForm';

export function Product(props) {

    const { product, onBuy } = props;
    const [currentTab, setCurrentTab] = useState(1);
    const [reviews, setReviews] = useState([
        {
            stars: 5,
            body: "I love this product",
            author: "who-1"
        },
        {
            stars: 1,
            body: "I hate this product",
            author: "who-2"
        }
    ]);

    const handleTabChange = (e, tabIndex) => {
        e.preventDefault();
        setCurrentTab(tabIndex);
    }

    const handleNewReview = (review) => {
        let newReviews = [review, ...reviews];
        setReviews(newReviews);
    }

    const renderReviews = () => {
        return reviews.map((r, idx) => (
            <div key={idx} className='m-3 card card-body'>
                <Review review={r} />
            </div>
        ));
    }
    const renderTabPanel = (product) => {
        let panel;
        switch (currentTab) {
            case 1: panel = <div>{product.description}</div>; break;
            case 2: panel = <div>Not Yet</div>; break;
            case 3: panel = (
                <>
                    <ReviewForm onNewReview={handleNewReview} />
                    <div>{renderReviews()}</div>
                </>
            ); break;
            default: panel = null;
        }
        return panel;
    }

    const handleBuy = e => {
        if (onBuy) {
            onBuy(product);
        }
    }

    const renderProduct = (product) => {
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-8">
                        <div>{product.name}</div>
                        <div>&#8377;{product.price}</div>
                        <button onClick={handleBuy} className="btn btn-primary">Add to cart</button>
                        <ul className="mt-3 nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => handleTabChange(e, 1)}
                                    className={'nav-link ' + (currentTab === 1 ? 'active' : '')}
                                    href="/">
                                    Description
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={e => handleTabChange(e, 2)}
                                    className={'nav-link ' + (currentTab === 2 ? 'active' : '')}
                                    href="/">Spec..</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => handleTabChange(e, 3)}
                                    className={'nav-link ' + (currentTab === 3 ? 'active' : '')}
                                    href="/">Reviews</a>
                            </li>
                        </ul>
                        {renderTabPanel(product)}
                    </div>
                </div>
            </div>
        );
    }

    return renderProduct(product);

}