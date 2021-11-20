export enum ActionType {
  switchGenre = 'genre/switchGenre',
}

export type switchGenreAction = {
  type: ActionType.switchGenre,
  payload: string | null,
}

export type Actions = switchGenreAction;
