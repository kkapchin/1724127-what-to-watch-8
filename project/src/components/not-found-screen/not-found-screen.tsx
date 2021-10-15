import { Link } from 'react-router-dom';

export function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <h1 style={{textAlign: 'center', lineHeight: 1.5}}>
          404
          <br />
          <small>Page not found</small>
        </h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="sign-in__btn">Go to main page</button>
        </Link>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href={'/'} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
