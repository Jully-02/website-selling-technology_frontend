import React, { useEffect, useState } from "react";
import { Brand } from "../../../models/brand";
import { getAllBrands } from "../../../api/brand.api";

interface BrandListProps {
    checkedBrands: number[];
    onCheckedBrandsChange: (newCheckedBrands: number[]) => void;
}

const BrandList: React.FC<BrandListProps> = ({checkedBrands, onCheckedBrandsChange}) => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const handleCheckboxChange = (brandId: number) => {
        const isChecked = checkedBrands.includes(brandId);
        const newCheckedBrands = isChecked
            ? checkedBrands.filter(id => id !== brandId)
            : [...checkedBrands, brandId];

        onCheckedBrandsChange(newCheckedBrands);
    }

    useEffect(() => {
        const fetchBrand = async () => {
            try {
                const brands = await getAllBrands();
                setBrands(brands);
            } catch (err) {
                setError ('Failed to fetch brands')
            } finally {
                setLoading(false);
            }
        };

        fetchBrand();
    }, []);

    return (
        <ul className="brand__content">
            {
                brands.map(brand => (
                    <li className="brand-item"  key={brand.id}>
                        <input type="checkbox" 
                            checked={checkedBrands.includes(brand.id)}
                            onChange={() => handleCheckboxChange(brand.id)}
                        />
                        <span className='title'>{brand.name}</span>
                        <span className="quantity">({brand.total_products})</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default BrandList;