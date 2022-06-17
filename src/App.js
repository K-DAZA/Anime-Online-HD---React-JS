import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import AnimeSearch from './pages/AnimeSearch';
import AnimeList from './pages/AnimeList';

function App() {
  return (
    <div className="App">

      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage animes={[7, 8, 20, 21, 24, 26]}/>}/>
          <Route path="/animes" element={<AnimeSearch />}/>
          <Route path="/list" element={<AnimeList />}/>
          <Route path="" element=""/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
