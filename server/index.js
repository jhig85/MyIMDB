const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');
const port = 8081;
const imdbUrl = 'https://api.themoviedb.org/3/';

const imdbAcessToken = 'ffe7b12ae82de26c1ce8e792d807cc9f';
const imdbReadAccessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmU3YjEyYWU4MmRlMjZjMWNlOGU3OTJkODA3Y2M5ZiIsIm5iZiI6MTcyNzg5NzEzNC4yNTIzMjksInN1YiI6IjY2ZmQ5ZDkyOTI1ZmRmOTI1YjdjNWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zrRhrtSaLixBklcS0PfXu85enwE_IfWHsCkYV_KhiIM';

console.log(app);

app.use(cors());

const authenticateUrl = `${imdbUrl}authentication`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${imdbReadAccessToken}`,
  },
};

fetch(authenticateUrl, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error('error:' + err));

const getMovieListUrl = `${imdbUrl}discover/movie?include_adult=false&include_video=false&language=en-US&page=500&sort_by=popularity.desc`;
const getTvShowListUrl = `${imdbUrl}discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;

fetch(getMovieListUrl, options)
  .then((res) => res.json())
  // .then((json) => console.log(json))
  .catch((err) => console.error('error:' + err));

app.get('/api/movielist', async (req, res) => {
  try {
    const response = await fetch(getMovieListUrl, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

async function getMoviesSearch(query) {
  let response = await fetch(
    `${imdbUrl}search/movie?api_key=${imdbAcessToken}&include_adult=false&language=en-US&page=1&query=${query}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}

app.get('/api/movieSearch', async (req, res) => {
  try {
    const query = req.query.query;
    getMoviesSearch(query).then((data) => {
      res.send({ response: data });
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

fetch(getTvShowListUrl, options)
  .then((res) => res.json())
  // .then((json) => console.log(json))
  .catch((err) => console.error('error:' + err));

app.get('/api/tvShowlist', async (req, res) => {
  try {
    const response = await fetch(getTvShowListUrl, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

async function getTvShowsSearch(query) {
  let response = await fetch(
    `${imdbUrl}search/tv?api_key=${imdbAcessToken}&include_adult=false&language=en-US&page=1&query=${query}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}

app.get('/api/tvShowSearch', async (req, res) => {
  try {
    const query = req.query.query;
    getTvShowsSearch(query).then((data) => {
      res.send({ response: data });
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/', (req, res) => {
  res.json({
    headline: 'Welcome!',
    message:
      'Search for thousands of movies, TV Shows and Actors. Also, have fun.',
  });
});

app.get('/api/about', (req, res) => {
  // Handle your API logic here
  res.json({
    headline: 'About Me',
    message: 'Hello, my name is Higgy! I love eating tacos and riding my bike',
  });
});

app.listen(port, () => {
  console.log('server listening on port 8081');
});
