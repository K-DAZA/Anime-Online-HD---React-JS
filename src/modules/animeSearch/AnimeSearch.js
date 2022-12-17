import React, { useState } from 'react'
import AnimeResultsId from '../../components/AnimeResultsId';
import akame from '../../images/akame.jpg'
import '../../animations/AnimeSearchanims.css';

export default function AnimeSearch() {

  // ESTADOS 
  const [numero, setNumero]  = useState();
  const [anime, setAnime] = useState();
  const [imagen, setImagen] = useState();
  const [synopsis, setSynopsis] = useState();
  const [display, setDisplay] = useState('d-none');

  //PETICIONES API 
  const peticionDatos = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${numero}`);
    const data = await animes.json();
    setAnime(data.data.title);
    setImagen(data.data.images.jpg.image_url);
    setSynopsis(data.data.synopsis);
    setDisplay('d-block');
  }

  const num = (event) => {
    setNumero(event.target.value)
  }

  return (
    <div>
      <div className="container bg-dark mt-5 h-4/6 rounded text-white p-0 overflow-hidden box-border lg:flex lg:h-96">
        <div className="p-5 box-border lg:flex flex-column lg:w-4/6">
          <h1 className="text-5xl box-border lg:w-4/6 lg:mt-3" id='title_main'>
            Busca anime por Id:
          </h1>
          <input
            type="number"
            className="form-control mt-5"
            id="idanime"
            placeholder="Anime ID"
            onChange={num}
          />
          <button
            type="button"
            className="btn btn-success w-40 mt-5"
      
            onClick={peticionDatos}
            id="btn"
          >
            Buscar anime
          </button>
        </div>

        <div className="bg-black h-full lg:w-4/6">
          <img src={akame} alt="" className="h-full w-full"></img>
        </div>
      </div>


      {/*Componente AnimeResultsId*/}
      <div className={display}>
      <div className="container bg-dark box-border p-3 text-white mt-5 text-4xl rounded">
        <h1>Resultados de la búsqueda:</h1>
      </div>
        <AnimeResultsId anime={anime} imagen={imagen} synopsis={synopsis}/>
      </div>
      {/*Fin del componente*/}

        <footer className="container mt-4 h-40 bg-dark mb-5 rounded">
          <h5 className="text-white text-2xl text-center box-border p-4">
            Design By: <i>Kevin Jefrey Daza Acosta</i>
          </h5>
          <h5 className="text-white text-base text-center box-border">
            Jikan: <i>Anime online HD - API / 2022</i>
          </h5>
        </footer>
      <div className=" container mb-5 mt-5 h-20">
      </div>
    </div>
  );
}
