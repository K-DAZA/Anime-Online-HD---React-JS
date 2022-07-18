import React, { useState } from 'react'
import '../css/Homepage.css'
import '../animations/HomePageanim.css'; 
import chica from '../images/chica.png'
import Card from '../components/Card';
import Footer from '../components/Footer';
import useAnime from '../Hooks/useAnime';

export default function Homepage(props) {

  //  --- PROPS --- 
  let number = props.animes[0];
  let number_two = props.animes[1];
  let number_three = props.animes[2];
  let number_four = props.animes[3];
  let number_five = props.animes[4];
  let number_six = props.animes[5];


  // --- DATA ANIME ONE --- 
  const {nameAnime, imageAnime, animeYear} = useAnime(number, '');

  // --- DATA ANIME TWO ---
  const {nameAnimeTwo, imageAnimeTwo, animeYearTwo} = useAnime(number_two, '');

  // --- DATA ANIME THREE ---
  const {nameAnimeThree, imageAnimeThree, animeYearThree} = useAnime(number_three, '');
  
  // --- DATA ANIME FOUR ---
  const {nameAnimeFour, imageAnimeFour, animeYearFour} = useAnime(number_four, '');

  // --- DATA ANIME FIVE ---
  const {nameAnimeFive, imageAnimeFive, animeYearFive} = useAnime(number_five, '');

  // --- DATA ANIME SIX ---
  const {nameAnimeSix, imageAnimeSix, animeYearSix} = useAnime(number_six, '');

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
        <Card name={ nameAnime }     imagen={ imageAnime }      year={ animeYear }/>
        <Card name={ nameAnimeTwo }  imagen={ imageAnimeTwo }   year={ animeYearTwo }/>
        <Card name={ nameAnimeThree }imagen={ imageAnimeThree } year={ animeYearThree }/>
        <Card name={ nameAnimeFour } imagen={ imageAnimeFour }  year={ animeYearFour }/>
        <Card name={ nameAnimeFive } imagen={ imageAnimeFive }  year={ animeYearFive }/>
        <Card name={ nameAnimeSix }  imagen={ imageAnimeSix }   year={ animeYearSix }/>
        </div>
      </div>

      <Footer />

      <div className="mt-4 h-20">

      </div>

    </div>
    )
}