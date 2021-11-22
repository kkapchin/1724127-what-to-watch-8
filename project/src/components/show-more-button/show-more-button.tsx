type ShowMoreButtonProps = {
  onButtonClick: () => void,
  isActive: () => boolean,
}

function ShowMoreButton({ onButtonClick, isActive }: ShowMoreButtonProps): JSX.Element | null {

  const handleButtonClick = () => {
    onButtonClick();
  };

  if(!isActive()) {
    return null;
  }

  return (
    <div
      className="catalog__more"
      onClick={handleButtonClick}
    >
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
