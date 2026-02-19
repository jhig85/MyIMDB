import React, { useEffect, useState } from 'react';
import StyledActorsList from './Actors.styled';
import { get } from '../../utils/utils';
import { imdbUrl } from '../../utils/config';

interface MovieListState {
  vote_average: number;
  title: string;
  poster_path: string;
  overview: string;
}

function Actors(props: any) {
  const [movieList, setMovieList] = useState<MovieListState[]>([]);
  const [initialMovies, setInitialMovies] = useState<number>(6);

  useEffect(() => {
    get('/api/movielist').then((data) => setMovieList(data.results));
  }, []);

  const filteredData = movieList.filter((el: any) => {
    if (props.searchInput === '') {
      return el;
    } else {
      return el?.title.toLowerCase().includes(props.searchInput);
    }
  });

  const getRating =
    movieList && movieList.map((movie) => Math.round(movie.vote_average * 10));

  const loadMoreMovies = () => setInitialMovies(initialMovies + 6);

  return (
    <StyledActorsList>
      {filteredData &&
        filteredData.slice(0, initialMovies).map((movie: any, i) => (
          <div className="movie" key={i}>
            <img src={imdbUrl + movie.poster_path} alt={movie.overview} />
            <h4>{movie.title}</h4>
            <div>Rating: {getRating[i]}</div>
            <p>{movie.overview}</p>
          </div>
        ))}

      <div className="button-container">
        <button
          data-text="SHOW MORE PHOTOS"
          onClick={() => loadMoreMovies()}
          disabled={filteredData.length <= initialMovies}
        >
          SHOW MORE ACTORS
        </button>
      </div>
    </StyledActorsList>
  );
}

export default Actors;
