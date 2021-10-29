import { Promo } from '../../types/promo';

type PromoScreenProps = {
  promo: Promo,
}

function PromoScreen({promo}: PromoScreenProps): JSX.Element {
  const imgAlt = `${promo.name} poster`;
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={promo.posterImage} alt={imgAlt} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promo.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promo.genre}</span>
            <span className="film-card__year">{promo.released}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoScreen;
