import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import searchicon from "./images/search.png"

function App() {

    const [movies, setMovies] = useState([]);
    const [startloading, setstartLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [movieName, setMovieName] = useState("");

    function handleChange(e) {
        const name = e.target.value;
        setMovieName(name);
    }

    function handleClick() {
        setLoading(true)
        searchMovies(movieName);

    }

    function handleEnter(e) {
        if (movieName != "") {
            if (e.key === "Enter") {
                setLoading(true)
                searchMovies(movieName);
                e.preventDefault();

            }
        }
    }

    const searchMovies = async (title) => {

        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
                    'X-RapidAPI-Key': '7cb7c78938msh0ac0a24c3ccd7e9p122e80jsn6f4afd6ee3d7'
                }
            };
            const response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${title}`, options)
            const data = await response.json();
            setMovies(data.d);
            console.log(data.d);

        } catch (error) {
                console.log(error);

        }
        setLoading(false);
        // const data =
        //     [
        //         {
        //             "i": {
        //                 "imageUrl": "https://m.media-amazon.com/images/I/314t8YNB69L._SX144_.png"
        //             },
        //             "id": "/search/title/?genres=game-show",
        //             "l": "Game-Show",
        //             "s": "Top 50 Game-Show Movies and TV Shows"
        //         },
        //         {
        //             "i": {
        //                 "height": 1500,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        //                 "width": 1102
        //             },
        //             "id": "tt0944947",
        //             "l": "Game of Thrones",
        //             "q": "TV series",
        //             "rank": 19,
        //             "s": "Emilia Clarke, Peter Dinklage",
        //             "v": [
        //                 {
        //                     "i": {
        //                         "height": 720,
        //                         "imageUrl": "https://m.media-amazon.com/images/M/MV5BZTg4YzdjNTctNDg5Mi00ZmU1LTkzOWEtNmMyNDBjZjNhNTJiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
        //                         "width": 1280
        //                     },
        //                     "id": "vi59490329",
        //                     "l": "Official Series Trailer",
        //                     "s": "3:19"
        //                 },
        //                 {
        //                     "i": {
        //                         "height": 1080,
        //                         "imageUrl": "https://m.media-amazon.com/images/M/MV5BMmI5YmJmMmEtYWZhOC00M2NhLTg0MjItYjZiMzM1YjdiOWE5XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
        //                         "width": 1920
        //                     },
        //                     "id": "vi1149616665",
        //                     "l": "All About \"House of the Dragon\"",
        //                     "s": "2:07"
        //                 },
        //                 {
        //                     "i": {
        //                         "height": 720,
        //                         "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTg0ODM4NTc3OV5BMl5BanBnXkFtZTgwODAwODE1OTE@._V1_.jpg",
        //                         "width": 1280
        //                     },
        //                     "id": "vi2166011673",
        //                     "l": "Season 7 In-Production Teaser",
        //                     "s": "2:03"
        //                 }
        //             ],
        //             "vt": 304,
        //             "y": 2011,
        //             "yr": "2011-2019"
        //         },
        //         {
        //             "i": {
        //                 "height": 2048,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
        //                 "width": 1382
        //             },
        //             "id": "tt10919420",
        //             "l": "Squid Game",
        //             "q": "TV series",
        //             "rank": 486,
        //             "s": "Lee Jung-jae, Park Hae-soo",
        //             "v": [
        //                 {
        //                     "i": {
        //                         "height": 1080,
        //                         "imageUrl": "https://m.media-amazon.com/images/M/MV5BNmFkMDU4YzQtNTMyMC00NDQwLWFhZDAtNmQ1ZmZkYjgwM2JmXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
        //                         "width": 1920
        //                     },
        //                     "id": "vi2427699993",
        //                     "l": "Official Trailer",
        //                     "s": "2:07"
        //                 },
        //                 {
        //                     "i": {
        //                         "height": 1080,
        //                         "imageUrl": "https://m.media-amazon.com/images/M/MV5BZmExYjA5YjYtZjNlMC00MmFmLTk5NzAtMWJkZTdlM2IxYWM0XkEyXkFqcGdeQWplZmZscA@@._V1_.jpg",
        //                         "width": 1920
        //                     },
        //                     "id": "vi3754017561",
        //                     "l": "What We Watched in 2021: Fan-Favorite TV Shows and Streaming Movies",
        //                     "s": "2:48"
        //                 },
        //                 {
        //                     "i": {
        //                         "height": 605,
        //                         "imageUrl": "https://m.media-amazon.com/images/M/MV5BMGZlZmYyOWMtZjJhZS00NWU3LTgxZDctYjc5ZDVkNTZhNDAxXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
        //                         "width": 1075
        //                     },
        //                     "id": "vi1799209753",
        //                     "l": "Squid Game: Season 1 (Latin America Market Trailer 1 Subtitled)",
        //                     "s": "2:06"
        //                 }
        //             ],
        //             "vt": 9,
        //             "y": 2021,
        //             "yr": "2021-"
        //         },
        //         {
        //             "i": {
        //                 "height": 1969,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg",
        //                 "width": 1321
        //             },
        //             "id": "tt2084970",
        //             "l": "The Imitation Game",
        //             "q": "feature",
        //             "rank": 834,
        //             "s": "Benedict Cumberbatch, Keira Knightley",
        //             "y": 2014
        //         },
        //         {
        //             "i": {
        //                 "height": 1500,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BOWYyNjA5MmQtNjRiOC00OTgzLTk1ZjEtZDE0N2YyYjI5YTUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        //                 "width": 1013
        //             },
        //             "id": "tt10580064",
        //             "l": "Most Dangerous Game",
        //             "q": "TV series",
        //             "rank": 865,
        //             "s": "Liam Hemsworth, Sarah Gadon",
        //             "y": 2020,
        //             "yr": "2020-"
        //         },
        //         {
        //             "i": {
        //                 "height": 1654,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        //                 "width": 1169
        //             },
        //             "id": "tt0119174",
        //             "l": "The Game",
        //             "q": "feature",
        //             "rank": 903,
        //             "s": "Michael Douglas, Deborah Kara Unger",
        //             "y": 1997
        //         },
        //         {
        //             "i": {
        //                 "height": 4096,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BNDI2MDQzZDAtZmVlZS00MWU1LThkNzUtNjZmZmY3ZDljYjk2XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
        //                 "width": 2764
        //             },
        //             "id": "tt8718158",
        //             "l": "The Hating Game",
        //             "q": "feature",
        //             "rank": 1220,
        //             "s": "Lucy Hale, Austin Stowell",
        //             "y": 2021
        //         },
        //         {
        //             "i": {
        //                 "height": 4096,
        //                 "imageUrl": "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        //                 "width": 2764
        //             },
        //             "id": "tt4209788",
        //             "l": "Molly's Game",
        //             "q": "feature",
        //             "rank": 1232,
        //             "s": "Jessica Chastain, Idris Elba",
        //             "y": 2017
        //         }
        //     ]

        // setMovies(data);
        // setLoading(false)
    }



    useEffect(() => {
        const title = ["Game", "Avengers", "Netflix", "Horror"];
        const x = Math.floor(Math.random() * 4);
        searchMovies(title[x]);
        setTimeout(() => {
            setstartLoading(false);
        }, 2000)
    }, []);

    if (startloading) return <h2>Loading...</h2>

    return <>
    <div className="header">
        <p>MOvies Villa</p>
        <div className="search">
                <input
                    onChange={handleChange}
                    onKeyPress={handleEnter}
                    value={movieName}
                    type="text"
                    placeholder="Search for movies"
                />
                <img
                    onClick={handleClick}
                    src={searchicon}
                    alt="notfound"
                />
            </div>
    </div>
        <div className="second">
            {loading ? <h3 className="loading">Loading Movies...</h3> :
                <div className="container">
                    {movies ? movies.map((movie) => {
                        return <Card key={movie.id} movie={movie} />
                    }) : <h3>Movie Not Found</h3>}
                </div>}
        </div>
    </>
}
export default App;

