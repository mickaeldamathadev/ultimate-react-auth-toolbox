import { ILogin } from '../data/types';
export default function forgot({ contact }: ILogin): Promise<{
    data?: {
        contact: string;
    };
    error?: string;
    status?: number;
} | {
    error: any;
}>;
