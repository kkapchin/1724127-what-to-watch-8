import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import { Promo } from '../../types/promo';
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
  isAuthorized: boolean,
}

function App({ promo, films, favorites, isAuthorized }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainScreen promo={promo} films={films} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoute.Film} >
          <MoviePageScreen />
        </Route>
        <Route exact path={AppRoute.Player} >
          <PlayerScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} isAuthorized={isAuthorized} component={() => <MyListScreen favorites={favorites} />} />
        <PrivateRoute exact path={AppRoute.AddReview} isAuthorized={isAuthorized} component={() => <AddReviewScreen films={films} />} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
