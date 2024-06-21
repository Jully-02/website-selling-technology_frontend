import React, { useEffect, useState } from 'react';
import Carousel from '../../../layouts/carousel/Carousel';
import { Banner } from '../../../models/banner';
import { getBannerById } from '../../../api/banner.api';

interface CarouselTopProps {
    height?: string;
}

const CarouselTop: React.FC <CarouselTopProps> = ( {height} ) => {

    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannerIds = [1, 2, 3];
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
        <Carousel id="carouselTop" banners={banners} width={'100%'} height={height} leftInfo='13.7%' borderRadius='none' fontSizeTitle='46px' lineHeighTitle='52px' lineHeighSub='30px' widthInfo='300px'/>
    )
}

export default CarouselTop;