import styled from 'styled-components';

const HomeStyles = styled.div`
  margin: 0 auto;

  .content-search-bar-container {
    background-color: #f1f0ef;
    padding: 100px 0;

    h1 {
      font-size: 72px;
      max-width: 50%;
      margin: 10px auto;
      color: #333;
    }

    p {
      max-width: 50%;
      margin: 0 auto 60px;
      color: #333;
      font-size: 16px;
    }
  }
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

  .search-bar-container {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 50%;
    min-width: 350px;
    display: flex;
    justify-content: center;
    gap: 0.5em;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    input {
      width: 100%;
      border: none;
      z-index: 1;
      outline: none;
    }
  }
`;

export default HomeStyles;
