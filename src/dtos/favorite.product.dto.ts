export class FavoriteProductDTO {
    user_id: number;

    product_id: number;

    constructor(data:any) {
        this.user_id = data.user_id;
        this.product_id = data.product_id;
    }
}