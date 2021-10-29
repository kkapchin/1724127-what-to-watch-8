import { Films } from '../../types/films';
import { FilmsList } from '../films-list/films-list';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

type MyListScreenProps = {
  favorites: Films
}

export function MyListScreen({favorites}: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favorites} />
      </section>

      <Footer />
    </div>
  );
}
