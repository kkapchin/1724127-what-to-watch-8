import { Link } from 'react-router-dom';

const DELAY = 1000;

type VideoPlayerProps = {
  src: string,
  poster: string,
  name: string,
  url: string,
  isPlaying: boolean,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
};

export default function VideoPlayer({ src, poster, name, url, isPlaying, onMouseEnter, onMouseLeave }: VideoPlayerProps): JSX.Element {

  function onMouseEnterHandler(): void {
    setTimeout(onMouseEnter, DELAY);
  }

  return (
    <Link className="small-film-card__link" to={url}>
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeave}
      >
        <div className="small-film-card__image">
          {!isPlaying
            ? <img src={poster} alt={name} width="280" height="175" />
            : <video src={src} poster={poster} autoPlay={isPlaying} width="280" height="175" muted />}
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </div>
    </Link>
  );
}
