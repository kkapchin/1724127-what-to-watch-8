export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  PageNotFound = '/page-not-found',
}

export enum Genre {
  Default = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

export const DECIMAL_RADIX = 10;

export enum FilmsCategory {
  Default = 'Default',
  Favorites = 'Favorites',
  Similars = 'Similars',
}

export const tabs = [
  'Overview',
  'Details',
  'Reviews',
];

export const DEFAULT_TAB = 'Overview';

export enum Tab {
  Default = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum RatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}
