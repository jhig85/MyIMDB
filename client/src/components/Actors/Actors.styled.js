import styled from 'styled-components';

const StyledActorsList = styled.div`
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

export default StyledActorsList;
