import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page_Home from './Page_Home';
import Page_Movies from './Page_Movies';
import Page_Search from './Page_Search';
import Page_Movie from './Page_Movie';
import Page_Not_Found from './Page_Not_Found';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Routes>
        <Route path="/" element={<Page_Home/>} />
        <Route path="/:media_type/page/:page" element={<Page_Movies/>} />
        <Route path="/:media_type/:itemID" element={<Page_Movie/>} />
        <Route path="/query/:query/:page" element={<Page_Search/>} />
        <Route path="*" element={<Page_Not_Found/>} />
      </Routes>
    );    
  }
}
    
export default PagesRouter;
    