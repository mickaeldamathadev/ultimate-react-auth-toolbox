export declare class RequestError extends Error {
    status: number;
    message: string;
    constructor(message: string, status: number);
}
export default function rolesAndPermsLoader(): Promise<{
    data?: unknown;
    error?: string;
    status?: number;
}>;
