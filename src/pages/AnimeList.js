import React, { useState } from 'react'
import Footer from '../components/Footer';
import "../css/AnimeList.css"
import mixanime from "../images/mixanime.jpg";

export default function AnimeList() {

  const [input, setInput] = useState();
  const [animes, setAnimes] = useState([]);

  function valorInput(event){
    setInput(event.target.value);
  }

  
  function añadirAnime(){
    setAnimes(animes => [...animes, input]);    
    console.log(animes);
  }
  
  

  return (
    <div className="container">
      <div className="mt-5 h-96 lg:overflow-hidden rounded bg-dark text-white p-0 lg:flex">
        <div className="w-4/6 box-border p-5">
          <h1 className="text-4xl">Crea tu lista de Animes</h1>
          <label htmlFor="exampleFormControlInput1" class="form-label mt-4">
            Titulo del Anime:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Sin titulo"
            onChange={valorInput}
          ></input>

          <button onClick={añadirAnime} className="btn btn-success mt-4 w-28">
            Agregar
          </button>
        </div>

        <div className="bg-black w-full h-58  lg:w-4/6 md:h-full lg:h-full text-white">
          <h1 className="box-border p-5 text-5xl">Animes para ver</h1>

          <ol className="text-white  text-1xl p-4 box-border">
            <li className="text-white"> 👓 {animes[0]}  </li>
            <li className="text-white"> 👓 {animes[1]}  </li>
            <li className="text-white"> 👓 {animes[2]}  </li>
            <li className="text-white"> 👓 {animes[3]}  </li>
            <li className="text-white"> 👓 {animes[4]}  </li>
            <li className="text-white"> 👓 {animes[5]}  </li>
          </ol>
        </div>

        <div className="flex-none">
          <div className="container w-48 h-40 mt-5 border border-2" id="imagenAnime">
            <img src={mixanime} alt="" className="h-full w-full" />
          </div>
          <Footer />
        </div>


      </div>



    </div>
  );

  

}
