import GenresItem from '../genres-item/genres-item';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { switchGenre } from '../../store/action';

const mapStateToProps = ({genre}: State) => ({
  currentGenre: genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreItemClick: (newGenre: string) => dispatch(switchGenre(newGenre)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

type GenresListProps = {
  genres: string[],
}

type ConnectedComponentProps = GenresListProps & propsFromRedux;

function GenresList(props: ConnectedComponentProps): JSX.Element {
  const { genres, currentGenre, onGenreItemClick } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenresItem onGenreItemClick={onGenreItemClick} key={genre} genre={genre} isActive={currentGenre === genre} />)}
    </ul>
  );
}

export default connector(GenresList);
