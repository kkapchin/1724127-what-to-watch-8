import { connect, ConnectedProps } from 'react-redux';
import { FilmsCategory } from '../../const';
import { Film, Films } from '../../types/films';
import { State } from '../../types/state';
import FilmCard from '../film-card/film-card';

const BEGIN_INDEX = 0;

type FilmsListProps = {
  filmsCount: number,
  filmsListCategory: FilmsCategory,
}

const mapStateToProps = ({ films, favorites, similars }: State) => ({
  catalog: films,
  favorites,
  similars,
});

const connector = connect(mapStateToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = FilmsListProps & propsFromRedux;

function FilmsList({ filmsCount, filmsListCategory, catalog, favorites, similars }: ConnectedComponentProps): JSX.Element {
  const films: Films = [];
  switch(filmsListCategory) {
    case FilmsCategory.Favorites:
      favorites.map((film: Film) => films.push(film));
      break;
    case FilmsCategory.Similars:
      similars.map((film: Film) => films.push(film));
      break;
    default:
      catalog.map((film: Film) => films.push(film));
  }
  return (
    <div className="catalog__films-list">
      {films ? films.slice(BEGIN_INDEX, filmsCount).map((film: Film) => <FilmCard key={`${filmsListCategory}-${film.id}`} film={film} />) : ''}
    </div>
  );
}

export default connector(FilmsList);
