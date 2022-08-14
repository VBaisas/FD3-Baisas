import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Trending</NavLink>
        <NavLink to="/movie/page/1" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Movies</NavLink>
        <NavLink to="/tv/page/1" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>TV Series</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
