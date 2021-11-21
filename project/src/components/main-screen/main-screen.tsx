import { Genre } from '../../const';
import { Films } from '../../types/films';
import { Promo } from '../../types/promo';
import FilmsList from '../films-list/films-list';
import { Footer } from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import Header from '../header/header';
import PromoScreen from '../promo-screen/promo-screen';

type MainScreenProps = {
  promo: Promo,
  films: Films,
}

function MainScreen({promo, films}: MainScreenProps): JSX.Element {

  const [...genres] = new Set([Genre.Default, ...films.map((film) => film.genre)]);

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

          <GenresList genres={genres} />

          <FilmsList />

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
