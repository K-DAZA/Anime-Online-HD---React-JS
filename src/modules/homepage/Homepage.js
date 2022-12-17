import React, { useState } from 'react'
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import '../../css/Homepage.css'
import chica from '../../images/chica.png'
import '../../animations/HomePageanim.css'; 
import useGetAnimes from './hooks/useGetAnimes';

export default function Homepage() {

  const {
    anime, animeTwo, animeThree, animeFour, animeFive, animeSix,
    image, imageTwo, imageThree, imageFour, imageFive, imageSix,
    year,  yearTwo,  yearThree,  yearFour,  yearFive,  yearSix
  } = useGetAnimes();

  const [nombre, setNombre] = useState('Anime World HD');
  
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
        <Card name={anime} imagen={image} year={year}/>
        <Card name={animeTwo} imagen={imageTwo} year={yearTwo}/>
        <Card name={animeThree} imagen={imageThree} year={yearThree}/>
        <Card name={animeFour} imagen={imageFour} year={yearFour}/>
        <Card name={animeFive} imagen={imageFive} year={yearFive}/>
        <Card name={animeSix} imagen={imageSix} year={yearSix}/>
        </div>
      </div>

      <Footer />

      <div className="mt-4 h-20">

      </div>

    </div>
    )
}

// FUNCIONES PARA EVENTOS



