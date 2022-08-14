import './Footer.css';

import TMDBLogo from '../images/TMDB_logo.svg'

function Footer() {
  return (
      <div className="Footer">
        <img src={TMDBLogo} alt="TMDB logo" className="TMDBLogo"></img>
        <div className="Attribution">This product uses the TMDB API but is not endorsed or certified by TMDB.</div>
      </div>
  );
}

export default Footer;