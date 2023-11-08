import { Dispatch, SetStateAction } from 'react';
import { IProps } from '../data/types';
interface IUSerContext {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}
export declare const UserContext: import("react").Context<IUSerContext>;
export default function UserContextProvider({ children }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
