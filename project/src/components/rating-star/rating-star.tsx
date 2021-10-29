type RatingStarProps = {
  isChecked: boolean,
  value: number,
}

export function RatingStar({isChecked, value}:RatingStarProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} defaultChecked={isChecked}/>
      <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
    </>
  );
}
