export interface Account {
    id: number;
    email: string;
    password: string;
    role: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}


export interface Profile {
    id: number;
    account_id: number;
    full_name: string;
    avatar_url: string;
    phone_number?: string;
    address?: string;
    description?: string;
    attach_resume?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}