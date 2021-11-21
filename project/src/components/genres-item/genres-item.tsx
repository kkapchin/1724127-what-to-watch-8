import { Link } from 'react-router-dom';
import { AppRoute, Genre } from '../../const';

type GenresItemProps = {
  onGenreItemClick: (evt: string) => void,
  genre: string,
  isActive: boolean,
}

export default function GenresItem({ onGenreItemClick, genre, isActive }: GenresItemProps): JSX.Element {

  const handleGenreItemClick = (evt: React.MouseEvent<HTMLElement>) => {
    onGenreItemClick(evt.currentTarget.textContent ? evt.currentTarget.textContent : Genre.Default);
  };

  return (
    <li
      className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
      onClick={handleGenreItemClick}
    >
      <Link to={AppRoute.Main} className="catalog__genres-link">{genre}</Link>
    </li>
  );
}
