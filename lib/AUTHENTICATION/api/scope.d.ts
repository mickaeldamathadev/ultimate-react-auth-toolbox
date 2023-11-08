export default function verifyScope(scope: string): Promise<{
    data?: unknown;
    error?: string;
    status?: number;
} | {
    error: any;
}>;
