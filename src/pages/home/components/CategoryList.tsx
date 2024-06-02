import Category from '../../../layouts/product-category/Category';
import './CategoryList.css';
import Category1 from '../../../images/public/Category1.png';
import Category2 from '../../../images/public/Category2.png';
import Category3 from '../../../images/public/Category3.png';

function CategoryList () {
    return (
        <div className="category-list">
            <Category imgSrc={Category1}/>
            <Category imgSrc={Category2}/>
            <Category imgSrc={Category3}/>
            <Category imgSrc={Category1}/>
        </div>
    )
}

export default CategoryList;