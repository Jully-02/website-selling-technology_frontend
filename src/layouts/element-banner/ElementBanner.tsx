import './ElementBanner.css';
import React from 'react';
import { Banner } from '../../models/banner';

interface ElementBannerProps {
    banner?: Banner;
    width?: string;
    height?: string;
    borderRadius?: string;
    leftInfo?: string;
    fontSizeTitle?: string;
    lineHeighTitle?: string;
    lineHeighSub?: string;
    widthInfo?: string;
}

const ElementBanner: React.FC<ElementBannerProps> = ({ width, height, banner, leftInfo = '9%', borderRadius = '10px', fontSizeTitle = '30px', lineHeighTitle, lineHeighSub, widthInfo}) => {
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
                    src={banner?.thumbnail} alt="" 
                    style={{
                        width: `${width}`,
                        height: `${height}`,
                        borderRadius: `${borderRadius}`
                    }}
                />
            </div>
            <div className="element__info"
                style={{
                    left: `${leftInfo}`,
                    width: `${widthInfo}`
                }}
            >
                <div className="element__heading">
                    <h3 className="title" style={{ fontSize: `${fontSizeTitle}`, lineHeight: `${lineHeighTitle}`}}>{banner?.name}</h3>
                    <p className="sub" style={{ lineHeight: `${lineHeighSub}`}}>{banner?.model_code}</p>
                </div>

                <div className="element__price">
                    <p className="sub">{banner?.promotion_title}</p>
                    <h1 className="text-price">{banner?.discount}</h1>
                </div>
            </div>
        </div>
    )
}

export default ElementBanner;