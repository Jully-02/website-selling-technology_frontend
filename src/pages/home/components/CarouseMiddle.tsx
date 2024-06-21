import React, { useEffect, useState } from 'react';
import Carousel from '../../../layouts/carousel/Carousel';
import { Banner } from '../../../models/banner';
import { getBannerById } from '../../../api/banner.api';

interface CarouselMiddleProps {
    height?: string;
}

const CarouselMiddle: React.FC <CarouselMiddleProps> = ( {height} ) => {

    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannerIds = [9, 10, 11];
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
        <Carousel id="carouselMiddle" banners={banners} width={'100%'} height={height} leftInfo='13.7%' borderRadius='none' fontSizeTitle='46px' lineHeighTitle='52px' lineHeighSub='30px' widthInfo='300px'carouselProducts='none'/>
    )
}

export default CarouselMiddle;