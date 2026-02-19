import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #3a6e80;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 100px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 20px;
    background-color: #3a6e80;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export default StyledHeader;
