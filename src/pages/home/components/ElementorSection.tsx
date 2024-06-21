import './ElementorSection.css';
import BannerConsole from '../../../images/public/BannerGame.png';
import BannerSmartPhone from '../../../images/public/BannerSmartPhone.png';
import ElementBanner from '../../../layouts/element-banner/ElementBanner';
import { useEffect, useState } from 'react';
import { getBannerById } from '../../../api/banner.api';
import { Banner } from '../../../models/banner';

const ElementorSection: React.FC = () => {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannerIds = [4, 5];
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
        <div className='elementor-section'>
            {
                banners.map(banner => (
                    <ElementBanner width={'689px'} height={'250px'} banner={banner} />
                ))
            }
        </div>
    )
}

export default ElementorSection;