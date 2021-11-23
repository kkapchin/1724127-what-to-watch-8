import { CommentGet } from './comment-get';
import { Films } from './films';

export type State = {
  currentGenre: string | null,
  genres: string[],
  films: Films,
  favorites: Films,
  similars: Films,
  comments: CommentGet,
}
