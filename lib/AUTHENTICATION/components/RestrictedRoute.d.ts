import { ReactElement } from 'react';
interface AuthRouteProps {
    component: ReactElement;
    onError: () => any;
}
export default function RestrictedRoute({ component }: AuthRouteProps): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
