import { Link } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

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

      <Footer />
    </div>
  );
}
