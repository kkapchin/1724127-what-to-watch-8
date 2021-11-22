import { connect, ConnectedProps } from 'react-redux';
import { Film, Films } from '../../types/films';
import { State } from '../../types/state';
import FilmCard from '../film-card/film-card';

const BEGIN_INDEX = 0;

type FilmsListProps = {
  similars?: Films,
  favorites?: Films,
  filmsCount: number,
}

const mapStateToProps = ({ films }: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = FilmsListProps & propsFromRedux;

function FilmsList({ similars, favorites, films, filmsCount }: ConnectedComponentProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {similars ? similars.slice(BEGIN_INDEX, filmsCount).map((film: Film) => <FilmCard key={film.id} film={film} />) : ''}
      {favorites ? favorites.slice(BEGIN_INDEX, filmsCount).map((film: Film) => <FilmCard key={film.id} film={film} />) : ''}
      {films ? films.slice(BEGIN_INDEX, filmsCount).map((film: Film) => <FilmCard key={film.id} film={film} />) : ''}
    </div>
  );
}

export default connector(FilmsList);
