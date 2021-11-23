export enum ActionType {
  switchGenre = 'genre/switchGenre',
  getComments = 'movie/getComments',
}

export type switchGenreAction = {
  type: ActionType.switchGenre,
  payload: string,
}

export type getCommentsAction = {
  type: ActionType.getComments,
  payload: number,
}

export type Actions =
  | switchGenreAction
  | getCommentsAction;
