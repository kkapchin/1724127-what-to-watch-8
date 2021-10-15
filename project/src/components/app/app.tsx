import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
  isAuthorized: boolean,
}

function App({ promo, isAuthorized }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen promo={promo} />
        </Route>
        <Route exact path='/login'>
          <SignInScreen />
        </Route>
        <Route exact path='/films/:id' >
          <MoviePageScreen />
        </Route>
        <Route exact path='/player/:id' >
          <PlayerScreen />
        </Route>
        <PrivateRoute exact path='/mylist' isAuthorized={isAuthorized} component={MyListScreen} />
        <PrivateRoute exact path='/films/:id/review' isAuthorized={isAuthorized} component={AddReviewScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
