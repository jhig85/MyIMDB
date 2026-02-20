import React, { useEffect, useState } from 'react';
import StyledMovieList from './MovieList.styled';
import { get } from '../utils/utils';
import { imdbUrl } from '../utils/config';
import { Link } from 'react-router-dom';

interface MovieListState {
  vote_average: number;
  title: string;
  poster_path: string;
  overview: string;
}

function MovieList(props: any) {
  const [movieList, setMovieList] = useState<MovieListState[]>([]);
  const [initialMovies, setInitialMovies] = useState<number>(6);

  useEffect(() => {
    if (props.searchInput.length > 0) {
      get(`/api/movieSearch?query=${props.searchInput}`).then((data) => {
        setMovieList(data?.response?.results);
      });
    } else {
      get(`/api/movieList`).then((data) => {
        setMovieList(data?.results);
      });
    }
  }, [props.searchInput]);

  const filteredData = movieList?.filter((el: any) => {
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
    <StyledMovieList>
      {filteredData &&
        filteredData.slice(0, initialMovies).map((movie: any, i) => (
          <div className="movie" key={i}>
            <Link to={'#'} className="movie-link">
              <img src={imdbUrl + movie.poster_path} alt={movie.overview} />
              <div className="movie-content-container">
                <h4 className="movie-title">{movie.title}</h4>
                <div className="rating">Rating: {getRating[i]}</div>
                <p className="movie-overview">{movie.overview}</p>
              </div>
            </Link>
          </div>
        ))}

      <div className="button-container">
        <button
          data-text="SHOW MORE PHOTOS"
          onClick={() => loadMoreMovies()}
          disabled={filteredData?.length <= initialMovies}
        >
          SHOW MORE MOVIES
        </button>
      </div>
    </StyledMovieList>
  );
}

export default MovieList;
