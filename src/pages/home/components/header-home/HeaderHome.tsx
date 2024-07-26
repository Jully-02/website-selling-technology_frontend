import { Product } from "../../../../models/product";
import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";
import TopArea from "./components/TopArea";

interface HeaderHomeProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    return (
        <>
            <TopArea />
            <HeaderTop />
            <HeaderBottom cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
        </>
    )
}

export default HeaderHome;