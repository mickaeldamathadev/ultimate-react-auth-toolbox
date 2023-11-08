export default function access(): Promise<{
    data?: {};
    error?: string;
    status?: number;
} | {
    error: any;
}>;
