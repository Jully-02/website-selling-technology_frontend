export class FeedbackDTO {
    user_id: number;

    product_id: number;

    comment: string;

    rate: number

    constructor(data:any) {
        this.user_id = data.user_id;
        this.product_id = data.product_id;
        this.comment = data.comment;
        this.rate = data.rate
    }
}