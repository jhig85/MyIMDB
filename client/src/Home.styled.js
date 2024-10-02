import styled from "styled-components";

const HomeStyles = styled.div`
  max-width: 90%;
  margin: 10px auto;
  button {
    outline: none;
    border: none;
    border-radius: 2px;
    width: 200px;
    background: #0076c0;
    color: white;
    font-size: 14px;
    line-height: 100%;
    font-weight: 600;
    padding: 20px 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .movie-list {
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
    flex-wrap: wrap;
    max-width: 1200px;

    .movie {
      width: 30%;
      border: 1px solid #999;
      padding: 25px;
      margin: 0 0 30px 0;
      box-sizing: border-box;
    }
  }
`;

export default HomeStyles;
