import { useRouteMatch } from 'react-router';
import { Films } from '../../types/films';
import { FilmsList } from '../films-list/films-list';
import { Footer } from '../footer/footer';
import Header from '../header/header';

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

        <FilmsList films={getFavorites(match.params.id)} />
      </section>

      <Footer />
    </div>
  );
}
