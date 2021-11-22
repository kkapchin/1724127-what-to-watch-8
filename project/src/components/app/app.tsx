import { FormEvent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CommentPost } from '../../types/comment-post';
import { Film, Films } from '../../types/films';
import { Promo } from '../../types/promo';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import MainScreen from '../main-screen/main-screen';
import MoviePageScreen from '../movie-page-screen/movie-page-screen';
import { MyListScreen } from '../my-list-screen/my-list-screen';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';
import { PlayerScreen } from '../player-screen/player-screen';
import { PrivateRoute } from '../private-route/private-route';
import { SignInScreen } from '../sign-in-screen/sign-in-screen';

type AppScreenProps = {
  promo: Promo,
  films: Films,
  getFavorites: (id: string) => Films,
  similar: Films,
  isAuthorized: boolean,
  onSubmit: ({ rating, comment }: CommentPost, evt: FormEvent<HTMLFormElement>) => void,
  getFilm: (id: string) => Film,
}

function App(appProps: AppScreenProps): JSX.Element {
  const { promo, films, getFavorites, similar, isAuthorized, onSubmit, getFilm } = appProps;

  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.Main} component={() => <MainScreen promo={promo} />} />
        <Route path={AppRoute.SignIn} component={SignInScreen} />
        <Route exact path={AppRoute.Film} render={() => <MoviePageScreen getFilm={getFilm} similar={similar} />} />
        <Route exact path={AppRoute.Player} component={PlayerScreen} />
        <PrivateRoute
          exact path={AppRoute.MyList}
          isAuthorized={isAuthorized}
          render={() => <MyListScreen getFavorites={getFavorites} />}
        />
        <PrivateRoute
          exact path={AppRoute.AddReview}
          isAuthorized={isAuthorized}
          render={() => <AddReviewScreen getFilm={getFilm} onSubmit={onSubmit} />}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}

export default App;
