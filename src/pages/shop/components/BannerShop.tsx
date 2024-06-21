import React, { useEffect, useState } from 'react';
import ElementBanner from '../../../layouts/element-banner/ElementBanner';
import { Banner } from '../../../models/banner';
import { getBannerById } from '../../../api/banner.api';

const BannerShop: React.FC = () => {
    const [banner, setBanner] = useState<Banner>({ id: 0, name: '', model_code: '', promotion_title: '', discount: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const banner = await getBannerById(12);
                setBanner(banner);
            } catch (err) {
                setError('Failed to fetch banner')
            } finally {
                setLoading(false);
            }
        };

        fetchBanner();
    }, []);

    return (
        <div className="product__heading">
            <div className="banner-product">
                <ElementBanner width={'1116px'} height={'250px'} banner={banner} leftInfo={'5%'}/>
            </div>
        </div>
    )
}

export default BannerShop;