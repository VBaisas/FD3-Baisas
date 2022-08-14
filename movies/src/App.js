import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Content">
          <PagesRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


