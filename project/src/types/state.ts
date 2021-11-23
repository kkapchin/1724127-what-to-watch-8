import { Films } from './films';

export type State = {
  currentGenre: string | null,
  genresList: string[],
  films: Films,
  favorites: Films,
  similars: Films,
}
