import { CartItemDTO } from "./cart.item.dto";

export interface OrderDTO {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    note: string;
    sub_total: number;
    total_money: number;
    shipping_cost: number;
    payment_cost: number;
    shipping_address: string;
    payment_method_id: number;
    shipping_method_id: number;
    payment_status: boolean;
    cart_items: CartItemDTO [];

}