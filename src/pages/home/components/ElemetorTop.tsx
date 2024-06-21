import ElementBanner from '../../../layouts/element-banner/ElementBanner';
import './ElementorTop.css';

import BannerTop1 from '../../../images/public/BannerTop1.png';
import BannerTop2 from '../../../images/public/BannerTop2.png';
import BannerTop3 from '../../../images/public/BannerTop3.png';
import React, { useEffect, useState } from 'react';
import { Banner } from '../../../models/banner';
import { getBannerById } from '../../../api/banner.api';

const ElementorTop: React.FC = () => {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannerIds = [6, 7, 8];
                const fetchedBanners: Banner[] = [];

                for (const id of bannerIds) {
                    const banner = await getBannerById(id);
                    fetchedBanners.push(banner);
                }
                setBanners(fetchedBanners);
            } catch (err) {
                setError('Failed to fetch banners');
            } finally {
                setLoading(false);
            }
        }

        fetchBanners();
    }, []);

    return (
        <div className="elementor-top">
            {
                banners.map(banner => (
                    <ElementBanner width={'452px'} height={'226px'} banner={banner}/>
                ))
            }
            {/* <ElementBanner width={'452px'} height={'226px'} imgSrc={BannerTop1}/>
            <ElementBanner width={'452px'} height={'226px'} imgSrc={BannerTop2}/>
            <ElementBanner width={'452px'} height={'226px'} imgSrc={BannerTop3}/> */}
        </div>
    )
}

export default ElementorTop;