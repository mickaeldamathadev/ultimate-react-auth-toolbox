export declare enum PermTypes {
    READ = "READ",
    WRITE = "WRITE",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
export interface IPermission {
    type: PermTypes;
    route: string;
    action: string;
}
export declare const permKeys: IPermission;
