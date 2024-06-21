import React, { useEffect, useState } from 'react';
import { Category } from '../../../models/category';
import { getAllCategories } from '../../../api/category.api';

interface CategoryListProps {
    checkedCategories: number[];
    onCheckedCategoriesChange: (newCheckedCategories: number[]) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ checkedCategories, onCheckedCategoriesChange }) => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');


    const handleCheckboxChange = (categoryId: number) => {
        const isChecked = checkedCategories.includes(categoryId);
        const newCheckedCategories = isChecked
           ? checkedCategories.filter(id => id !== categoryId)
           : [...checkedCategories, categoryId];

        onCheckedCategoriesChange(newCheckedCategories);
    }
    
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const categories = await getAllCategories();
                setCategories(categories);
            } catch (err) {
                setError ('Failed to fetch categories')
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [])
    

    return (
        <ul className="category__content">
            {
                categories.map(category => (
                    <li className="category-item" key={category.id}>
                        <input type="checkbox" 
                            checked={checkedCategories.includes(category.id)} 
                            onChange={() => handleCheckboxChange(category.id)}
                        />
                        <span className='title'>{category.name}</span>
                        <span className="quantity">({category.total_products})</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default CategoryList;