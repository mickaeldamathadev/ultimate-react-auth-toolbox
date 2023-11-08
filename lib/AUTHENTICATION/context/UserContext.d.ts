import { Dispatch, SetStateAction } from 'react';
import { IProps } from '../data/types';
interface IUSerContext<T> {
    user: T;
    setUser: Dispatch<SetStateAction<T>>;
}
export declare function UserContext<T>(): import("react").Context<IUSerContext<T>>;
export default function UserContextProvider<T>({ children }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
