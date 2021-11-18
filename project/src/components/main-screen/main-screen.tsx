import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import { Promo } from '../../types/promo';
import { FilmsList } from '../films-list/films-list';
import { Footer } from '../footer/footer';
import Header from '../header/header';
import PromoScreen from '../promo-screen/promo-screen';

type MainScreenProps = {
  promo: Promo,
  films: Films,
}

function MainScreen({promo, films}: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <PromoScreen promo={promo} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href={AppRoute.Main} className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href={AppRoute.Main} className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
