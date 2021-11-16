import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps =
{
  render: () => JSX.Element,
  isAuthorized: boolean,
} & RouteProps

export function PrivateRoute(privateRouteProps: PrivateRouteProps): JSX.Element {
  const { exact, path, render, isAuthorized} = privateRouteProps;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => isAuthorized ? render() : <Redirect to={AppRoute.SignIn} />}
    />
  );
}
