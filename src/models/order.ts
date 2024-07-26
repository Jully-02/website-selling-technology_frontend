export interface Order {
    id: number,
    user_id: string;
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
    tracking_number: number;
    status: string,
    order_date: Date,
    shipping_date: Date,
    payment_status: boolean,
    is_active: boolean,
    shipping_method_name: string,
    payment_method_name: string
}