import { FormEvent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CommentPost } from '../../types/comment-post';
import { Films } from '../../types/films';
import { Promo } from '../../types/promo';
import { getFilmById } from '../../utils';
import { AddReviewScreen } from '../add-review-screen/add-review-screen';
import MainScreen from '../main-screen/main-screen';
import { MoviePageScreen } from '../movie-page-screen/movie-page-screen';
import { MyListScreen } from '../my-list-screen/my-list-screen';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';
import { PlayerScreen } from '../player-screen/player-screen';
import { PrivateRoute } from '../private-route/private-route';
import { SignInScreen } from '../sign-in-screen/sign-in-screen';

type AppScreenProps = {
  promo: Promo,
  films: Films,
  favorites: Films,
  similar: Films,
  isAuthorized: boolean,
  onSubmit: ({rating, comment}: CommentPost, evt: FormEvent<HTMLFormElement>) => void,
  onChangeRating: (value: string, setState: (value: number) => void) => void,
}

function App(props: AppScreenProps): JSX.Element {
  const {promo, films, favorites, similar, isAuthorized, onSubmit, onChangeRating} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainScreen promo={promo} films={films} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoute.Film} component={() => <MoviePageScreen film={getFilmById(window.location.pathname)} similar={similar} />} />
        <Route exact path={AppRoute.Player} >
          <PlayerScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} isAuthorized={isAuthorized} component={() => <MyListScreen favorites={favorites} />} />
        <PrivateRoute exact path={AppRoute.AddReview}
          isAuthorized={isAuthorized}
          component={() => <AddReviewScreen film={getFilmById(window.location.pathname)} onSubmit={onSubmit} onChange={onChangeRating} />}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
