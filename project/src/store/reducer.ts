import { Genre } from '../const';
import { films } from '../mocks/films';
import { favorites } from '../mocks/favorites';
import { similars } from '../mocks/similars';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  currentGenre: Genre.Default,
  genresList: [...new Set([Genre.Default, ...films.map((film) => film.genre)])],
  films: films.slice(),
  favorites: favorites.slice(),
  similars: similars.slice(),
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
            : films.filter((film) => film.genre === action.payload)};
    default:
      return state;
  }
};

export {reducer};
