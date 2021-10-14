import { Redirect, Route } from 'react-router';

/* type PrivateRouteProps = {
  isAuthorized: boolean,

}
 */
const isAuthorized = false;

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthorized ? <Component {...props} /> : <Redirect to='/login' />}
    />
  );
}
