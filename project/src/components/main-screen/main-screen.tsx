import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { FilmsListCategory } from '../../const';
import { Promo } from '../../types/promo';
import { State } from '../../types/state';
import FilmsList from '../films-list/films-list';
import { Footer } from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import Header from '../header/header';
import PromoScreen from '../promo-screen/promo-screen';
import ShowMoreButton from '../show-more-button/show-more-button';

const DEFAULT_FILMS_COUNT = 8;
const FILMS_COUNT_INCREMENT = DEFAULT_FILMS_COUNT;

const mapStateToProps = ({ currentGenre, films }: State) => ({
  currentGenre,
  films,
});

const connector = connect(mapStateToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

type MainScreenProps = {
  promo: Promo,
  //films: Films,
}

type ConnectedComponentProps = MainScreenProps & propsFromRedux;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const {promo, films, currentGenre} = props;
  const [filmsCount, setFilmsCount] = useState(DEFAULT_FILMS_COUNT);
  useEffect(() => () => setFilmsCount(DEFAULT_FILMS_COUNT), [currentGenre]);

  const isButtonActive = () => filmsCount < films.length;

  const onButtonClick = () => {
    setFilmsCount(filmsCount + FILMS_COUNT_INCREMENT);
  };

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

          <GenresList />

          <FilmsList filmsCount={filmsCount} filmsListCategory={FilmsListCategory.Default} />

          <ShowMoreButton isActive={isButtonActive} onButtonClick={onButtonClick} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default connector(MainScreen);
