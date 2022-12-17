import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './modules/homepage/Homepage';
import NavBar from './components/NavBar';
import AnimeSearch from './modules/animeSearch/AnimeSearch';
import AnimeList from './modules/animeList/AnimeList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/animes" element={<AnimeSearch />}/>
          <Route path="/list" element={<AnimeList />}/>
          <Route path="" element=""/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
