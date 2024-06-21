import ReviewItem from '../../../layouts/review/ReviewItem';
import './WooTab.css';
import User1 from '../../../images/public/user-1.jpg';
import User2 from '../../../images/public/user-2.jpg';
import AddReview from '../../../layouts/review/AddReview';
import React, { useState } from 'react';

const WooTab: React.FC = () => {

    const [activeTab, setActiveTab] = useState('description'); // State to track active tab

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className='woo-tabs'>
            <div className="woo-tab__heading">
            <div onClick={() => handleTabClick('description')} className={`description ${activeTab === 'description' ? 'active' : ''}`}>
                    <h3 className="title">Description</h3>
                </div>
                <div onClick={() => handleTabClick('add-info')} className={`add-info ${activeTab === 'add-info' ? 'active' : ''}`}>
                    <h3 className="title">Additional Information</h3>
                </div>
                <div onClick={() => handleTabClick('spec')} className={`spec ${activeTab === 'spec' ? 'active' : ''}`}>
                    <h3 className="title">Specification</h3>
                </div>
                <div onClick={() => handleTabClick('review')} className={`review ${activeTab === 'review' ? 'active' : ''}`}>
                    <h3 className="title">Reviews <span className='quantity'>(10)</span></h3>
                </div>
            </div>
            <div className="woo-tab__content">
                {
                    activeTab === 'description' && (
                        <div className="woo-tab__description">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temp incid idunt ut labore et dolore magna aliqua. nisi ut aliquip ex ea commodo consat. Duis aute irure dolor in reprehenderit n volup tate velit esse cillum dolore euy elit ale ruin irure dolor in. Adipisci accusata interpretaris nec ea. In etiam neglegentur has, his iudico vidisse feugiat id. An nibh homero pri, mutat feugait salutandi id me.</p>
                        </div>
                    )
                }
                {
                    activeTab === 'add-info' && (
                        <div className="woo-tab__add-info">
                            <span>Model: <p>128GB, 256GB, 64GB</p></span>
                            <span>Color: <p>Black, Grey, Orange</p></span>
                        </div>
                    )
                }
                {
                    activeTab === 'spec' && (
                        <div className="woo-tab__spec">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Weight</td>
                                        <td>7.25kg</td>
                                    </tr>

                                    <tr>
                                        <td>Dimensions</td>
                                        <td>90 x 60 x 90 cm</td>
                                    </tr>

                                    <tr>
                                        <td>Size</td>
                                        <td>One Size Fits All</td>
                                    </tr>

                                    <tr>
                                        <td>Guarantee</td>
                                        <td>5 years</td>
                                    </tr>

                                    <tr>
                                        <td>Brand</td>
                                        <td>Gizmos</td>
                                    </tr>

                                    <tr>
                                        <td>Item Height</td>
                                        <td>18 Millimeters</td>
                                    </tr>

                                    <tr>
                                        <td>Item Width</td>
                                        <td>31.4 Centimeters</td>
                                    </tr>

                                    <tr>
                                        <td>Screen Size</td>
                                        <td>13 Inches</td>
                                    </tr>

                                    <tr>
                                        <td>Screen Size</td>
                                        <td>13 Inches</td>
                                    </tr>

                                    <tr>
                                        <td>Item Weight</td>
                                        <td>1.6kg</td>
                                    </tr>

                                    <tr>
                                        <td>Item Model Number</td>
                                        <td>MF841HN/A</td>
                                    </tr>

                                    <tr>
                                        <td>Processor Brand</td>
                                        <td>Intel</td>
                                    </tr>

                                    <tr>
                                        <td>Processor Type</td>
                                        <td>Core i5</td>
                                    </tr>

                                    <tr>
                                        <td>Processor Speed</td>
                                        <td>2.9 GHz</td>
                                    </tr>

                                    <tr>
                                        <td>RAM Size</td>
                                        <td>8 GB</td>
                                    </tr>

                                    <tr>
                                        <td>Hard Drive Size</td>
                                        <td>512 GB</td>
                                    </tr>

                                    <tr>
                                        <td>Hard Disk Technology</td>
                                        <td>Solid State Drive</td>
                                    </tr>

                                    <tr>
                                        <td>Graphics Coprocessor</td>
                                        <td>Intel Integrated Graphics</td>
                                    </tr>

                                    <tr>
                                        <td>Graphic Card Description</td>
                                        <td>Integrated Graphics Card</td>
                                    </tr>

                                    <tr>
                                        <td>Hardware Platform</td>
                                        <td>Mac</td>
                                    </tr>

                                    <tr>
                                        <td>Operating System</td>
                                        <td>Mac OS</td>
                                    </tr>

                                    <tr>
                                        <td>Average Battery Life (in hours)</td>
                                        <td>9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
                {
                    activeTab === 'review' && (
                        <div className="woo-tab__review">
                            <div className="woo-tab__review-cus">
                                <h3 className="title">
                                    2 reviews for SM-2357 Closed-Back Wireless Headphones
                                </h3>
                                <div className="content">
                                    <ReviewItem imgSrc={User1} time={'OCTOBER 5, 2022'} name={'Ellie Holmes'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla pulvinar, lobortis purus eu, interdum urna donec dapibus. Efficitur iaculis suspendisse sapien tempor ultricies. Fusce lacinia augue vitae gravida rhoncus, aenean eget massa ipsum.'} />
                                    <ReviewItem imgSrc={User2} time={'OCTOBER 5, 2022'} name={'Ron Bradley'} desc={'Donec dapibus neque eu ipsum efficitur iaculis. Suspendisse sapien tempor ultricies. Fusce lacinia augue vitae nibh gravida rhoncus.'} />
                                </div>
                            </div>
                            <div className="woo-tab__review-add">
                                <h3 className="title">Add a review</h3>
                                <AddReview />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WooTab;