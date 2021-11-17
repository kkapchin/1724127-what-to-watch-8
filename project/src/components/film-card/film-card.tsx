import { useState } from 'react';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
}

function FilmCard({film}: FilmCardProps): JSX.Element {

  const [isPlaying, setIsPlaying] = useState(false);

  const url = `/films/${film.id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <VideoPlayer
        src={film.videoLink}
        poster={film.posterImage}
        name={film.name}
        url={url}
        isPlaying={isPlaying}
        onMouseEnter={() => {
          setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        }}
        onMouseLeave={() => {
          setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        }}
      />
    </article>
  );
}

export default FilmCard;
