import { FormEvent } from 'react';
import { DECIMAL_RADIX } from './const';
import { comments } from './mocks/comments';
import { favorites } from './mocks/favorites';
import { films } from './mocks/films';
import { CommentGet } from './types/comment-get';
import { CommentPost } from './types/comment-post';
import { Film, Films } from './types/films';

export const getFilmById = (pathname: string): Film => {
  const id = parseInt(pathname.split('/')[2], DECIMAL_RADIX);
  const film = films.filter((element): Film | boolean => element.id === id)[0];
  return film;
};

export const getFilm = (id: string): Film => {
  if(id) {
    const film = films.filter((element): Film | boolean => element.id === parseInt(id, DECIMAL_RADIX))[0];
    return film;
  }
  return {} as Film;
};

export const getFavorites = (id: string): Films => {
  if(id) {
    return favorites;
  }
  return {} as Films;
};

const onPost = (commentPost: CommentPost) => {
  throw new Error('Function \'onPost\' isn\'t implemented.');
};

export const onSubmit = (commentPost: CommentPost, evt: FormEvent<HTMLFormElement>): void => {
  evt.preventDefault();
  onPost(commentPost);
};

export const onChangeRating = (value: string, setState: (value: number) => void): void => {
  const newValue = parseInt(value, DECIMAL_RADIX);
  setState(newValue);
};

export const onCommentGet = (id: number): CommentGet => {
  if(!id) {
    //return [];
    throw new Error('Function \'onCommentGet\' isn\'t implemented.');
  }
  return comments;
};
