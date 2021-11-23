import { ActionType, getCommentsAction, switchGenreAction } from '../types/action';

export const switchGenre = (genre: string): switchGenreAction => ({
  type: ActionType.switchGenre,
  payload: genre,
});

export const getComments = (id: number): getCommentsAction => ({
  type: ActionType.getComments,
  payload: id,
});
