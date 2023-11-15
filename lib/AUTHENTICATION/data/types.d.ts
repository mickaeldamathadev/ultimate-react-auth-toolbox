import { ReactNode } from 'react';
export interface ILogin {
    contact: string;
    password: string;
}
export interface IProps {
    children: ReactNode;
}
export interface CallbackProps {
    onError: (error: string) => void;
    onSuccess: (data: any) => void;
}
export interface IUser {
    _id: string;
    contact: string;
    firstname: string;
    lastname: string;
    company: string;
    establishment: string;
    external: boolean;
    created_at: Date;
    updated_at: Date;
    logged_in: boolean;
}
