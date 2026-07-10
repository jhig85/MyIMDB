import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #f1f0ef;
  padding: 100px 0;
  display: flex;
  justify-content: center;

  img {
    max-width: 250px;
    height: auto;
    margin-right: 50px;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
      margin: 30px 15px;

      a {
        text-decoration: none;
        color: #444;
        cursor: pointer;

        &:hover {
          color: #333;
        }
      }
    }
  }
`;

export default StyledFooter;
