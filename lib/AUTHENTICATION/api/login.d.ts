import { ILogin } from '../data/types';
export declare const emailRegex: RegExp;
export default function login({ password, contact }: ILogin): Promise<{
    data?: {
        password: string;
        contact: string;
    };
    error?: string;
    status?: number;
} | {
    error: any;
}>;
