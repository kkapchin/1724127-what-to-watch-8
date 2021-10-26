import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';

export function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo isHeader />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a href={AppRoute.Main} className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}
