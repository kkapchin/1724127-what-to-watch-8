import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isHeader: boolean,
}

export function Logo({isHeader}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link className={`logo__link ${isHeader ? '' : 'logo__link--light'}`} to={AppRoute.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
