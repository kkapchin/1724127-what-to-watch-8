import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import { Logo } from '../logo/logo';
import { RatingStars } from '../rating-stars/rating-stars';

const DECIMAL_RADIX = 10;

type AddReviewScreenProps = {
  film: Film,
}

export function AddReviewScreen({film}: AddReviewScreenProps): JSX.Element {
  const url = '';
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(8);
  console.log(rating)
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isHeader />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}`} >{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}/review`} >Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href={url} className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div
            className="rating"
            onChange={(e) => {setRating(parseInt((e.target as HTMLInputElement).value, DECIMAL_RADIX));}}
          >
            <RatingStars currentRating={rating} />
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={(e) => {setComment((e.target.value));}}
              value={comment}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
