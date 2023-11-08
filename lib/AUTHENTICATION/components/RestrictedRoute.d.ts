import { ReactElement } from 'react';
interface AuthRouteProps {
    component: ReactElement;
}
export default function RestrictedRoute({ component }: AuthRouteProps): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
