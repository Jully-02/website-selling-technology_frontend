import './AddReview.css';

function AddReview () {
    return (
        <form className='add-review'>
            <p className='add-review__attention'>Your email address will not be published. Required fields are marked *</p>
            <div className="add-review__rate">
                <div className="rate-wrapper">
                    <p className='rate-title'>Your Rating *</p>
                    <div className="rate-stars">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                </div>
                <textarea className="add-review__desc" placeholder="Your Review *" rows={5} cols={50}></textarea>
                <input className="add-review__name" type="text" placeholder="Your Name *"/>
                <input className="add-review__email" type="email" placeholder="Your Email *"/>
            </div>
            <div className="add-review__save-info">
                <input type="checkbox" id="save-info" className="save-info-checkbox"/>
                <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button className="add-review__submit">
                <p>Submit</p>
                <i className="fa-regular fa-angle-right"></i>
            </button>
        </form>
    )
}

export default AddReview;