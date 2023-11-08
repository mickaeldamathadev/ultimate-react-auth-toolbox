export default function reset(props: {
    password: string;
    token: string;
}): Promise<{
    data?: {
        password: string;
        token: string;
    };
    error?: string;
    status?: number;
} | {
    error: any;
}>;
