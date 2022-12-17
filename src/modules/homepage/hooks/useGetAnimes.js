import { useEffect, useState } from "react";

const useGetAnimes = () => {

  let animesID = [7, 8, 20, 21, 24, 26];

  const [anime, setAnime] = useState();
  const [image, setImage] = useState();
  const [year, setYear] = useState();
  const [url, setUrl] = useState();

  const [animeTwo, setAnimeTwo] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [yearTwo, setYearTwo] = useState();

  const [animeThree, setAnimeThree] = useState();
  const [imageThree, setImageThree] = useState();
  const [yearThree, setYearThree] = useState();

  const [animeFour, setAnimeFour] = useState();
  const [imageFour, setImageFour] = useState();
  const [yearFour, setYearFour] = useState();

  const [animeFive, setAnimeFive] = useState();
  const [imageFive, setImageFive] = useState();
  const [yearFive, setYearFive] = useState();

  const [animeSix, setAnimeSix] = useState();
  const [imageSix, setImageSix] = useState();
  const [yearSix, setYearSix] = useState();


  const getDataAnimeOne = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${animesID[0]}`);
    const datos = await animes.json();
    setAnime(datos.data.title);
    setImage(datos.data.images.jpg.image_url);
    setYear(datos.data.year);
    setUrl(datos.data.url);
  }

  const getDataAnimeTwo = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${animesID[1]}`);
    const datos = await animes.json();
    setAnimeTwo(datos.data.title);
    setImageTwo(datos.data.images.jpg.image_url);
    setYearTwo(datos.data.year);
  }

  const getDataAnimeThree = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${animesID[2]}`);
    const datos = await animes.json();
    setAnimeThree(datos.data.title);
    setImageThree(datos.data.images.jpg.image_url);
    setYearThree(datos.data.year);
  }


  const getDataAnimeFour = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${animesID[3]}`);
    const datos = await animes.json();
    setAnimeFour(datos.data.title);
    setImageFour(datos.data.images.jpg.image_url);
    setYearFour(datos.data.year);
  }

  const getDataAnimeFive = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${animesID[4]}`);
    const datos = await animes.json();
    setAnimeFive(datos.data.title);
    setImageFive(datos.data.images.jpg.image_url);
    setYearFive(datos.data.year);
  }

  const getDataAnimeSix = async () => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime/${animesID[5]}`);
    const datos = await animes.json();
    setAnimeSix(datos.data.title);
    setImageSix(datos.data.images.jpg.image_url);
    setYearSix(datos.data.year);
  }

   useEffect(() => {
    getDataAnimeOne()
    getDataAnimeTwo()
    getDataAnimeThree()
    getDataAnimeFour()
    getDataAnimeFive()
    getDataAnimeSix()
  }, []);


  return {
    anime, animeTwo, animeThree, animeFour, animeFive, animeSix,
    image, imageTwo, imageThree, imageFour, imageFive, imageSix,
    year,  yearTwo,  yearThree,  yearFour,  yearFive,  yearSix
  }
}

export default useGetAnimes