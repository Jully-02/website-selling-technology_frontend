import { Product } from "../../models/product";
import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";
import TopArea from "./components/TopArea";

interface HeaderProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <TopArea />
            <HeaderTop cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
            <HeaderBottom />
        </>
    )
}

export default Header;