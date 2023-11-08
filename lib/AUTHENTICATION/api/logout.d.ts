export default function logout(): Promise<{
    data?: {};
    error?: string;
    status?: number;
} | {
    error: any;
}>;
