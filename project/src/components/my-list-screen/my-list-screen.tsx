import { useRouteMatch } from 'react-router';
import { Films } from '../../types/films';
import FilmsList from '../films-list/films-list';
import { Footer } from '../footer/footer';
import Header from '../header/header';

const FAVORITES_COUNT = 400;

type MyListScreenProps = {
  getFavorites: (id: string) => Films,
}

export function MyListScreen({ getFavorites }: MyListScreenProps): JSX.Element {
  const match = useRouteMatch<{id: string}>();
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList favorites={getFavorites(match.params.id)} filmsCount={FAVORITES_COUNT} />
      </section>

      <Footer />
    </div>
  );
}
