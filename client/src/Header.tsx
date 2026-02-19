import { Link } from 'react-router-dom';
import StyledHeader from './Header.styled';
import HMDBLogo from './images/hmdb-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <img src={HMDBLogo} alt='Higgy"s Movie Database' className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <Link to="/actors">Actors</Link>
        <Link to="/about">About</Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
