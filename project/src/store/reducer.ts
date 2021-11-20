import { Genre } from '../const';
import { films } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  genre: Genre.Default,
  films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.switchGenre:
      return {
        ...state,
        genre: action.payload,
        films:
          action.payload === Genre.Default
            ? films
            : films.filter((film) => film.genre === action.payload)};
    default:
      return state;
  }
};

export {reducer};
