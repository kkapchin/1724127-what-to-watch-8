import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Promo } from '../../types/promo';
import { AddReviewScreen } from '../add-review-screen/add-review-screen';
import MainScreen from '../main-screen/main-screen';
import { MoviePageScreen } from '../movie-page-screen/movie-page-screen';
import { MyListScreen } from '../my-list-screen/my-list-screen';
import { Page404Screen } from '../page-404/page-404';
import { PlayerScreen } from '../player-screen/player-screen';
import { PrivateRoute } from '../private-route/private-route';
import { SignInScreen } from '../sign-in-screen/sign-in-screen';

type AppScreenProps = {
  promo: Promo,
}

function App({ promo }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainScreen promo={promo} />
        </Route>
        <Route path='/login' exact>
          <SignInScreen />
        </Route>
        <PrivateRoute path='/mylist' exact component={MyListScreen} />
        <Route path='/films/:id' exact>
          <MoviePageScreen />
        </Route>
        <Route path='/films/:id/review' exact>
          <AddReviewScreen />
        </Route>
        <Route path='/player/:id' exact>
          <PlayerScreen />
        </Route>
        <Route component={Page404Screen} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
