import { connect, ConnectedProps } from 'react-redux';
import { Film, Films } from '../../types/films';
import { State } from '../../types/state';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films?: Films,
}

const mapStateToProps = ({films}: State) => ({
  films,
});

const connector = connect(mapStateToProps, null);

type propsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = FilmsListProps | propsFromRedux;

function FilmsList({ films }: ConnectedComponentProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films ? films.map((film: Film) => <FilmCard key={film.id} film={film} />) : ''}
    </div>
  );
}

export default connector(FilmsList);
