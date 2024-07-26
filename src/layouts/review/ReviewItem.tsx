import { formatDate, formatDateTable } from '../../api/order.api';
import { Feedback } from '../../models/feedback';
import './ReviewItem.css';
import React from 'react';

interface ReviewItemProps {
    imgSrc?: string,
    feedback: Feedback
}

const ReviewItem: React.FC<ReviewItemProps> = ({imgSrc, feedback}) => {
    console.log(feedback)
    return (
        <div className='review-item'>
            <div className="avatar">
                <img src={imgSrc} alt="" />
            </div>
            <div className="info">
                <div className="info__rate">
                    {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <i
                                    key={index}
                                    className={index <= feedback.rate ? "fa-solid fa-star" : "fa-regular fa-star"}
                                ></i>
                            );
                        })}
                </div>
                <div className="info__time">
                    <p>{formatDate(feedback.created_at)}</p>
                </div>
                <div className="info__name">
                    <h3>{feedback.name}</h3>
                </div>
                <div className="info__desc">
                    <p>{feedback.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;