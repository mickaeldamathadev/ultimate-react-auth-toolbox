export declare class RequestError extends Error {
    status: number;
    message: string;
    constructor(message: string, status: number);
}
export default function permissionLoader(): Promise<unknown>;
