import { ReactNode } from "react";
interface ScopedComponentProps {
    children: ReactNode;
    scope: string;
}
export default function ScopedComponent({ children, scope, }: ScopedComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
