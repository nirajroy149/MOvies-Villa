import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import searchicon from "./images/search.png"

function App() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Game")
    const [movieName, setMovieName] = useState("");
    const [err, seterr] = useState(false);

    function handleChange(e){
        const name = e.target.value;
        setMovieName(name);
    }

    function handleClick(){
        setLoading(true)
        searchMovies(movieName);
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
            setLoading(false);
        } catch (error) {
            seterr(true);
        }
    }

        
    useEffect(() => {
        searchMovies(title);
    }, []);

    if (loading) return <h1 className="heading">Loading...</h1>

    return <>
        <h1 className="heading">MOvies Villa</h1>

        <div className="search">
            <input
                onChange={handleChange}
                value={movieName}
                type="text"
                placeholder="Search for movies"
            />
            <img
            onClick = {handleClick}
                src={searchicon}
                alt="notfound"
            />
        </div>

        <div className="container">
            {movies.map((movie) => {
                return <Card key={movie.id} movie={movie} />
            })}
        </div>
    </>
}
export default App;

