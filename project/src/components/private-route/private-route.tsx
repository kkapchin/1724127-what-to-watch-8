import { Redirect, Route, RouteProps } from 'react-router';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  component:() => JSX.Element,
  isAuthorized: boolean,
} & RouteProps

export function PrivateRoute({ component: Component, isAuthorized, ...routeProps }: PrivateRouteProps): JSX.Element {
  return (
    <Route
      {...routeProps}
      render={(props) => isAuthorized ? <Component {...props} /> : <Redirect to={AppRoute.SignIn} />}
    />
  );
}
