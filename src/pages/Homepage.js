import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../css/Homepage.css'
import chica from '../images/chica.png'
import '../animations/HomePageanim.css'; 

export default function Homepage(props) {

  //  - - PROPS - - 
  let number = props.animes[0];
  let number_dos = props.animes[1];
  let number_tres = props.animes[2];
  let number_cuatro = props.animes[3];
  let number_cinco = props.animes[4];
  let number_seis = props.animes[5];


  // - - ANIME UNO - - 
  const [anime, setAnime] = useState(null);
  const [imagen, setImage] = useState();
  const [year, setYear] = useState();
  const [url, setUrl] = useState();

  //ANIME DOS
  const [anime_dos, setAnimeDos] = useState();
  const [image_dos, setImageDos] = useState();
  const [year_dos, setYearDos] = useState();

  //ANIME TRES
  const [anime_tres, setAnimeTres] = useState();
  const [image_tres, setImageTres] = useState();
  const [year_tres, setYearTres] = useState();

  //ANIME CUATRO
  const [anime_cuatro, setAnimeCuatro] = useState();
  const [image_cuatro, setImageCuatro] = useState();
  const [year_cuatro, setYearCuatro] = useState();

  //ANIME CINCO
  const [anime_cinco, setAnimeCinco] = useState();
  const [image_cinco, setImageCinco] = useState();
  const [year_cinco, setYearCinco] = useState();


  //ANIME SEIS
  const [anime_seis, setAnimeSeis] = useState();
  const [image_seis, setImageSeis] = useState();
  const [year_seis, setYearSeis] = useState();

  //HOOK REACT
  useEffect(() => {
    obtenerDatos()
    obtenerDatosdos()
    obtenerDatosTres()
    obtenerDatosCuatro()
    obtenerDatosCinco()
    obtenerDatosSeis()
  }, []);

  //PETICIONES API 
  const obtenerDatos = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${number}`);
    const datos = await animes.json();
    setAnime(datos.data.title);
    setImage(datos.data.images.jpg.image_url);
    setYear(datos.data.year);
    setUrl(datos.data.url);
    console.log(datos);
  }

  const obtenerDatosdos = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${number_dos}`);
    const datos = await animes.json();
    setAnimeDos(datos.data.title);
    setImageDos(datos.data.images.jpg.image_url);
    setYearDos(datos.data.year);
    //console.log(datos);
  }

  const obtenerDatosTres = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${number_tres}`);
    const datos = await animes.json();
    setAnimeTres(datos.data.title);
    setImageTres(datos.data.images.jpg.image_url);
    setYearTres(datos.data.year);
    //console.log(datos);
  }

  const obtenerDatosCuatro = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${number_cuatro}`);
    const datos = await animes.json();
    setAnimeCuatro(datos.data.title);
    setImageCuatro(datos.data.images.jpg.image_url);
    setYearCuatro(datos.data.year);
    //console.log(datos);
  }

  const obtenerDatosCinco = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${number_cinco}`);
    const datos = await animes.json();
    setAnimeCinco(datos.data.title);
    setImageCinco(datos.data.images.jpg.image_url);
    setYearCinco(datos.data.year);
    //console.log(datos);
  }

  const obtenerDatosSeis = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${number_seis}`);
    const datos = await animes.json();
    setAnimeSeis(datos.data.title);
    setImageSeis(datos.data.images.jpg.image_url);
    setYearSeis(datos.data.year);
    //console.log(datos);
  }

  //ESTADOS (HOOKS)
  const [nombre, setNombre] = useState('Anime World HD');
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - 
  return (

    <div className="container rounded box-border mt-5 h-96 p-0" id="Homepage">
      <div className="sm:flex flex-row" id="container">
        <div className="w-full rounded">
          <img
            src={chica}
            alt=""
            className="img-responsive w-full h-full	rounded"
          />
        </div>

        <div className="w-full bg-black rounded text-white box-border p-4">
          <h1
            className="text-4xl ml-4 mt-3 cursor-pointer hover:text-violet-400 font-medium lg:text-5xl"
            onClick={() => setNombre("Developed By: Kevin Daza")}
            onDoubleClick={() => setNombre("Anime World HD")}
            id='title_main'
          >
            {nombre}
          </h1>

          <p className="mt-16 text-justify p-3 box-border lg:mt-24">
            <strong>'Anime world'</strong> es una página creada con el fin de
            que puedas disfrutar de tus animes favoritos de forma online, sin
            preocupaciones ni nada por el estilo. Cuenta con un gran diseño, que
            es de fácil consumo y su aspecto es muy agradable a la vista del
            usuario.
          </p>

          <div className="box-border p-3">
            <a className="float-right hover:text-violet-400 lg:mt-24" href="/">
              Ver más ➜
            </a>
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl text-white mt-4 mb-4 bg-dark box-border p-4 rounded font-medium">Animes en Lista</h1>

      <div className="container p-4 box-border bg-dark rounded text-center">
        <div className="box-border pl-20 sm:pl-48 md:pl-52 lg:pl-0 lg:flex lg:flex-row">
        <Card name={anime} imagen={imagen} year={year} url={url}/>
        <Card name={anime_dos} imagen={image_dos} year={year_dos}/>
        <Card name={anime_tres} imagen={image_tres} year={year_tres}/>
        <Card name={anime_cuatro} imagen={image_cuatro} year={year_cuatro}/>
        <Card name={anime_cinco} imagen={image_cinco} year={year_cinco}/>
        <Card name={anime_seis} imagen={image_seis} year={year_seis}/>
        </div>
      </div>

      <Footer />

      <div className="mt-4 h-20">

      </div>

    </div>
    )
}

// FUNCIONES PARA EVENTOS



