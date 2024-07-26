export class CartItemDTO {
    user_id: number;

    product_id: number;

    quantity: number;

    constructor(data:any) {
        this.user_id = data.user_id;
        this.product_id = data.product_id;
        this.quantity = data.quantity || 1
    }
}