import React, { useEffect, useState } from 'react';
import StyledTvShowsList from './TvShows.styled';
import { get } from '../../utils/utils';
import { imdbUrl } from '../../utils/config';

interface TvShowListState {
  vote_average: number;
  name: string;
  poster_path: string;
  overview: string;
}

function TVShows(props: any) {
  const [tvShowList, setTvShowList] = useState<TvShowListState[]>([]);
  const [initialTvShows, setInitialTvShows] = useState<number>(6);

  useEffect(() => {
    if (props.searchInput.length > 0) {
      get(`/api/tvShowSearch?query=${props.searchInput}`).then((data) => {
        setTvShowList(data.response.results);
      });
    } else {
      get(`/api/tvShowlist`).then((data) => {
        setTvShowList(data.results);
      });
    }
  }, [props.searchInput]);

  const filteredData = tvShowList.filter((el: any) => {
    if (props.searchInput === '') {
      return el;
    } else {
      return el?.title.toLowerCase().includes(props.searchInput);
    }
  });

  const getRating =
    tvShowList &&
    tvShowList.map((tvShow) => Math.round(tvShow.vote_average * 10));

  const loadMoreTvShows = () => setInitialTvShows(initialTvShows + 6);

  return (
    <StyledTvShowsList>
      {filteredData &&
        filteredData.slice(0, initialTvShows).map((tvShow: any, i) => (
          <div className="movie" key={i}>
            <img src={imdbUrl + tvShow.poster_path} alt={tvShow.overview} />
            <h4>{tvShow.name}</h4>
            <div>Rating: {getRating[i]}</div>
            <p>{tvShow.overview}</p>
          </div>
        ))}

      <div className="button-container">
        <button
          data-text="SHOW MORE TV SHOWS"
          onClick={() => loadMoreTvShows()}
          disabled={filteredData.length <= initialTvShows}
        >
          SHOW MORE TV SHOWS
        </button>
      </div>
    </StyledTvShowsList>
  );
}

export default TVShows;
