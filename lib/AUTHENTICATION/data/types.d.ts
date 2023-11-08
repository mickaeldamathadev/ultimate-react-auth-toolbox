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
