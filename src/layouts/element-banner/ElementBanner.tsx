import './ElementBanner.css';
import React from 'react';

interface ElementBannerProps {
    width?: string;
    height?: string;
    imgSrc?: string;
}

const ElementBanner: React.FC<ElementBannerProps> = ({ width, height, imgSrc }) => {
    return (
        <div className='element-banner'>
            <div 
                className="element__banner"
                style={{
                    width: `${width}`,
                    height: `${height}`
                }}
            >
                <img 
                    src={imgSrc} alt="" 
                    style={{
                        width: `${width}`,
                        height: `${height}`
                    }}
                />
            </div>
            <div className="element__info">
                <div className="element__heading">
                    <h3 className="title">X-77 Console</h3>
                    <p className="sub">MF814HN/A 13"</p>
                </div>

                <div className="element__price">
                    <p className="sub">WEKKEND SALE</p>
                    <h1 className="text-price">20%</h1>
                </div>
            </div>
        </div>
    )
}

export default ElementBanner;