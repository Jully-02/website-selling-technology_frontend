
export class RegisterDTO {
    first_name: string;

    last_name: string;

    email: string;

    phone_number: string;

    address: string;

    password: string;

    retype_password: string;

    date_of_birth: Date;

    facebook_account_id: number = 0;

    google_account_id: number = 0;

    role_ids: number []= [2];

    constructor(data: any) {
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.phone_number = data.phone_number;
        this.email = data.email;
        this.address = data.address || '';
        this.password = data.password;
        this.retype_password = data.retype_password;
        this.date_of_birth = data.date_of_birth;
        this.facebook_account_id = data.facebook_account_id || 0;
        this.google_account_id = data.google_account_id || 0;
        this.role_ids = data.role_id || [2];
    }
}