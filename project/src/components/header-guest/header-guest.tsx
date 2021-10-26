import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';

export function HeaderGuest(): JSX.Element {
  return (
    <header className="page-header">
      <Logo isHeader />

      <div className="user-block">
        <Link className="user-block__link" to={AppRoute.SignIn} >Sign in</Link>
      </div>
    </header>
  );
}
