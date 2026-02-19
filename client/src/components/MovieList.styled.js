import styled from 'styled-components';

const StyledMovieList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  flex-wrap: wrap;
  max-width: 1100px;

  .movie {
    width: 30%;
    max-width: 300px;
    margin: 0 0 30px 0;
    box-sizing: border-box;
    background-color: #faf7f6;

    .movie-link {
      text-decoration: none;
      cursor: pointer;

      img {
        max-width: 100%;
        height: auto;
      }

      .movie-content-container {
        width: 85%;
        margin: 20px auto;
        .movie-title {
          margin: 0 auto 10px;
          color: #333;
        }

        .rating {
          color: #333;
          margin: 10px auto;
        }

        .movie-overview {
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          margin-bottom: 10px;
          color: #333;
        }
      }
    }
  }

  .button-container {
    margin: 50px auto;
    width: 100%;
    text-align: center;

    button {
      border: none;
      border-radius: 4px;
      background: #1d97ef;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      line-height: normal;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
      width: 200px;
      height: 60px;
    }
  }
`;

export default StyledMovieList;
