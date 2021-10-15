import { Redirect, Route, RouteProps } from 'react-router';

/* type PrivateRouteProps = {
  isAuthorized: boolean,
  component: any,
  path: string,
  exact: boolean,
} */
type PrivateRouteProps = {
  exact: boolean,
  path: string,
  component:() => JSX.Element,
  isAuthorized: boolean,
} & RouteProps

//const isAuthorized = false;

export function PrivateRoute({ component: Component, isAuthorized, ...routeProps }: PrivateRouteProps): JSX.Element {
  return (
    <Route
      {...routeProps}
      render={(props) => isAuthorized ? <Component {...props} /> : <Redirect to='/login' />}
    />
  );
}


/* export function PrivateRoute({ children, isAuthorized }: PrivateRouteProps): ReactElement {
  //console.log(props)
  return (
    isAuthorized ? children : <Redirect to='/login' />
  );
}
 */
