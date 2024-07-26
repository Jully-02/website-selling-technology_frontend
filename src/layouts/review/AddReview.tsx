import { ChangeEvent, useState } from 'react';
import './AddReview.css';
import { FeedbackDTO } from '../../dtos/feedback.dto';
import { insertFeedback } from '../../api/feedback.api';
import { Feedback } from '../../models/feedback';

interface AddReviewProps {
    productId: number,
    addFeedback: (feedback: Feedback) => void;
}

const AddReview: React.FC<AddReviewProps> = (props) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleRating = (index: number) => {
        setRating(index);
    };

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(event.target.value)
    }

    const handleSubmitReview = (event: React.FormEvent) => {
        event.preventDefault(); 
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        if (userId && token) {
            if (email !== "" && name !== "" && review !== "" && rating !== 0) {
                const feedbackDTO: FeedbackDTO = {
                    user_id: Number(userId),
                    product_id: props.productId,
                    rate: rating,
                    comment: review
                }
                const response = insert(feedbackDTO);
                    setEmail("");
                    setRating(0);
                    setName("");
                    setReview("");
            }
        }
    }

    const insert = async (feedbackDTO: FeedbackDTO) => {
        const response = await insertFeedback(feedbackDTO);
        if (response?.status === 200) {
            props.addFeedback(response.data.data);
        }
        return response;
    }

    return (
        <form className='add-review'>
            <p className='add-review__attention'>Your email address will not be published. Required fields are marked *</p>
            <div className="add-review__rate">
                <div className="rate-wrapper">
                    <p className='rate-title'>Your Rating *</p>
                    <div className="rate-stars">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <i
                                    key={index}
                                    className={index <= rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                                    onClick={() => handleRating(index)}
                                    style={{ cursor: 'pointer' }}
                                ></i>
                            );
                        })}
                    </div>
                </div>
                <textarea className="add-review__desc" placeholder="Your Review *" rows={5} cols={50} value={review} onChange={handleChangeReview}></textarea>
                <input className="add-review__name" type="text" placeholder="Your Name *" value={name} onChange={handleChangeName}/>
                <input className="add-review__email" type="email" placeholder="Your Email *" value={email} onChange={handleChangeEmail}/>
            </div>
            <div className="add-review__save-info">
                <input type="checkbox" id="save-info" className="save-info-checkbox" />
                <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button className="add-review__submit" onClick={handleSubmitReview}>
                <p>Submit</p>
                <i className="fa-regular fa-angle-right"></i>
            </button>
        </form>
    )
}

export default AddReview;