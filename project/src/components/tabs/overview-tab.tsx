import { Tab } from '../../const';
import { Film } from '../../types/films';
import { changeNumberFormat, getRatingLevel } from '../../utils';

type OverviewTabProps = {
  film: Film,
  activeTab: Tab,
}

function OverviewTab({ film, activeTab }: OverviewTabProps): JSX.Element | null {

  if(!(activeTab === Tab.Default)) {
    return null;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{changeNumberFormat(film.rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${film.starring}`}</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
