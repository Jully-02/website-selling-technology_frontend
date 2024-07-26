import './ProductUpload.css';
import { AiFillHome } from "react-icons/ai";
import { LuUndo } from "react-icons/lu";
import { LuRedo } from "react-icons/lu";
import { LuBold } from "react-icons/lu";
import { LuItalic } from "react-icons/lu";
import { LuUnderline } from "react-icons/lu";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useRef, useState } from 'react';


import { IoPricetagsOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { GoLock } from "react-icons/go";

const ProductUpload: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [inventory, setInventory] = useState(3);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='product-upload'>
            <div className="heading w-100">
                <div className="heading-left">
                    <h3 className="title">Add a product</h3>
                    <p className="subtitle">Orders placed across your store</p>
                </div>
                <div className="heading-right">
                    <div className="btn-discard">
                        <span>Discard</span>
                    </div>
                    <div className="btn-save-draft">
                        <span>Save draft</span>
                    </div>
                    <div className="btn-publish">
                        <span>Publish product</span>
                    </div>
                </div>
            </div>
            <div className="content w-100">
                <div className="left w-70">
                    <div className="product-title">
                        <h3 className="title">Product title</h3>
                        <div className="input-title">
                            <input type="text" placeholder='Write title here...' />
                        </div>
                    </div>
                    <div className="product-description">
                        <h3 className="title">Product description</h3>
                        <div className="actions">
                            <div className="future">
                                <div className="icon">
                                    <LuUndo />
                                </div>
                                <div className="icon">
                                    <LuRedo />
                                </div>
                            </div>
                            <div className="format-text">
                                <div className="icon">
                                    <LuBold />
                                </div>
                                <div className="icon">
                                    <LuItalic />
                                </div>
                                <div className="icon">
                                    <LuUnderline />
                                </div>
                                <div className="icon">
                                    <AiOutlineStrikethrough />
                                </div>
                            </div>
                            <div className="format-form">
                                <div className="icon">
                                    <FaAlignLeft />
                                </div>
                                <div className="icon">
                                    <FaAlignCenter />
                                </div>
                                <div className="icon">
                                    <FaAlignRight />
                                </div>
                                <div className="icon">
                                    <FaAlignJustify />
                                </div>
                            </div>
                            <div className="format-row">
                                <div className="icon">
                                    <FaListOl />
                                </div>
                                <div className="icon">
                                    <FaListUl />
                                </div>
                            </div>
                            <div className="format-link">
                                <div className="icon">
                                    <FiLink />
                                </div>
                            </div>
                        </div>
                        <div className="input-description">
                            <textarea name="" id="" rows={9} placeholder='Write a description here...'></textarea>
                        </div>
                    </div>
                    <div className="product-images">
                        <h3 className="title">Display images</h3>
                        <div className="input-images" onClick={handleClick}>
                            <input ref={fileInputRef} accept="image/*,.png,.gif,.jpeg,.jpg" type="file" />
                            <div className="images">
                                <span className="text">Drag your photo here or <a href="/">Browse from device</a></span>
                                <img className="mt-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAMAAAAd31JXAAAARVBMVEUAAABueJFueJFueZFteJBweI9seJFtepJweI9ueJFwcI9ueJFueZFteZJvd5Bud5FueJFue5FuepFueZBueJBtd5BueJFT8Zn8AAAAFnRSTlMA339fn2B/H0C/EO9vP49Pr08v78+Pw4dpogAAARZJREFUOMvF1NluwyAQheFhiQl4jdPO+z9qQdgcSmjHyk3+C8uWPuGRF0jOeb/SxRTzGC5ajrm37DzYl0yeNZ4lu1k7p+tgudeUZz06Zv7ibjYty1Ur0cD9TLOucvlyXHTbPc87aZ3goqdIZ/GRADzS8nTN3kTrC5CtW6yTLfq4DaG1YdZ67dGB+fu3XZ8cU+bVjs3zxVcxdN/FHRY0YsFm6n2FZ+v94lp7pon0iZ3HTWoLWrBTmKi2oMDPavzaggKn1E1nXFnQA+OXMZyDBQXOrwoYVgECD8CNFXBtJVxbAXdsH4sWWLbAsgXOtuw7o/sHb+mwE53bpppML+y2oWxBYpZy+yhSVWZ8KInuVHLGq7/bpnC4H8tmOEloDtVDAAAAAElFTkSuQmCC" width="40" alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="product-inventory">
                        <h3 className="title">Inventory</h3>
                        <div className="inventory">
                            <div className="inventory-sidebar">
                                <ul>
                                    <li onClick={() => setInventory(1)}>
                                        <div className="pricing">
                                            <IoPricetagsOutline />
                                            <span>Pricing</span>
                                        </div>
                                    </li>
                                    <li onClick={() => setInventory(2)}>
                                        <div className="restock">
                                            <BsBoxSeam />
                                            <span>Restock</span>
                                        </div>
                                    </li>
                                    <li onClick={() => setInventory(3)}>
                                        <div className="shipping">
                                            <LiaShippingFastSolid />
                                            <span>Shipping</span>
                                        </div>
                                    </li>
                                    <li onClick={() => setInventory(4)}>
                                        <div className="global-delivery">
                                            <RiGlobalLine />
                                            <span>Global Delivery</span>
                                        </div>
                                    </li>
                                    <li onClick={() => setInventory(5)}>
                                        <div className="attributes">
                                            <HiOutlineAdjustmentsVertical />
                                            <span>Attributes</span>
                                        </div>
                                    </li>
                                    <li onClick={() => setInventory(6)}>
                                        <div className="advanced">
                                            <GoLock />
                                            <span>Advanced</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="inventory-content">
                                {
                                    inventory === 1 && (
                                        <div className="content-price">
                                            <div className="regular-price">
                                                <h3 className="title">Regular price</h3>
                                                <input type="text" placeholder='$ $ $' />
                                            </div>
                                            <div className="sale-price">
                                                <h3 className="title">Sale price</h3>
                                                <input type="text" placeholder='$ $ $' />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    inventory === 2 && (
                                        <div className="content-restock">
                                            <div className="restock-heading">
                                                <h3 className="title">Add to Stock</h3>
                                                <div className="restock-input">
                                                    <input type="text" placeholder='Quantity' />
                                                    <div className="btn-confirm"> <i className="fa-solid fa-check"></i> Confirm</div>
                                                </div>
                                            </div>
                                            <div className="restock-context">
                                                <div className="stock-now">
                                                    <h6 className="title">Product in stock now:</h6>
                                                    <p className="text">$1,090 <i className="fa-regular fa-arrows-rotate"></i></p>
                                                </div>
                                                <div className="transit">
                                                    <h6 className="title">Product in transit:</h6>
                                                    <p className="text">5000</p>
                                                </div>
                                                <div className="restocked">
                                                    <h6 className="title">Last time restocked:</h6>
                                                    <p className="text">30th June, 2024</p>
                                                </div>
                                                <div className="over-lifetime">
                                                    <h6 className="title">Total stock over lifetime:</h6>
                                                    <p className="text">20,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    inventory === 3 && (
                                        <div className="content-shipping">
                                            <div className="shipping-heading">
                                                <h3 className="title">Shipping type</h3>
                                                <div className="shipping-select">
                                                    <div className="form-item">
                                                        <div className="form-check">
                                                            <input name="shipping" type="radio" id="fullfilledBySeller" />
                                                            <label htmlFor="fullfilledBySeller" >Fullfilled by Seller</label>
                                                        </div>
                                                        <div className="form-desc">
                                                            <p>You’ll be responsible for product delivery. <br />Any damage or delay during shipping may cost you a Damage fee.</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-item">
                                                        <div className="form-check">
                                                            <input name="shipping" type="radio" id="fullfilledByPhoenix" />
                                                            <label htmlFor="fullfilledByPhoenix" >Fullfilled by Phoenix</label>
                                                            <span className="state">RECOMMENDED</span>
                                                        </div>
                                                        <div className="form-desc">
                                                            <p>Your product, Our responsibility. <br />For a measly fee, we will handle the delivery process for you.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sub">
                                                <p className="text">See our <a href="/">Delivery terms and conditions</a> for details.</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-30">
                    <div className="organize">
                        <div className="category">
                            <div className="category-heading">
                                <h3 className="title">Category</h3>
                                <div className="btn-add-category">
                                    <span className="text">Add new category</span>
                                </div>
                            </div>
                            <div className="category-content">
                                <select name="category" id="category">
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home">Home</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="sports">Sports</option>
                                </select>
                            </div>
                        </div>

                        <div className="brand">
                            <div className="brand-heading">
                                <h3 className="title">Brand</h3>
                                <div className="btn-add-brand">
                                    <span className="text">Add new brand</span>
                                </div>
                            </div>
                            <div className="brand-content">
                                <select name="brand" id="brand">
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home">Home</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="sports">Sports</option>
                                </select>
                            </div>
                        </div>

                        <div className="collection">
                            <div className="collection-heading">
                                <h3 className="title">Collection</h3>
                            </div>
                            <div className="collection-content">
                                <input type="text" placeholder='Collection' />
                            </div>
                        </div>


                        <div className="tag">
                            <div className="tag-heading">
                                <h3 className="title">Tags</h3>
                                <div className="btn-add-tag">
                                    <span className="text">View all tags</span>
                                </div>
                            </div>
                            <div className="tag-content">
                                <select name="tag" id="tag">
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home">Home</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="sports">Sports</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="variant">
                        <h3 className="title">Variants</h3>
                        <div className="variant-item">
                            <div className="option-heading">
                                <h3 className="title">Option 1</h3>
                                <div className="btn-add-option">
                                    <span className="text">Remove</span>
                                </div>
                            </div>
                            <div className="option-content">
                                <select name="option" id="option">
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home">Home</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="sports">Sports</option>
                                </select>

                                <textarea rows={3}></textarea>
                            </div>
                        </div>

                        <div className="variant-item">
                            <div className="option-heading">
                                <h3 className="title">Option 1</h3>
                                <div className="btn-add-option">
                                    <span className="text">Remove</span>
                                </div>
                            </div>
                            <div className="option-content">
                                <select name="option" id="option">
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home">Home</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="sports">Sports</option>
                                </select>

                                <textarea rows={3}></textarea>
                            </div>
                        </div>

                        <div className="btn-add-another">
                            <span>Add another option</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUpload;