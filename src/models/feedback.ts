export interface Feedback {
    user_id: number,
    product_id: number,
    comment: string,
    rate: number,
    name: string,
    created_at: Date
}