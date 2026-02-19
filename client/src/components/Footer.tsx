import { Link } from 'react-router-dom';
import StyledFooter from '../Footer.styled';
import HMDBLogo from '../images/hmdb-logo.png';

const Footer = () => {
  return (
    <StyledFooter>
      <img src={HMDBLogo} alt='Higgy"s Movie Database' className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tv-shows">TV Shows</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
