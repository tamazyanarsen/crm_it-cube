export interface User {
    id: string;
    password: string;
    name: string;
    surname?: string;
    role: string;
    description?: string;
    email: string;
}
