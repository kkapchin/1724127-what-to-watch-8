import { ActionType, switchGenreAction } from '../types/action';

export const switchGenre = (genre: string | null): switchGenreAction => ({
  type: ActionType.switchGenre,
  payload: genre,
});
