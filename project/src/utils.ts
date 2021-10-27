import { films } from './mocks/films';
import { Film } from './types/films';


export const getFilmById = (pathname: string): Film => {
  const id = parseInt(pathname.split('/')[2], 10);
  const film = films.filter((element): Film | boolean => element.id === id)[0];
  return film;
};
