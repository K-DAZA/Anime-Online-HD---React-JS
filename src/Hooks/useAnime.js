import { useEffect, useState } from "react"



export default function useAnime(idAnime, initialValue) {

    // STATE ANIME ONE
    const [nameAnime, setNameAnime] = useState(initialValue);
    const [imageAnime, setImageAnime] = useState(initialValue);
    const [animeYear, setAnimeYear] = useState(initialValue);

    // STATE ANIME TWO
    const [nameAnimeTwo, setNameAnimeTwo] = useState(initialValue);
    const [imageAnimeTwo, setImageAnimeTwo] = useState(initialValue);
    const [animeYearTwo, setAnimeYearTwo] = useState(initialValue);

    // STATE ANIME THREE
    const [nameAnimeThree, setNameAnimeThree] = useState(initialValue);
    const [imageAnimeThree, setImageAnimeThree] = useState(initialValue);
    const [animeYearThree, setAnimeYearThree] = useState(initialValue);

    // STATE ANIME FOUR
    const [nameAnimeFour, setNameAnimeFour] = useState(initialValue);
    const [imageAnimeFour, setImageAnimeFour] = useState(initialValue);
    const [animeYearFour, setAnimeYearFour] = useState(initialValue);

    // STATE ANIME FIVE
    const [nameAnimeFive, setNameAnimeFive] = useState(initialValue);
    const [imageAnimeFive, setImageAnimeFive] = useState(initialValue);
    const [animeYearFive, setAnimeYearFive] = useState(initialValue);

    // STATE ANIME SIX
    const [nameAnimeSix, setNameAnimeSix] = useState(initialValue);
    const [imageAnimeSix, setImageAnimeSix] = useState(initialValue);
    const [animeYearSix, setAnimeYearSix] = useState(initialValue);


    // useEffect PARA OBTENER DATOS DE LA API
    useEffect(() => {
        getDataAnimeOne();
        getDataAnimeTwo();
        getDataAnimeThree();
        getDataAnimeFour();
        getDataAnimeFive();
        getDataAnimeSix();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // GET DATA ANIME ONE
    const getDataAnimeOne = async () => {
        const animes = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
        const datos = await animes.json();
        setNameAnime(datos.data.title);
        setImageAnime(datos.data.images.jpg.image_url);
        setAnimeYear(datos.data.year);
    };

    // GET DATA ANIME TWO
    const getDataAnimeTwo = async () => {
        const animes = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
        const datos = await animes.json();
        setNameAnimeTwo(datos.data.title);
        setImageAnimeTwo(datos.data.images.jpg.image_url);
        setAnimeYearTwo(datos.data.year);
    };

    // GET DATA ANIME THREE
    const getDataAnimeThree = async () => {
        const animes = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
        const datos = await animes.json();
        setNameAnimeThree(datos.data.title);
        setImageAnimeThree(datos.data.images.jpg.image_url);
        setAnimeYearThree(datos.data.year);
    };

    // GET DATA ANIME FOUR
    const getDataAnimeFour = async () => {
        const animes = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
        const datos = await animes.json();
        setNameAnimeFour(datos.data.title);
        setImageAnimeFour(datos.data.images.jpg.image_url);
        setAnimeYearFour(datos.data.year);
    };

    // GET DATA ANIME FIVE
    const getDataAnimeFive = async () => {
        const animes = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
        const datos = await animes.json();
        setNameAnimeFive(datos.data.title);
        setImageAnimeFive(datos.data.images.jpg.image_url);
        setAnimeYearFive(datos.data.year);
    };

    // GET DATA ANIME SIX
    const getDataAnimeSix = async () => {
        const animes = await fetch(`https://api.jikan.moe/v4/anime/${idAnime}`);
        const datos = await animes.json();
        setNameAnimeSix(datos.data.title);
        setImageAnimeSix(datos.data.images.jpg.image_url);
        setAnimeYearSix(datos.data.year);
    };

    // RETURN OF VARIABLES STATES
    return {
        nameAnime,
        nameAnimeTwo,
        nameAnimeThree,
        nameAnimeFour,
        nameAnimeFive,
        nameAnimeSix,
        imageAnime,
        imageAnimeTwo,
        imageAnimeThree,
        imageAnimeFour,
        imageAnimeFive,
        imageAnimeSix,
        animeYear,
        animeYearTwo,
        animeYearThree,
        animeYearFour,
        animeYearFive,
        animeYearSix
    };
}
