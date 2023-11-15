import { Dispatch, SetStateAction } from 'react';
import { IProps, IUser } from '../data/types';
interface IUSerContext {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser>>;
}
export declare const UserContext: import("react").Context<IUSerContext>;
export default function UserContextProvider({ children }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
