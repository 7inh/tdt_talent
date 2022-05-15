export interface Account {
    id: number;
    email: string;
    password: string;
    role: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
