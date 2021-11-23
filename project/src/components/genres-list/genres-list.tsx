import GenresItem from '../genres-item/genres-item';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { switchGenre } from '../../store/action';

const mapStateToProps = ({ currentGenre, genresList }: State) => ({
  currentGenre,
  genresList,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreItemClick: (newGenre: string) => dispatch(switchGenre(newGenre)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = propsFromRedux;

function GenresList(props: ConnectedComponentProps): JSX.Element {
  const { genresList, currentGenre, onGenreItemClick } = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => <GenresItem onGenreItemClick={onGenreItemClick} key={genre} genre={genre} isActive={currentGenre === genre} />)}
    </ul>
  );
}

export default connector(GenresList);
