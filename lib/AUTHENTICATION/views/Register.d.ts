import { ReactNode } from 'react';
import { CallbackProps } from '../data/types';
export default function Register({ onError, onSuccess, roles, children, }: CallbackProps & {
    roles: any[];
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
