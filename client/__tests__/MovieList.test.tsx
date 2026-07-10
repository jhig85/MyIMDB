import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieList from '../src/components/MovieList';
import { get } from '../src/utils/utils';

jest.mock('../src/components/MovieList.styled', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock(
  '../src/images/no-image-available.webp',
  () => 'no-image-available.webp'
);

jest.mock('../src/utils/config', () => ({
  imdbUrl: 'https://image.tmdb.org/t/p/w500',
}));

jest.mock('../src/utils/utils', () => ({
  get: jest.fn(),
}));

const mockedGet = get as jest.MockedFunction<typeof get>;

const renderMovieList = (searchInput = '') =>
  render(
    <MemoryRouter>
      <MovieList searchInput={searchInput} />
    </MemoryRouter>
  );

beforeEach(() => {
  mockedGet.mockReset();
});

test('loads /api/movieList and renders movies when search input is empty', async () => {
  mockedGet.mockResolvedValueOnce({
    results: [
      {
        vote_average: 7.5,
        title: 'Inception',
        poster_path: '/inception.jpg',
        overview: 'Dreams',
      },
      {
        vote_average: 8.2,
        title: 'Interstellar',
        poster_path: null,
        overview: 'Space',
      },
    ],
  } as any);

  const { container } = renderMovieList('');

  await waitFor(() => {
    expect(mockedGet).toHaveBeenCalledWith('/api/movieList');
  });

  expect(await screen.findByText('Inception')).toBeTruthy();
  expect(screen.getByText('Interstellar')).toBeTruthy();
  expect(screen.getByText('Rating: 75')).toBeTruthy();
  expect(container.querySelectorAll('.movie')).toHaveLength(2);
});

test('loads /api/movieSearch and filters movies by title when search input is present', async () => {
  mockedGet.mockResolvedValueOnce({
    response: {
      results: [
        {
          vote_average: 8.8,
          title: 'The Matrix',
          poster_path: '/matrix.jpg',
          overview: 'Reality',
        },
        {
          vote_average: 7.2,
          title: 'The Matrix Reloaded',
          poster_path: '/reload.jpg',
          overview: 'Reloaded',
        },
        {
          vote_average: 8.1,
          title: 'Inception',
          poster_path: '/inception.jpg',
          overview: 'Dreams',
        },
      ],
    },
  } as any);

  renderMovieList('matrix');

  await waitFor(() => {
    expect(mockedGet).toHaveBeenCalledWith('/api/movieSearch?query=matrix');
  });

  expect(await screen.findByText('The Matrix')).toBeTruthy();
  expect(screen.getByText('The Matrix Reloaded')).toBeTruthy();
  expect(screen.queryByText('Inception')).toBeNull();
  expect(screen.getByText('Rating: 88')).toBeTruthy();
});

test('renders the load-more button with a stable snapshot', async () => {
  mockedGet.mockResolvedValueOnce({
    results: [],
  } as any);

  renderMovieList('');

  await screen.findByRole('button');

  expect(screen.getByRole('button')).toMatchInlineSnapshot(`
    <button
      data-text="SHOW MORE PHOTOS"
      disabled=""
    >
      SHOW MORE MOVIES
    </button>
  `);
});
