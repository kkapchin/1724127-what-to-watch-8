import { Genre } from '../const';
import { films } from '../mocks/films';
import { favorites } from '../mocks/favorites';
import { similars } from '../mocks/similars';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { onCommentGet } from '../utils';

const initialState = {
  currentGenre: Genre.Default,
  genres: [...new Set([Genre.Default, ...films.map((film) => film.genre)])],
  films: films.slice(),
  favorites: favorites.slice(),
  similars: similars.slice(),
  comments: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.switchGenre:
      return {
        ...state,
        currentGenre: action.payload,
        films:
          action.payload === Genre.Default
            ? films
            : films.filter((film) => film.genre === action.payload),
      };
    case ActionType.getComments:
      return {
        ...state,
        comments: onCommentGet(action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
