import { Genre } from '../const';
import { films } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  genre: Genre.Default,
  films: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.switchGenre:
      return {
        ...state,
        genre: action.payload,
        films:
          state.genre === Genre.Default
            ? films
            : films.filter((film) => film.genre === state.genre)};
    default:
      return state;
  }
};

export {reducer};
