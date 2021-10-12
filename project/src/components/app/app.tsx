import { Promo } from '../../types/promo';
import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  promo: Promo,
}

function App({promo}: AppScreenProps): JSX.Element {
  return (
    <MainScreen promo = {promo} />
  );
}

export default App;
