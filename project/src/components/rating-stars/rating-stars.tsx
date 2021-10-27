import { RatingStar } from '../rating-star/rating-star';

type RatingStarsProps = {
  currentRating: number,
}

export function RatingStars({currentRating}: RatingStarsProps): JSX.Element {
  const MAX_RATING_VALUE = 10;
  const ratingValues = [...Array(MAX_RATING_VALUE).keys()].map((el) => el + 1).reverse();
  return (
    <div className="rating__stars">
      {ratingValues.map((value) => <RatingStar key={value} value={value} isChecked={value === currentRating} />)}
    </div>
  );
}
