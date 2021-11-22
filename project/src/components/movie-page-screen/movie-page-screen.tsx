import { Redirect, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film, Films } from '../../types/films';
import FilmsList from '../films-list/films-list';
import { Footer } from '../footer/footer';
import { Logo } from '../logo/logo';

const SIMILARS_COUNT = 4;

type MoviePageScreenProps = {
  getFilm: (id: string) => Film,
  similar: Films,
}

function MoviePageScreen({...props}: MoviePageScreenProps): JSX.Element {
  const {getFilm, similar} = props;
  const match = useRouteMatch<{id: string}>();
  const film = getFilm(match.params.id);
  if(!film) {
    return <Redirect to={AppRoute.PageNotFound} />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isHeader />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a href={'/'} className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={`/films/${film.id}/review`} >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href={'/'}  className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href={'/'}  className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href={'/'}  className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.description}</p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

                <p className="film-card__starring"><strong>{`Starring: ${film.starring}`}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList similars={similar} filmsCount={SIMILARS_COUNT} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePageScreen;
