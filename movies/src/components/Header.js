import { Link } from 'react-router-dom';

import './Header.css';

import PagesLinks from '../pages/PagesLinks';
import SearchMovie from './SearchMovie'

const Header = () => {

  return (
    <div className="Header">
      <Link to="/">
        <div className="AppName">Movie Catalog</div>
      </Link>
      <PagesLinks />
      <SearchMovie />
    </div>
  );
}

export default Header;