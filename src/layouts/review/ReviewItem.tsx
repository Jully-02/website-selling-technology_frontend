import './ReviewItem.css';
import React from 'react';

interface ReviewItemProps {
    imgSrc?: string,
    time?: string,
    name?: string,
    desc?: string
}

const ReviewItem: React.FC<ReviewItemProps> = ({imgSrc, time, name, desc}) => {
    return (
        <div className='review-item'>
            <div className="avatar">
                <img src={imgSrc} alt="" />
            </div>
            <div className="info">
                <div className="info__rate">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="info__time">
                    <p>{time}</p>
                </div>
                <div className="info__name">
                    <h3>{name}</h3>
                </div>
                <div className="info__desc">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;