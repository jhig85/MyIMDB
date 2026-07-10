import React, { useState, useEffect } from 'react';
import HomeStyles from './Home.styled';
import MovieList from './components/MovieList';
import TVShows from './components/TvShows/TvShows';
import SearchIcon from './images/search-icon.svg';
import { get } from './utils/utils';

interface HomeProps {
  headline?: string;
  message?: string;
}

const Home = () => {
  const [data, setData] = useState<HomeProps>({});
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    get(`http://localhost:8081`).then((data) => {
      setData(data);
    });
  }, []);

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target?.value?.toLowerCase();

    setSearchInput(lowerCase);
  };

  return (
    <HomeStyles>
      <div className="content-search-bar-container">
        {data ? (
          <>
            <h1>{data.headline}</h1>
            <p>{data.message}</p>
          </>
        ) : (
          <p>Loading data...</p>
        )}{' '}
        <div className="search-bar-container">
          <img
            src={SearchIcon}
            alt="search for movies"
            height={16}
            width={16}
          />
          <input
            type="text"
            placeholder="Search for movies here"
            onChange={inputHandler}
            value={searchInput}
          />
        </div>
      </div>
      <MovieList searchInput={searchInput} />
      <TVShows searchInput={searchInput} />
    </HomeStyles>
  );
};

export default Home;
